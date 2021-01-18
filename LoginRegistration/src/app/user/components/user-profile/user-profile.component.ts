import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { User } from 'src/app/Model';
import { DataService } from 'src/app/services';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit, OnDestroy {
  currentUser: User;
  private id: number;
  currentUserSubscription: Subscription;

  constructor(private dataService: DataService) { }
  ngOnDestroy(): void {
    this.currentUserSubscription.unsubscribe();
  }

  ngOnInit(): void {
    console.log("Profile Data Served")
    this.id = this.dataService.userValue.id;
    this.currentUserSubscription = this.dataService.getById(this.id).subscribe(data => this.currentUser = data);
  }
  
}