import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Link } from '../../types';
import { Subscription } from 'rxjs';
import { timeDifferenceForDate } from '../../utils';
import { GC_USER_ID } from '../../constants';
import { Apollo } from 'apollo-angular';
import { CREATE_VOTE_MUTATION } from '../../graphql';
import { DataProxy } from 'apollo-cache';
import { FetchResult } from 'apollo-link';

interface UpdateStoreAfterVoteCallback {
  (proxy: DataProxy, mutationResult: FetchResult, linkId: string);
}

@Component({
  selector: 'app-link-item',
  templateUrl: './link-item.component.html',
  styleUrls: ['./link-item.component.scss']
})
export class LinkItemComponent implements OnInit, OnDestroy {
  @Input() public link: Link;

  @Input() public index: number = 0;

  @Input() public isAuthenticated: boolean = false;

  @Input() public updateStoreAfterVote: UpdateStoreAfterVoteCallback;

  public subscriptions: Subscription[] = [];

  constructor(private apollo: Apollo) {}

  public ngOnInit() {}

  public voteForLink() {
    const userId = localStorage.getItem(GC_USER_ID);
    const voterIds = this.link.votes.map((vote) => vote.user.id);
    if (voterIds.includes(userId)) {
      alert(`User (${userId}) already voted for this link.`);
      return;
    }
    const linkId = this.link.id;

    const mutationSubscription = this.apollo
      .mutate({
        mutation: CREATE_VOTE_MUTATION,
        variables: {
          userId,
          linkId
        },
        update: (store, { data: { createVote } }) => {
          this.updateStoreAfterVote(store, createVote, linkId);
        }
      })
      .subscribe();

    this.subscriptions = [...this.subscriptions, mutationSubscription];
  }

  public humanizeDate(date: string) {
    return timeDifferenceForDate(date);
  }

  public ngOnDestroy(): void {
    for (const sub of this.subscriptions) {
      if (sub && sub.unsubscribe) {
        sub.unsubscribe();
      }
    }
  }
}
