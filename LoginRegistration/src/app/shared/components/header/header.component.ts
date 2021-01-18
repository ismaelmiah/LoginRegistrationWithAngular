import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { AuthUser } from 'src/app/Model';
import { DataService } from 'src/app/services';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  isLoggedIn$: boolean;
  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.user.subscribe((status) => {
      this.isLoggedIn$ = status?true: false;
    });
  }
  logout() {
    this.dataService.logout();
  }
}
