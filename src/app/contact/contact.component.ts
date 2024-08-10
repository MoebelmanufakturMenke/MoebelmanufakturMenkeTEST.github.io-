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
  selector: 'app-contact',
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
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  header = {start: `Kontakt`}
  content = {
    common: `Hallo zusammen, mein Name ist Lars Menke und ich freue mich, dass Sie den Weg zu meiner
    Webseite gefunden haben. Ich hoffe sehr, dass Ihnen die Produkte / Dienstleistungen zusagen,
    welche wir als Möbelmanufaktur Menke Ihnen anbieten können.`
    ,
    info_header: `Kontaktieren Sie uns:`
    ,
    info_content: `Wir freuen uns auf Ihre Anfragen, Aufträge und natürlich auf Ihr Feedback. \n
    Möbelmanufaktur Menke Auf dem Sattel 10 49757 Werlte 0173/ 35 76 313 info@moebelmanufaktur-menke.com \n
    Öffnungszeiten: Montag - Freitag: 8:30 - 17:00 Uhr Samstag: Auf vorherige Anfrage Sonntag: Geschlossen`
    ,
    contact_header: `Kontaktaufnahme:`
    ,
    contact_content: `Telefonisch: Für direkte Anfragen rufen Sie uns bitte unter 0173/ 35 76 313 an. \n
    E-Mail: Senden Sie Ihre Anfrage an info@moebelmanufaktur-menke.com. \n
    Wir bemühen uns, Ihre E-Mail innerhalb eines Arbeitstages zu beantworten.
    Besuchen Sie uns: Kommen Sie in unserer Werkstatt vorbei.
    Hier können Sie einen direkten Einblick in unsere Arbeit erhalten und persönlich mit uns Ihre
    Vorstellungen besprechen. Bitte vereinbaren Sie vorher einen Termin mit uns,
    damit wir uns ausreichend Zeit für Sie nehmen können.`
    ,
    images: [
      {text: '', image: '../assets/contact/kontakt.png'},
    ]
  }
}
