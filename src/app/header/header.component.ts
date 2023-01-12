import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  // show: boolean = false;

  // toggle() {
  //   this.show = !this.show;
//   showMenu = false;
//   toggleNavbar(){
//     this.showMenu = !this.showMenu;
// }
open : boolean = false;
openDropdown : boolean = false;

onOpen(){
  this.open = !this.open;
}

onOpenDropdown(){
  this.openDropdown = !this.openDropdown;
}
}
