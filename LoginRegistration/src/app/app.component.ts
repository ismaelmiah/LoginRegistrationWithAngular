import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { User } from './Model/User';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  users: User[] = [];
  subscribesd: Subscription;

  constructor(private dataService: DataService) {
    
  }
  ngOnInit(): void {
    this.subscribesd = this.dataService.getHeroes().subscribe((data : User[])=>{
      console.log(data);
      this.users = data;
  })
  }
  ngOnDestroy(): void {
    this.subscribesd.unsubscribe();
    console.log('unsubscribe');
  }
}
