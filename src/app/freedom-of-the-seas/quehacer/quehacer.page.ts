import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule} from '@ionic/angular';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-freedom-quehacer',
  templateUrl: './quehacer.page.html',
  styleUrls: ['./quehacer.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule, RouterLink]
})
export class QuehacerFreedomPage  {

  constructor() { }  

}
