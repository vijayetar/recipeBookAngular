import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  lastNumber:number = 0;
  feature: string = 'Shopping List';

  @Input()
  name:string = 'testingVij';

  onIntervalFired(theLastNumber:number){
    console.log("here " + theLastNumber);
    this.lastNumber = theLastNumber;
  }
  displaySelectedFeature(selectedFeature:string){
    this.feature = selectedFeature;
  }


}
