import { Component, OnInit, ViewChild} from '@angular/core';
import {ProductosService} from 'src/app/shared/productos.service';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import {AngularFirestore} from '@angular/fire/firestore';
import { ToastrService } from 'ngx-toastr';
import { MatTableDataSource } from '@angular/material';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {Productos} from 'src/app/shared/productos.model';
import { DataSource } from '@angular/cdk/table';
@Component({
  selector: 'app-controlcategorias',
  templateUrl: './controlcategorias.component.html',
  styleUrls: ['./controlcategorias.component.css']
})
export class ControlcategoriasComponent implements OnInit {
  
  textobotons;
	colors;

  constructor(private service : ProductosService,private firestore:AngularFirestore,private toastr: ToastrService) {





   }
 
   lista: Productos[];
   lista2: Productos[];
   NgForm;

  public displayedColumns = ['nombre','borrar',];
  public dataSource = new MatTableDataSource<Productos>();


 @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;


  ngOnInit() {

    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    this.compare();
  	this.resetForm(this.NgForm);
    this.getAllCategorias();
    this.getAllProducts();


  	if (this.service.subsVar==undefined) {    
      this.service.subsVar = this.service.    
      invokeFirstComponentFunction.subscribe((name:string) => {    
        this.resetForm(this.NgForm);    
      });    
    } 
    	if (this.service.subsVar2==undefined) {    
      this.service.subsVar = this.service.    
      invokeSecondComponentFunction.subscribe((name:string) => {    
        this.compare();    
      });    
    } 
  }




    applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }


resetForm(form:NgForm){
	if(form != null)
form.resetForm();
this.service.formData ={
id: null,
categoria: null
}

this.colors="btn btn-outline-success";
  		this.textobotons="Agregar";
}

onSubmit(form:NgForm){
let data = Object.assign({},form.value);
if(data.nombre == null){this.toastr.warning("No puede dejar la categoria sin nombre")  }

  else {
  


delete data.id;
 if(form.value.id == null){
  this.firestore.collection('Categorias').add(data);
   this.toastr.success("Categoria agregada correctamente") 
   this.resetForm(form);
}

else {
this.firestore.doc('Categorias/'+form.value.id).update(data);
   this.toastr.info("Datos actualizados correctamente") 
this.resetForm(form);
this.service.isDone= false;
this.compare()}

}




}

public getAllCategorias = () => {
    this.service.getCategorias().subscribe(actionArray =>{
 	this.lista = actionArray.map(item =>{
    return {
     id: item.payload.doc.id,
	  ...item.payload.doc.data()
	} as Productos;
 	})	
 	});
  }


public firstComponentFunction(){    
    this.service.onFirstComponentButtonClick();    
  }    
  public SecondComponentFunction(){    
    this.service.onSecondComponentButtonClick();    
  }    
/**metodo para traer productos**/

 public getAllProducts = () => {
    this.service.getCategorias().subscribe(actionArray =>{
 	this.dataSource.data = actionArray.map(item =>{
    return {
     id: item.payload.doc.id,
	  ...item.payload.doc.data()
	} as Productos;
 	})	
 	});


  }


compare(){

	if(this.service.isDone == true){
  		this.textobotons="Editar";
  		this.colors = "btn btn-outline-info";

  	}
  	else { this.colors="btn btn-outline-success";
  		this.textobotons="Agregar";}
  
 	
}
onEdit(producto:Productos){

	this.service.formData =Object.assign({},producto);
	this.service.isDone = true;
  this.SecondComponentFunction();
  this.resetForm(form);
}





public onDelete(id:string){


this.firestore.doc('Categorias/'+id).delete();
this.firstComponentFunction();

this.resetForm();
}

cancel(){

  this.resetForm();
}



}

