import {Directive, ElementRef, Input, OnChanges, Renderer2} from '@angular/core';

@Directive({
  selector: '[elementLoader]',
  standalone: true
})
export class ElementLoaderDirective implements OnChanges {

  @Input('isLoading') isLoading = false;

  constructor(private _element: ElementRef, private _renderer: Renderer2) {
  }

  ngOnChanges(): void {
    if (this.isLoading) {
      this._renderer.addClass(this._element.nativeElement, 'skeleton')
    } else {
      this._renderer.removeClass(this._element.nativeElement, 'skeleton')
    }
  }

}
