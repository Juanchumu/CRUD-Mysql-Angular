import { Component } from '@angular/core';

import { MaterialModule } from '../../modules/material/material.module';
@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [ MaterialModule ],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css'
})
export class NavigationComponent {

}
