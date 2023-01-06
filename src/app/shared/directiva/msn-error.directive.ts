import { Directive, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[msn-error]'
})
export class MsnErrorDirective implements OnInit, OnChanges{

  private _color: string = 'red';
  private _msn: string = 'Este campo es obligatorio';

  htlmElement: ElementRef<HTMLElement>;
  @Input() set color(valor: string){
    this._color = valor;
    this.setColor();
  }
  // @Input() msn: string = 'Rellene el campo';
  @Input() set msn(valor: string){
    this._msn = valor;
    this.setMsn();
  }

  @Input() set valido(valor: boolean){
    if(valor === true){
      this.htlmElement.nativeElement.classList.add('hidden');
    }else{
      this.htlmElement.nativeElement.classList.remove('hidden');
    }
  }

  constructor(private elem: ElementRef<HTMLElement>) {

    this.htlmElement = elem;
    elem.nativeElement.style.color = 'red'
  }

  ngOnChanges(changes: SimpleChanges): void {
    
    //Cambios en tiempo Real
    
    // if(changes['msn']){
    //   const msn = changes['msn'].currentValue;
    //   this.htlmElement.nativeElement.innerText = msn;
    // }
    
    // if(changes['color']){
    //   const color = changes['color'].currentValue;
    //   this.htlmElement.nativeElement.style.color = color;
    // }
  }

  ngOnInit(): void {
    this.setColor();
    this.setMsn();
    this.setStyle();
  }

  setStyle(): void{
    this.htlmElement.nativeElement.classList.add('form-text');
  }

  setColor(): void{
    this.htlmElement.nativeElement.style.color = this._color;
  }

  setMsn(): void{
    this.htlmElement.nativeElement.innerText = this._msn;
  }
}
