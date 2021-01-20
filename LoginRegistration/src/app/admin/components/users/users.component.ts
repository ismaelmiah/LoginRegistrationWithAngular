import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { first } from 'rxjs/operators';
import { User } from 'src/app/Model';
import { DataService } from 'src/app/services';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit, OnDestroy {
  users = null;
  dataSubscription: Subscription;
  constructor(private dataService: DataService, private route: ActivatedRoute, private router: Router) {}
  ngOnDestroy(): void {
    this.dataSubscription.unsubscribe();
  }

  ngOnInit(): void {
    this.dataSubscription = this.dataService.getAll().pipe(first()).subscribe(data=> {
      this.users = data;
    })
  }

  onEdit(id: number){
    this.router.navigate(['user/edit', id])
  }

  onDelete(id: number){
    const user = this.users.find(x => x.id === id);
        user.isDeleting = true;
        this.dataService.delete(id)
            .pipe(first())
            .subscribe(() => {
                this.users = this.users.filter(x => x.id !== id) 
            });
  }
}
