import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {
  @Input() producto: any = {};
  @Input() indice: number;

  @Output() productoSelected: EventEmitter<number>;

  constructor() { }

  ngOnInit(): void {
  }
  verProducto() {
    console.log(this.indice);
  }

}
