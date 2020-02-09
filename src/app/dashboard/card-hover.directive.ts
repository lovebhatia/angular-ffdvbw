import { Directive, ElementRef, Renderer, Input, HostBinding } from '@angular/core';

@Directive({
  selector: '[ccCardHover]'
})
export class CardHoverDirective {
  @Input() sizer : string;
  @Input() color : string;



  //@HostBinding('class')
  //elementClass = 'pre';

 /* constructor(private el: ElementRef,
    private renderer: Renderer) { 
      el.nativeElement.style.fontSize = "30px";
      el.nativeElement.style.color = "red";
}*/


ngOnInit(){
  //this.renderer.setElementStyle(this.el.nativeElement, 'font-size', this.sizer);
  //this.renderer.setElementStyle(this.el.nativeElement, 'color', this.color);  
}

}
