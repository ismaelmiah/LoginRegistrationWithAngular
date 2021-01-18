import { Component, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { User } from 'src/app/Model';
import { DataService } from 'src/app/services';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent {
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
