import { Component, OnInit, ViewChild} from '@angular/core';
import {ProductosService} from 'src/app/shared/productos.service';
import {Productos} from 'src/app/shared/productos.model';
import { MatTableDataSource } from '@angular/material';
import {AngularFirestore} from '@angular/fire/firestore';
import { ProductComponent } from '../product/product.component';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';

@Component({
  selector: 'app-listaproductos',
  templateUrl: './listaproductos.component.html',
  styleUrls: ['./listaproductos.component.css']
})

export class ListaproductosComponent implements OnInit {


  list: Productos[];


  public displayedColumns = ['nombre', 'detalles','categoria', 'precio','cantidad','borrar',];
  public dataSource = new MatTableDataSource<Productos>();


 @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;


   
  constructor(private service: ProductosService,private firestore:AngularFirestore) { 

  }



  ngOnInit() { 
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  	this.getAllProducts();
  
  }

    applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }


public firstComponentFunction(){    
    this.service.onFirstComponentButtonClick();    
  }    
  public SecondComponentFunction(){    
    this.service.onSecondComponentButtonClick();    
  }    
/**metodo para traer productos**/

 public getAllProducts = () => {
    this.service.getProductos().subscribe(actionArray =>{
 	this.dataSource.data = actionArray.map(item =>{
    return {
     id: item.payload.doc.id,
	  ...item.payload.doc.data()
	} as Productos;
 	})	
 	});


  }



/**metodo para seleccionar productos para editar**/
onEdit(producto:Productos){

	this.service.formData =Object.assign({},producto);
	this.service.isDone = true;
    this.SecondComponentFunction();

}





public onDelete(id:string){


this.firestore.doc('Productos/'+id).delete();
this.firstComponentFunction();


}


     
    


}






