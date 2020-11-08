import { Component, OnInit } from '@angular/core';
import {ProductosService} from 'src/app/shared/productos.service';
import {NgForm} from '@angular/forms';
import {AngularFirestore} from '@angular/fire/firestore';
import { ToastrService } from 'ngx-toastr';
import {Productos} from 'src/app/shared/productos.model';

@Component({
  selector: 'app-vender',
  templateUrl: './vender.component.html',
  styleUrls: ['./vender.component.css']
})
export class VenderComponent implements OnInit {

lista: Productos[];
Ngform;
  constructor(private service : ProductosService,private firestore:AngularFirestore,
  	private toastr: ToastrService) {
   }
 
  ngOnInit() {
  	this.fill();

this.service.formData ={
id       : null,
nombre   :'',
cantidad : null,
categoria:'',
detalles : '',
precio   : null,

}

}

	onSubmit(form:NgForm){
	let data =(form.value);
	if (data.cantidad <= 0){
	this.toastr.error("la cantidad debe ser mayor a 0")
	}
	
	else{
	
	if(data.producto == null) {this.toastr.error("No puede estar vacio")
	
	}
	else {

	var a = data.producto.cantidad;
	var b = data.cantidad;
	var c = a-b;
	if(c > -1) {data.producto.cantidad = c 

    data.nombre = data.producto.nombre;

		
    
    this.firestore.collection('Ventas').add(data)
    
    this.firestore.doc('Productos/'+data.producto.id).update(data.producto);
	this.toastr.success("Venta añadida con éxito")
	this.resetForm(form)

	}
	else this.toastr.warning("No hay suficientes productos");
	
	
	
	
	

}
}
}

		fill(){
		
		this.service.getProductos().subscribe(actionArray =>{
		this.lista = actionArray.map(item =>{
		return {
		id: item.payload.doc.id,
		...item.payload.doc.data()
		} as Productos;
		})  
		})
		
		}
      

	resetForm(form:NgForm){
	if(form != null)
	form.resetForm();
	this.service.formData ={
	id: null,
	nombre:'',
	cantidad: null,
	categoria:'',
	detalles: '',
	precio: null,
	}
	}
	
	
    cancel(){

   this.resetForm(this.Ngform);

    }




	}

