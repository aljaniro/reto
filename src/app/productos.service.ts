import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Productos } from './datos/productos/productos.module';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  baseUrl= environment.baseUrl
  url ='http://localhost:5001/api/productos/'
  private productolista : Productos[]=[]
  private clientesubject: Subject<Productos[]>= new Subject<Productos[]>()
  constructor(private http : HttpClient) {

   }
   getproductos():Observable<Productos>{
    return this.http.get(this.url)
  }

  obtenerlista(){
    return this.clientesubject.asObservable()
  }

  getpro(){
    this.http.get<Productos[]>(this.baseUrl).subscribe( (data)=>{
      this.productolista = data;
      this.clientesubject.next([...this.productolista]);
    })
  }

  guardarproducto(produto: Productos): Observable<any> {
    return this.http.post(this.url, produto);
  }

editar(id: string,producto:Productos): Observable<any>{
  return this.http.put(this.url+id, producto)
  }

  obtenercliente(id: string): Observable<any> {
    return this.http.get(this.url + id);
  }

  eliminar(id: string): Observable<any> {
    return this.http.delete(this.url + id);
  }
}
