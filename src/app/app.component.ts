import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ang-address-book';

  createNewContact() {
    console.log('Someone Clicked Me!!!')
  }
}
