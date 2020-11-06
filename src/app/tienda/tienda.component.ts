import { Component, OnInit } from '@angular/core';
import {ProductosService} from 'src/app/shared/productos.service';
import {NgForm} from '@angular/forms';
import {AngularFirestore} from '@angular/fire/firestore';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.css']
})


export class TiendaComponent implements OnInit {
		textoboton;
	color;


  constructor(private service : ProductosService,private firestore:AngularFirestore,
  	private toastr: ToastrService) { }

  ngOnInit() {



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

}




}
