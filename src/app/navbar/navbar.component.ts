import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  prueba(){
    let menu = document.querySelector('#menu'); //selecciona
     let menu_bar = document.querySelector('.fa-solid');
      menu?.classList.toggle("menu-toggle");  //cambia clase
      menu_bar?.classList.toggle("pruebas")

   }
}
