import {
  Directive,
  HostListener,
  HostBinding,
  ElementRef
} from "@angular/core";

@Directive({
  selector: "[appDropdown]"
})
export class DropdonwDirective {
  @HostBinding("class.open") isOpen = false;

  @HostListener("document:click", ["$event"]) toggleOpen(event: Event) {
    this.isOpen = this.elRef.nativeElement.contains(event.target)
      ? !this.isOpen
      : false;
  }
  // this.isOpen = !this.isOpen;
  constructor(private elRef: ElementRef) {}
}
