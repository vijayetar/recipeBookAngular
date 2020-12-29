import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl:'./header.component.html',
})
export class HeaderComponent {
  collapsed = true;
  @Input()
  name:string = 'Vij vij';
}
