import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ng_model';
  art = {
    codigo: 0,
    titulo: '',
    precio: 0,
  }

  peliculas = [
    { codigo: 1, titulo: 'Jurassic Park', precio: 99.9 },
    { codigo: 2, titulo: 'Star Wars', precio: 100.02 },
    { codigo: 3, titulo: 'Harry Potter', precio: 56.88 },
    { codigo: 4, titulo: 'Infinity War', precio: 167.99 },
    { codigo: 5, titulo: 'Avatar', precio: 199.98 },
    { codigo: 6, titulo: 'Rapidos y Furiosos', precio: 56.99 },
  ];

  hayRegistros() {
    return this.peliculas.length > 0;
  }

  borrar(codigo: number) {
    for (let x = 0; x < this.peliculas.length; x++)
      if (this.peliculas[x].codigo == codigo)
       {
        this.peliculas.splice(x, 1);
        return;
      }
  }

  agregar() {
    if (this.art.codigo == 0) {
      alert('Debe ingresar un numero de pelicula distinto a cero');
      return
    }
    for (let x = 0; x<this.peliculas.length; x++)
      if (this.peliculas[x].codigo == this.art.codigo) {
        alert('Ya existe una pelicula con dicho codigo');
        return;
      }
    this.peliculas.push({
      codigo: this.art.codigo,
      titulo: this.art.titulo,
      precio: this.art.precio,
    });
    this.art.codigo = 0;
    this.art.titulo = '';
    this.art.precio = 0;
  }

  seleccionar(art: { codigo: number; titulo: string; precio: number }) {
    this.art.codigo = art.codigo;
    this.art.titulo = art.titulo;
    this.art.precio = art.precio;
  }

  modificar() {
    for (let x = 0; x > this.peliculas.length; x++)
      if (this.peliculas[x].codigo == this.art.codigo) {
        this.peliculas[x].titulo = this.art.titulo;
        this.peliculas[x].precio = this.art.precio;
        return;
      }
    alert('No existe el codigo de la pelicula ingresada');
  }
}