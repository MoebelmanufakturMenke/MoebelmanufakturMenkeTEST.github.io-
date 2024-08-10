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
  selector: 'app-us',
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
  templateUrl: './us.component.html',
  styleUrl: './us.component.scss'
})
export class UsComponent {
  header = {start: `Über uns`}
  content = {
    ueberUns: `Willkommen bei der Möbelmanufaktur Menke, Ihrem Experten für handgefertigte Echtholzmöbel.
    Gegründet von unserem passionierten Tischlermeister Lars Menke,
    vereinen wir traditionelle Handwerkskunst mit modernem Design,
    um exklusive Wohnraumträume zu verwirklichen.`
    ,
    unsereReise: `Unsere Reise begann mit einer einfachen Vision:
    die Schönheit und Einzigartigkeit von Echtholz in jeden Aspekt des Wohnens zu bringen.
    Lars Menke, Meister seines Fachs, bringt frischen Wind in die Welt der Holzbearbeitung.
    Sein Talent, die Visionen und natürlich seine Detailgenauigkeit spiegeln sich in jedem unserer Werke wieder.`
    ,
    spezialisierungen: `Wir spezialisieren uns auf die Herstellung von hochwertigen Echtholzmöbeln,
    darunter beispielsweise Tische, Stühle, Sideboards und Schränke. Jedes Teil ist nicht nur ein Möbelstück,
    sondern ein Kunstwerk, das Ihre Räume bereichert und individuell gestaltet.
    Wir glauben, dass jedes Holzstück seine eigene Geschichte erzählt, und wir sind hier,
    um diese Geschichten zum Leben zu erwecken.`
    ,
    customizing: `Neben unseren Standardkollektionen bieten wir auch maßgeschneiderte Lösungen an.
    Unikate, welche speziell nach Ihren Wünschen und Bedürfnissen angefertigt werden,
    sind unsere Spezialität. Ob Sie nun eine spezifische Größe, Form oder ein besonderes Design im Sinn
    haben – wir setzen Ihre Träume in die Realität um.`
    ,
    umweltschutz: `Bei der Möbelmanufaktur Menke verpflichten wir uns zur Nachhaltigkeit.
    Wir wählen unser Holz sorgfältig aus, um sicherzustellen,
    dass es aus verantwortungsvollen Quellen stammt.
    Unser Ziel ist es, Möbel zu schaffen, die nicht nur ästhetisch ansprechend,
    sondern auch umweltfreundlich sind.`
    ,
    contact: `Besuchen Sie uns in unserer Werkstatt in 49757 Werlte,
    um einen Einblick in unsere Arbeit zu erhalten,
    oder kontaktieren Sie uns für eine persönliche Beratung.
    Wir freuen uns darauf, mit Ihnen zusammenzuarbeiten und ein Stück Natur in Ihr Zuhause zu bringen.`
  };
}
