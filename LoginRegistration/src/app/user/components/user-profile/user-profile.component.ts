import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { User } from 'src/app/Model';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
})
export class UserProfileComponent implements OnInit, OnDestroy {
  currentUser: any;
  dataSubscription: Subscription
  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnDestroy(): void {
    this.currentUser.isEditing = false;
  }

  ngOnInit(): void {
    this.currentUser = this.route.parent.snapshot.data.profile;
  }

  onEdit(id: number){
    this.currentUser.isEditing = true;
    this.router.navigate(['user/edit', id]);
  }
}
