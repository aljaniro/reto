
export class Datos {
  id?:string;
  nombre: string;
  apellido:string;
  telefono:number;
  email:string;
  fecha:Date;
  constructor(nombre:string,apellido:string, telefono:number,email:string,fecha:Date){
this.nombre=nombre;
this.apellido=apellido
this.telefono=telefono;
this.email=email;
this.fecha=new Date();
  }

}
