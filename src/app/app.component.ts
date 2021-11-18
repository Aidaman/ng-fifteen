import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Project15112021ComandProject';

  constructor(private router: Router) {
  }

  directTo(url: string) : void {
    this.router.navigate([url]);
  }
}
