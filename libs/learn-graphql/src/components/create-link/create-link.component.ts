import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { CREATE_LINK_MUTATION, CreateLinkMutationResponse, ALL_LINKS_QUERY } from '../../graphql';
import { Router, ActivatedRoute } from '@angular/router';
import { GC_USER_ID } from '../../constants';

@Component({
  selector: 'app-create-link',
  templateUrl: './create-link.component.html',
  styleUrls: ['./create-link.component.scss']
})
export class CreateLinkComponent implements OnInit {
  public description = '';
  public url = '';

  constructor(private apollo: Apollo, private router: Router, private route: ActivatedRoute) {}

  public ngOnInit() {}

  public createLink() {
    const postedById = localStorage.getItem(GC_USER_ID);
    if (!postedById) {
      console.error('No user logged in');
      return;
    }

    const newDescription = this.description;
    const newUrl = this.url;
    this.description = '';
    this.url = '';

    this.apollo
      .mutate({
        mutation: CREATE_LINK_MUTATION,
        variables: {
          description: newDescription,
          url: newUrl,
          postedById
        },
        update: (store, { data: { createLink } }) => {
          const data: any = store.readQuery({
            query: ALL_LINKS_QUERY
          });
          data.allLinks.push(createLink);
          store.writeQuery({ query: ALL_LINKS_QUERY, data });
        }
      })
      .subscribe(response => {
        this.router.navigate(['..'], { relativeTo: this.route });
      }, error => {
        console.error(error);
        this.description = newDescription;
        this.url = newUrl;
      });
  }
}
