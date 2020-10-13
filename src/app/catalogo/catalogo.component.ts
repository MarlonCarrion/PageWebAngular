import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {

  listaProducto=[
    {
      nombre:'Cerveza Pilsener',
      precio: 20.00,
      descuento: 10,
      imagen:'https://supermercadosalfa1.com/wp-content/uploads/2019/03/CervezaPilsenerLight2.jpg'
    },
    {
      nombre:'Cerveza Corona',
      precio: 30.00,
      descuento: 15,
      imagen:'https://cdn.shopify.com/s/files/1/0410/7560/5668/products/MIGPS2247_540x540.jpg?v=1592271942'   
    },
    {
      nombre:'Cerveza La Paz',
      precio: 50.00,
      descuento: 0,
      imagen:'https://lataberna.com.ec/quito/el-condado/5759-large_default/hacienda-la-paz-venados-330-ml.jpg'   
    },
    {
      nombre:'Cerveza Brahma',
      precio: 10.00,
      descuento: 5,
      imagen:'https://bravitosa.com/wp-content/uploads/2017/12/Cerveza20Brahma.jpg'   
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
