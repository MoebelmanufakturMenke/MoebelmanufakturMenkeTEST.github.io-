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
  selector: 'app-tools',
  standalone: true,
  imports: [
    CommonModule,
    MatSidenavModule,
    MatIconModule,
    MatDividerModule,
    MatButtonModule,
    MatSlideToggleModule,
    FormsModule,
    MatInputModule,],
  templateUrl: './tools.component.html',
  styleUrl: './tools.component.scss'
})
export class ToolsComponent {
  header = {start: `Maschinenpark`}
  content = {
    geraete: `In unserer Tischlerei verbinden wir traditionelles Handwerk mit modernster Technik.
    Unser Maschinenpark ist mit erstklassigen Geräten der Felder Group ausgestattet,
    die es uns ermöglichen, mit höchster Präzision und Effizienz zu arbeiten.
    Jede Maschine in unserem Werkstatt ist sorgfältig ausgewählt,
    um die Qualität und Einzigartigkeit unserer Möbel sicherzustellen.`
    ,
    formatkreissaege_header: `Formatkreissäge / Fräsmaschine (Kombimaschine):`
    ,
    formatkreissaege_content: `Diese vielseitige Kombimaschine erlaubt uns, präzise Schnitte und Fräsungen durchzuführen,
    was für die Anfertigung maßgeschneiderter Möbelstücke unerlässlich ist.`
    ,
    hobel_header: `Hobelmaschine / Abrichter (Kombimaschine):`
    ,
    hobel_content: `
    Mit dieser Maschine erreichen wir eine perfekte Oberflächengüte und exakte Maße unserer Holzwerkstoffe,
    was für ein hochwertiges Endprodukt essenziell ist.`
    ,
    kantenleimer_header: `Kantenanleimer:`
    ,
    kantenleimer_content: `Für eine makellose Verarbeitung der Möbelkanten sorgt unser Kantenanleimer.
    Er garantiert saubere und dauerhafte Verbindungen, die sowohl optisch als auch funktional überzeugen.`
    ,
    breitbandschleifmaschine_header: `Breitbandschleifmaschine:`
    ,
    breitbandschleifmaschine_content: `Diese Maschine ermöglicht uns,
    große Holzflächen gleichmäßig und effizient zu schleifen, was für ein einwandfreies Finish unverzichtbar ist.`
    ,
    duebelbohrmaschine_header: `Dübelbohrmaschine:`
    ,
    duebelbohrmaschine_content: `Sie ist das Herzstück für präzise Verbindungen und Dübelarbeiten,
    was für die Stabilität und Langlebigkeit unserer Möbelstücke entscheidend ist.`
    ,
    bandsaege_header: `Bandsäge:`
    ,
    bandsaege_content: 'Ideal für komplizierte Schnitte und kreative Formen, erlaubt uns die Bandsäge, ' +
      'selbst anspruchsvolle Designs umzusetzen.'
    ,
    feinstaubabsaugung_header: `Feinstaubabsaugung:`
    ,
    feinstaubabsaugung_content: `Unsere Werkstatt ist mit einer hochmodernen Feinstaubabsauganlage ausgestattet,
    die für eine gesunde Arbeitsumgebung sorgt und die Qualität unserer Arbeit gewährleistet.`
    ,
    kantenschleifer_header: `Kantenschleifer:`
    ,
    kantenschleifer_content: `Unsere Werkstatt ist mit einer hochmodernen Feinstaubabsauganlage ausgestattet,
    die für eine gesunde Arbeitsumgebung sorgt und die Qualität unserer Arbeit gewährleistet.`
    ,
    abschluss: `Durch den Einsatz dieser hochwertigen Maschinen können wir nicht nur eine
    exzellente Verarbeitungsqualität garantieren, sondern auch individuelle Kundenwünsche präzise umsetzen.
    Unser Maschinenpark ist ein wesentlicher Bestandteil unseres Engagements für Qualität und Kundenzufriedenheit.`
    ,
    images: [
      {text: '', image: '../assets/tools/tools.png'},
    ]
  };
}
