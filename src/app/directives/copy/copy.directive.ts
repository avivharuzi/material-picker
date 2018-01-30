import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appCopy]'
})
export class CopyDirective {

  constructor(
    public el: ElementRef,
    public render: Renderer2,
  ) { }

  @HostListener('click') onClick() {
    this.copy(this.el.nativeElement.value);

    let notifcation = `
    <div class="notfication">
      <span>COPIED</span>
    </div>
    `;

    let main = document.getElementById('mainNotfication');

    if (main.innerHTML === '') {
      main.innerHTML = notifcation;

      setTimeout(function () {
        main.innerHTML = '';
      }, 400);
    }
  }

  copy(text: string) {
    const aux = document.createElement('input');
    aux.setAttribute('value', text);
    document.body.appendChild(aux);
    aux.select();
    document.execCommand('copy');
    document.body.removeChild(aux);
  }
}
