import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { first } from 'rxjs/operators';
import { AlertService, DataService } from 'src/app/services';

@Component({
  selector: 'app-users',
  templateUrl: './users.list.component.html',
  styleUrls: ['./users.list.component.css'],
})
export class UsersListComponent implements OnInit, OnDestroy {
  users = null;
  userListSubscription: Subscription;
  p: number = 1;
  constructor(
    private dataService: DataService,
    private router: Router,
    private alertService: AlertService
  ) {}
  ngOnDestroy(): void {
    this.userListSubscription.unsubscribe();
  }

  ngOnInit(): void {
    this.userListSubscription = this.dataService
      .getAll()
      .pipe(first())
      .subscribe((data) => {
        this.users = data;
      });
  }

  key: string = 'id';
  reverse: boolean = false;
  sort(key) {
    this.key = key;
    this.reverse = !this.reverse;
  }

  onEdit(id: number) {
    this.router.navigate(['user/edit', id]);
  }

  onDelete(id: number) {
    const user = this.users.find((x) => x.id === id);
    user.isDeleting = true;
    this.dataService
      .delete(id)
      .pipe(first())
      .subscribe(() => {
        this.users = this.users.filter((x) => x.id !== id);
        this.alertService.info('User Deleted Successfully');
      });
  }
}
