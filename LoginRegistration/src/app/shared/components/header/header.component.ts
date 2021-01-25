import { Component, OnDestroy, OnInit } from '@angular/core';
import { DataService } from 'src/app/services';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  isLoggedIn$: boolean;
  constructor(private dataService: DataService) {}
  ngOnDestroy(): void {
  }

  ngOnInit(): void {
    this.dataService.user.subscribe((status) => {
      this.isLoggedIn$ = status ? true : false;
    });
  }
  logout() {
    this.dataService.logout();
  }
}
