import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
})
export class BusquedaComponent {

  @ViewChild('buscador') txtBuscar! : ElementRef<HTMLInputElement>;

  constructor(private gifsService: GifsService) {}

  buscar(): void{
    
    const valor = this.txtBuscar.nativeElement.value;

    if(this.gifsService.historial.includes(valor)) return;
    
    this.gifsService.buscarGifs(valor);

    this.txtBuscar.nativeElement.value = '';
  }

}
