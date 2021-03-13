import { Component , Input} from '@angular/core';
import { Event } from '@angular/router';
import { element } from 'protractor';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


save(event){
  console.log(event);
}
}
