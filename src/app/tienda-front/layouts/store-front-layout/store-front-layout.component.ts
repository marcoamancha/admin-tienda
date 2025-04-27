import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarFrontComponent } from '../../componentes/navbar-front/navbar-front.component';

@Component({
  selector: 'app-store-front-layout',
  standalone: true,
  imports: [RouterOutlet, NavbarFrontComponent],
  templateUrl: './store-front-layout.component.html'
})
export class StoreFrontLayoutComponent {

}
