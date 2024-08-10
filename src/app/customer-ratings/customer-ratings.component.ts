import {Component} from '@angular/core';
import {CommonModule} from "@angular/common";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatIconModule} from "@angular/material/icon";
import {MatDividerModule} from "@angular/material/divider";
import {MatButtonModule} from "@angular/material/button";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {FormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";

@Component({
  selector: 'app-customer-ratings',
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
  templateUrl: './customer-ratings.component.html',
  styleUrl: './customer-ratings.component.scss'
})
export class CustomerRatingsComponent {
  header = {start: `Kundenbewertungen`}
  content = {
    vinnersheep_header: `Vinner-Schaf-79:`,
    vinnersheep_content: `“Vielen Dank für das tolle Bettgestell, es sieht nicht nur toll aus, sondern ist auch noch sehr stabil :D.”`,
    images_vinnersheep: [
      {text: '', image: 'assets/customer_ratings/vinnersheep_1.jpg'},
      {text: '', image: 'assets/customer_ratings/vinnersheep_2.jpg'},
      {text: '', image: 'assets/customer_ratings/vinnersheep_3.jpg'},
    ],
    felefix_header: `Felefix:`,
    felefix_content: `“Einfach ein geniales Produkt, super stabil und hochwertig verarbeitet.”`,
    images_felefix: [
      {text: '', image: 'assets/customer_ratings/felefix_1.png'},
      {text: '', image: 'assets/customer_ratings/felefix_2.png'},
    ]
  }

  vinnersheepImageIndex = 0;
  felefixImageIndex = 0;

  showNextImage(images: any[], index: number) {
    const nextIndex = (index + 1) % images.length;
    if (images === this.content.images_vinnersheep) {
      this.vinnersheepImageIndex = nextIndex;
    } else if (images === this.content.images_felefix) {
      this.felefixImageIndex = nextIndex;
    }
  }

  showPreviousImage(images: any[], index: number) {
    const prevIndex = (index - 1 + images.length) % images.length;
    if (images === this.content.images_vinnersheep) {
      this.vinnersheepImageIndex = prevIndex;
    } else if (images === this.content.images_felefix) {
      this.felefixImageIndex = prevIndex;
    }
  }
}
