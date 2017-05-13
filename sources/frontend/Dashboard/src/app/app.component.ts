import { Component } from '@angular/core';

import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TasksComponent } from './tasks/tasks.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss', './login/login.component.scss', 
  './navbar/navbar.component.scss', './tasks/tasks.component.scss']
})

export class AppComponent {
  
}
