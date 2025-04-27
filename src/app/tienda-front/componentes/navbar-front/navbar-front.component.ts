import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'navbar-front',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar-front.component.html'
})
export class NavbarFrontComponent {

}
