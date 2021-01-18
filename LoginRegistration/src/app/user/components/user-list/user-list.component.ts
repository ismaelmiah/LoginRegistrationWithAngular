import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { first } from 'rxjs/operators';
import { DataService } from 'src/app/services';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: any;
  usersSubscription: Subscription;
  ListenUser: Subscription;

  constructor(private dataService: DataService) { }
  ngOnDestroy(): void {
    this.usersSubscription.unsubscribe();
  }

  ngOnInit(): void {
    this.usersSubscription = this.dataService.getAll().subscribe(data => {
      this.users = data;
    })
  }

  deleteUser(id: number) {
    const user = this.users.find(x => x.id === id);
        user.isDeleting = true;
        this.dataService.delete(id)
            .pipe(first())
            .subscribe(() => {
                this.users = this.users.filter(x => x.id !== id) 
            });
    }

}
