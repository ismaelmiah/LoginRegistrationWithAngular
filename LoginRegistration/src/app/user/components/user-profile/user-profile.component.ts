import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { User } from 'src/app/Model';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
})
export class UserProfileComponent implements OnInit, OnDestroy {
  currentUser: User;
  dataSubscription: Subscription
  constructor(private route: ActivatedRoute) {}

  ngOnDestroy(): void {
  }

  ngOnInit(): void {
    this.currentUser = this.route.parent.snapshot.data.profile;
  }
}
