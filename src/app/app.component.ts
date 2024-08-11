import {Component, OnInit} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterLink, RouterOutlet} from "@angular/router";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatIconModule} from "@angular/material/icon";
import {MatDividerModule} from "@angular/material/divider";
import {MatButtonModule} from "@angular/material/button";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {FormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {NavbarComponent} from "./navbar/navbar.component";
import {FooterComponent} from "./footer/footer.component";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
    MatSidenavModule,
    MatIconModule,
    MatDividerModule,
    MatButtonModule,
    MatSlideToggleModule,
    FormsModule,
    MatInputModule,
    NavbarComponent,
    FooterComponent,
  ],
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent{
  //title = 'Moebelmanufaktur-Menke';
}
