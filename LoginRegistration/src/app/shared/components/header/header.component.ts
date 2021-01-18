import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from 'ngx-webstorage';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private localstorage: LocalStorageService, private route: Router) { }

  ngOnInit(): void {
  }
  logout(){
    this.localstorage.clear('currentUser');
    this.route.navigate(['']);
  }
}
