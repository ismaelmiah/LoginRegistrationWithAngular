import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';
import { Subscription } from 'rxjs';
import { User } from 'src/app/Model';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css'],
})
export class UserHomeComponent implements OnInit, OnDestroy {
  currentUser: User;
  profileSubscription: Subscription;
  isAdmin: boolean;
  constructor(private route: ActivatedRoute) {}

  ngOnDestroy(): void {
  }

  ngOnInit(): void {
    this.profileSubscription = this.route.data.subscribe((data: Data) => {
      this.currentUser = data['profile'];
      this.isAdmin = this.currentUser.role === 'Admin';
    });
    //Unsubscribe here because it's only for menu
    this.profileSubscription.unsubscribe();
  }
}
