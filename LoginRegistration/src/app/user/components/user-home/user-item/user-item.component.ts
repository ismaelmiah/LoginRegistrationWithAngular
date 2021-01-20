import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';
import { Subscription } from 'rxjs';
import { User } from 'src/app/Model';
import { DataService } from 'src/app/services';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.css'],
})
export class UserItemComponent implements OnInit, OnDestroy {
  currentUser: User;
  dataSubscription: Subscription
  constructor(private route: ActivatedRoute) {}

  ngOnDestroy(): void {
    this.dataSubscription.unsubscribe();
  }

  ngOnInit(): void {
    this.dataSubscription = this.route.data.subscribe((data: Data) => {
      this.currentUser = data['profile'];
    });
  }
}
