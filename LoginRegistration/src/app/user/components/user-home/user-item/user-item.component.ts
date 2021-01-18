import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { User } from 'src/app/Model';
import { DataService } from 'src/app/services';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.css'],
})
export class UserItemComponent implements OnInit, OnDestroy {
  get id(): number {
    return this.dataService.userValue.id;
  }
  get currentUserSubscription(): Subscription {
    return this.dataService.getById(this.id).subscribe((data) => {
      this.currentUser = data;
    });
  }
  currentUser: User;

  constructor(private dataService: DataService) {}
  ngOnDestroy(): void {
  }

  ngOnInit(): void {
    this.currentUserSubscription
  }
}
