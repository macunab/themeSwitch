import { Component } from '@angular/core';
import { ThemeService } from './theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'themeSwitch';
  darkMode: boolean = false;
  
  constructor( private themeService: ThemeService ) {}

  switchTheme() {
    if(this.darkMode) {
      this.themeService.changeTheme('lara-dark');
    } else {
      this.themeService.changeTheme("lara-light");
    }
  }
}
