import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isLoggedIn;
  constructor(private dataService: DataService) {
    this.isLoggedIn = this.dataService.userValue ? true : false;
   }

  ngOnInit(): void {
  }
  logout(){
    this.dataService.logout();
  }
}
