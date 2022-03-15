export class Productos {
  _id?: string;
  codigo?: string;
  nombre?: string;
  categoria?: string;
  valor?: number;

  constructor(
    codigo: string,
    nombre: string,
    categoria: string,
    valor: number
  ) {
    (this.codigo = codigo),
      (this.nombre = nombre),
      (this.categoria = categoria),
      (this.valor = valor);
  }
}
