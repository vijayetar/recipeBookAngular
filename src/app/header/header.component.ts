import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl:'./header.component.html',
})
export class HeaderComponent {
  @Output() displayFeatureFired = new EventEmitter <string> ();

  collapsed = true;

  displayFeature(feature:string){
    console.log('feature selected: '+feature);
    this.displayFeatureFired.emit(feature);
  }

}
