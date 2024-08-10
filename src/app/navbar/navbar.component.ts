import {Component} from '@angular/core';
import {RouterLink} from '@angular/router';
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatIconModule} from "@angular/material/icon";
import {MatDividerModule} from "@angular/material/divider";
import {MatButtonModule} from "@angular/material/button";
import {NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'navbar',
  standalone: true,
  imports: [
    RouterLink,
    MatSidenavModule,
    MatIconModule,
    MatDividerModule,
    MatButtonModule,
    NgForOf,
    NgIf
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

}
