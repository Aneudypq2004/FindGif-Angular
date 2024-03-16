import { HttpClient, HttpParams} from '@angular/common/http';
import { Injectable,  } from '@angular/core';
import { GIFServiceResponse} from '../interfaces/gifs.interface';
@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private _historial: string[] = [];
  public resultados: any = [];
  private api_key = '0KPQ7IFo1M6vAtok4lYYDaCr6NMcMKJv';
  

  /**
   *
   */
  constructor(private http: HttpClient) {

    this._historial = JSON.parse(localStorage.getItem('historial')!) || [] ;
    this.resultados = JSON.parse(localStorage.getItem('resultado')!) || [] ;
    
  }

  get historial(){
    this._historial = this._historial.splice(0,10);
    return [...this._historial];
  }

  buscarGifs(query : string){

    if(!this._historial.includes(query)){
        this._historial.unshift(query);
    }

    localStorage.setItem('historial', JSON.stringify(this._historial));

    const params = new HttpParams()
    .set('q', query)
    .set('api_key', '0KPQ7IFo1M6vAtok4lYYDaCr6NMcMKJv')

    this.http.get<GIFServiceResponse>(`https://api.giphy.com/v1/gifs/search`,{
      params
    })
    .subscribe((resp) => {
      this.resultados = resp.data;
      localStorage.setItem('resultado', JSON.stringify(resp.data));
    });

  }

}
