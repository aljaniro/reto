import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Datos } from '../datos/datos.module';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  form:FormGroup;
  constructor(private fb:FormBuilder) {
    this.form=this.fb.group({
      nombre:['',Validators.required],
      apellido:['',Validators.required],
      telefono:['',Validators.required],
      email:['',Validators.required],
      fecha:['',Validators.required]
    })
  }

  ngOnInit(): void {
  }
  enviar(){
    const cliente: Datos={
     nombre:this.form.controls['nombre'].value,
     apellido:this.form.controls['apellido'].value,
     telefono:this.form.controls['telefono'].value,
     email:this.form.controls['email'].value,
     fecha:this.form.controls['fecha'].value
    }
    console.log(cliente)
  }
}
