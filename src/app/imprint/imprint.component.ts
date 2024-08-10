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
  selector: 'app-imprint',
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
  templateUrl: './imprint.component.html',
  styleUrl: './imprint.component.scss'
})
export class ImprintComponent {
  header = {start: `Impressum`}
  content = {
    common: `Angaben gemäß § 5 TMG
             Möbelmanufaktur Menke Inhaber: Lars Menke Auf dem Sattel 10 49757 Werlte Deutschland
             Kontakt: Telefon: 0173/ 35 76 313 E-Mail: info@moebelmanufaktur-menke.com
             Umsatzsteuer-ID: Umsatzsteuer-Identifikationsnummer gemäß §27 a Umsatzsteuergesetz: FOLGT NOCH
             Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV: Lars Menke`
    ,
    liability_header: `Haftungsausschluss:`
    ,
    liability_a_header: `Haftung für Inhalte:`
    ,
    liability_a_content: `Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen
    Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter
    jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach
    Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder
    Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt.
    Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung
    möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.`
    ,
    liability_b_header: `Haftung für Links:`
    ,
    liability_b_content: `Unser Angebot enthält Links zu externen Websites Dritter,
    auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr
    übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten
    verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft.
    Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der
    verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden
    von Rechtsverletzungen werden wir derartige Links umgehend entfernen.`
    ,
    liability_c_header: `Urheberrechte:`
    ,
    liability_c_content: `Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten
    unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art
    der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des
    jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten,
    nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber
    erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter
    als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden,
    bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir
    derartige Inhalte umgehend entfernen.`
    ,
    images: [
      {text: '', image: '../assets/imprint/impressum.png'},
    ]
  }
}
