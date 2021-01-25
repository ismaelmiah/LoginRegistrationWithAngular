import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
})
export class UserProfileComponent implements OnInit, OnDestroy {
  currentUser: any;
<<<<<<< HEAD
  dataSubscription: Subscription;
=======
  dataSubscription: Subscription
>>>>>>> develop
  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnDestroy(): void {
    this.currentUser.isEditing = false;
  }

  ngOnInit(): void {
    this.currentUser = this.route.parent.snapshot.data.profile;
  }

<<<<<<< HEAD
  onEdit(id: number) {
=======
  onEdit(id: number){
>>>>>>> develop
    this.currentUser.isEditing = true;
    this.router.navigate(['user/edit', id]);
  }
}
