import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription, Subject } from 'rxjs';
import { ProductosService } from '../productos.service';
import { Productos } from '../datos/productos/productos.module';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css'],
})
export class ListaProductosComponent implements OnInit {
  form: FormGroup;
  productos: Productos[] = [];
  hideWhenNoStudent: boolean = false;
  preLoader: boolean = true;
  noData: boolean = false;
  suscripcion: Subscription;
  id: any;
  constructor(private fb: FormBuilder, private proserv: ProductosService) {
    this.suscripcion = this.proserv.obtenerlista().subscribe((data) => {
      this.productos = data;
      console.log(this.productos);
    });

    this.form = this.fb.group({
      codigo:['', Validators.required],
      nombre: ['', Validators.required],
      categoria: ['', Validators.required],
      valor: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.proserv.getpro();
  }

  getclient() {}
  agregar() {
    const producto: Productos = {
      codigo: this.form.get('codigo')?.value,
      nombre: this.form.get('nombre')?.value,
      categoria: this.form.get('categoria')?.value,
      valor: this.form.get('valor')?.value,
    };
    console.log(producto);
    this.proserv.guardarproducto(producto).subscribe(
      (data) => {
        console.log(data);this.proserv.getpro();
      },
      (error) => console.log(error)
    );
  }

  editar(id: any) {
    this.id = id;
    console.log(this.id);
    this.proserv.obtenercliente(id).subscribe(
      (data) => {
        this.form.setValue({
          nombre: data.nombre,
          categoria: data.categoria,
          valor: data.valor,
        });
        console.log(this.form);
      },
      (error) => {
        console.log(error);
      }
    );
  }
  editar2() {
    console.log(this.id);
    const producto: Productos = {
      codigo: this.form.get('codigo')?.value,
      nombre: this.form.get('nombre')?.value,
      categoria: this.form.get('categoria')?.value,
      valor: this.form.get('valor')?.value,
    };
    console.log(producto);
    this.proserv.editar(this.id, producto).subscribe(
      (data) => {
        console.log('bien');this.proserv.getpro();
      },
      (error) => console.log(error)
    );
  }

  eliminar(id: any) {
    console.log(id);
    this.proserv.eliminar(id).subscribe(
      (data) => {
        console.log('Eliminado');this.proserv.getpro();
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
