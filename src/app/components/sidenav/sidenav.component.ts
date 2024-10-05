import { Component, Input, OnInit } from '@angular/core';
import { menuItems } from '../../data';
import { CommonModule } from '@angular/common';
import { CommonService } from '../../common/common.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss'
})
export class SidenavComponent implements OnInit {
  selectedMenu="Home"
  Navbar:any=[];
 constructor(private commonService:CommonService,private router: Router){}

 ngOnInit(): void {
    this.Navbar=this.commonService.menus;
  }
  onNavigate(menu:any){
    this.selectedMenu =menu.label
    this.router.navigate([`${menu.href}`]);
  }
}
