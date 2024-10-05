import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { CommonService } from './common/common.service';
import { menuItems } from './data';
const menuItem=menuItems

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule,NavbarComponent,SidenavComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
 constructor(private commonService:CommonService){}

  ngOnInit(): void {
    this.commonService.role ="admin"
   

    this.commonService.menus =this.getVisibleMenuItems()
    console.log(this.commonService.menus )
   
}
getVisibleMenuItems() {
  return menuItem.map(menu => ({
    ...menu,
    items: menu.items.filter(item => item.visible.includes(this.commonService.role))
  })).filter(menu => menu.items.length > 0); 
  
}
}
