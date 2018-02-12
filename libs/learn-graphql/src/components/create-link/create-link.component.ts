import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { CREATE_LINK_MUTATION, CreateLinkMutationResponse, ALL_LINKS_QUERY } from '../../graphql';

@Component({
  selector: 'app-create-link',
  templateUrl: './create-link.component.html',
  styleUrls: ['./create-link.component.scss']
})
export class CreateLinkComponent implements OnInit {
  description = '';
  url = '';

  constructor(private apollo: Apollo) {}

  ngOnInit() {}

  createLink() {
    this.apollo
      .mutate({
        mutation: CREATE_LINK_MUTATION,
        variables: {
          description: this.description,
          url: this.url
        },
        update: (store, { data: { createLink } }) => {
          const data: any = store.readQuery({
            query: ALL_LINKS_QUERY
          });
          data.allLinks.push(createLink);
          store.writeQuery({ query: ALL_LINKS_QUERY, data });
        }
      })
      .subscribe(response => {});
  }
}
