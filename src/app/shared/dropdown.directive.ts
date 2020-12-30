import {Directive, HostListener, HostBinding, ElementRef} from '@angular/core';
@Directive({
  selector:'[appDropdown]'
})
export class DropdownDirective {
  // listen for the click
  // open the toggle
  // listen for the click
  // close the toggle
  @HostBinding ('class.open') isOpen: boolean = false;
  @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
    this.isOpen = this.elRef.nativeElement.contains(event.target) ? !this.isOpen : false;
    console.log(this.isOpen);

  }
  constructor(private elRef: ElementRef) {}


}
