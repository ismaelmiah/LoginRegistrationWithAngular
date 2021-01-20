import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';
import { Subscription } from 'rxjs';
import { first } from 'rxjs/operators';
import { User } from 'src/app/Model';
import { DataService } from 'src/app/services';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit, OnDestroy {
  users: any;
  dataSubscription: Subscription;
  constructor(private route: ActivatedRoute) {}
  ngOnDestroy(): void {
    this.dataSubscription.unsubscribe();
  }

  ngOnInit(): void {
    this.dataSubscription = this.route.data.subscribe((data: Data) => {
      this.users = data['users'];
      console.log(this.users)
    });
  }

  deleteUser(id: number) {
    const user = this.users.find((x) => x.id === id);
    user.isDeleting = true;
    // this.dataService.delete(id)
    //     .pipe(first())
    //     .subscribe(() => {
    //         this.users = this.users.filter(x => x.id !== id)
    //     });
  }
}
