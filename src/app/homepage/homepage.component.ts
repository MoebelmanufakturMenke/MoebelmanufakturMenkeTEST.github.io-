import {Component} from "@angular/core";
import {MatExpansionModule} from "@angular/material/expansion";
import {MatInputModule} from "@angular/material/input";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatButtonModule} from "@angular/material/button";
import {FormsModule} from "@angular/forms";
import {NgForOf, NgIf} from "@angular/common";
import {MatIconModule} from "@angular/material/icon";
import {MatSidenavContainer, MatSidenavContent} from "@angular/material/sidenav";
import {NavbarComponent} from "../navbar/navbar.component";
import {RouterLink, RouterLinkActive, RouterOutlet} from "@angular/router";
import { Router } from '@angular/router';


@Component({
  selector: "app-homepage",
  standalone: true,
  imports: [
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    NgForOf,
    MatIconModule,
    NgIf,
    MatSidenavContainer,
    MatSidenavContent,
    NavbarComponent,
    RouterOutlet,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: "./homepage.component.html",
  styleUrl: "./homepage.component.scss"
})
/**
 * Komponente für die Darstellung der Startseite inklusive der Konfigurationsmöglichkeiten.
 */
export class HomepageComponent {
  images = [
    { src: 'https://gratisography.com/wp-content/uploads/2024/01/gratisography-cyber-kitty-800x525.jpg', text: 'Sideboards', url: 'posts/post-sideboard' },
    { src: 'https://gratisography.com/wp-content/uploads/2024/01/gratisography-cyber-kitty-800x525.jpg', text: 'Regale', url: 'posts/post-shelf' },
    { src: 'https://gratisography.com/wp-content/uploads/2024/01/gratisography-cyber-kitty-800x525.jpg', text: 'Schränke', url: 'posts/post-cupboard' },
    { src: 'https://gratisography.com/wp-content/uploads/2024/01/gratisography-cyber-kitty-800x525.jpg', text: 'Schreibtische', url: 'posts/post-desk' },
  ];

  constructor(private router: Router) { }

  goto(url: string) {
    this.router.navigate([url]).then(() => {
      // do nothing
    }).catch((error) => {
      console.error('Navigation fehlgeschlagen:', error);
    });
  }
}
