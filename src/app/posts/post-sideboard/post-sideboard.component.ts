import { Component } from '@angular/core';
import {CommonModule} from "@angular/common";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatIconModule} from "@angular/material/icon";
import {MatDividerModule} from "@angular/material/divider";
import {MatButtonModule} from "@angular/material/button";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {FormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";

@Component({
  selector: 'app-post-sideboard',
  standalone: true,
  imports: [
    CommonModule,
    MatSidenavModule,
    MatIconModule,
    MatDividerModule,
    MatButtonModule,
    MatSlideToggleModule,
    FormsModule,
    MatInputModule,
  ],
  templateUrl: './post-sideboard.component.html',
  styleUrl: './post-sideboard.component.scss'
})
export class PostSideboardComponent {
  header = {start: `Sideboards`}
  content = {
    common: `In diesem Artikel möchten wir Ihnen einige Beispiele zu unseren neuesten Sideboards aufzeigen. \n
             Wir bauen Möbel nach Ihren individuellen Wünschen und Vorstellungen.
             Dabei können Sie aus einer Vielzahl von Materialien, Farben und Formen wählen. \n
             Gerne beraten Sie persönlich und erstellen Ihnen ein unverbindliches Angebot. \n\n
             Für weitere Informationen oder ein persönliches Angebot, kontaktieren Sie uns bitte.`
    ,
    sydney_header: `Sideboard Sydney:`
    ,
    sydney_content: [
      'Länge: 1,80m - 2,20m',
      'Breite: 0,40m - 0,50m',
      'Höhe: 0,9m - 1,0m',
      'Preisrange: ~ 1899€ - 2499€'
    ]
    ,
    sydney_images : [
      { text: 'Sydney Sideboard', url: 'assets/sideboard/sideboard_1.jpg' },
      { text: 'Sydney Sideboard', url: 'assets/sideboard/sideboard_2.jpg' },
    ]

  }
}
