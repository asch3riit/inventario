import { Component, OnInit } from '@angular/core';
import {ProductosService} from 'src/app/shared/productos.service';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import {AngularFirestore} from '@angular/fire/firestore';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

export class ProductComponent implements OnInit {

   textoboton;
   color;
   
   constructor(private service : ProductosService,private firestore:AngularFirestore,private toastr: ToastrService) {
   
   
   
   
   }
   
   lista: Productos[];
   NgForm;
   
   ngOnInit() {
   
   
   
   




d

     this.compare();
     this.resetForm(this.NgForm);
     this.fill();

        
        if (this.service.subsVar==undefined) {    
        this.service.subsVar = this.service.    
        invokeFirstComponentFunction.subscribe((name:string) => {    
        this.resetForm();    
        });    
        } 
        if (this.service.subsVar2==undefined) {    
        this.service.subsVar = this.service.    
        invokeSecondComponentFunction.subscribe((name:string) => {    
        this.compare();    
        });    
        } 
        }


resetForm(form:NgForm){
	if(form != null)
form.resetForm();
this.service.formData ={
id: null,
nombre:null,
cantidad: null,
categoria: null,
detalles: '',
precio: null,
}

      this.color="button";
      this.textoboton="Registrar Producto";
      }

   onSubmit(form:NgForm){
   
   let data = Object.assign({},form.value);

   delete data.id;
   
   if(data.nombre == null || data.precio <= 0 || data.categoria == null || data.cantidad == null || data.cantidad <= 0){
   this.resetForm(form)
   this.toastr.error("Debe LLenar todos los campos requeridos y los valores deben ser mayores a 0")  }

    else{
    
    if(form.value.id == null){
    this.firestore.collection('Productos').add(data);
    this.toastr.success("Producto agregado correctamente") 
    }
    
    else {
    this.firestore.doc('Productos/'+form.value.id).update(data);
    this.toastr.info("Datos actualizados correctamente") 
    this.resetForm(form);
    this.service.isDone= false;
    this.compare()}
    }





}
     
     fill(){
     
     console.log(   this.service.getCategorias().subscribe(actionArray =>{
     this.lista = actionArray.map(item =>{
     return {
     id: item.payload.doc.id,
     ...item.payload.doc.data()
     } as Productos;
     })  
     }))
     
     }

compare(){

	if(this.service.isDone == true){
  		this.textoboton="Guardar Cambios";
  		this.color = "button2";

  	}
  	else { this.color="button";
  		this.textoboton="Registrar Producto";}
  
 	
}

cancel(){

 this.resetForm();
}


}
