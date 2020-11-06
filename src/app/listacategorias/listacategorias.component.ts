import { Component, OnInit, ViewChild} from '@angular/core';
import {ProductosService} from 'src/app/shared/productos.service';
import {Productos} from 'src/app/shared/productos.model';
import { MatTableDataSource } from '@angular/material';
import {AngularFirestore} from '@angular/fire/firestore';
import { ProductComponent } from '../product/product.component';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';


@Component({
  selector: 'app-listacategorias',
  templateUrl: './listacategorias.component.html',
  styleUrls: ['./listacategorias.component.css']
})
export class ListacategoriasComponent implements OnInit {

lista: Productos[];

  constructor(private service: ProductosService,private firestore:AngularFirestore) { }

  ngOnInit() {
  		this.getAllProducts();
  }




 public getAllProducts = () => {
    this.service.getCategorias().subscribe(actionArray =>{
 	this.lista = actionArray.map(item =>{
    return {
     id: item.payload.doc.id,
	  ...item.payload.doc.data()
	} as Productos;
 	})	
 	});
  }
}
