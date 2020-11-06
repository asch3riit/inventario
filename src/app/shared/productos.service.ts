import { Injectable ,EventEmitter} from '@angular/core';
import {Productos} from './productos.model';
import { Subscription } from 'rxjs/internal/Subscription';  
import {AngularFirestore} from '@angular/fire/firestore';
@Injectable({
  providedIn: 'root'
})
export class ProductosService {
	formData :Productos;
    isDone: boolean;






  invokeFirstComponentFunction = new EventEmitter(); 
  invokeSecondComponentFunction = new EventEmitter(); 
 
    subsVar: Subscription; 
    subsVar2: Subscription;

  

  constructor(private firestore:AngularFirestore) { 
  }

onFirstComponentButtonClick() {    
    this.invokeFirstComponentFunction.emit();    
  }    

  onSecondComponentButtonClick() {    
    this.invokeSecondComponentFunction.emit();    
  }   

getProductos(){
return this.firestore.collection('Productos').snapshotChanges()

}

getCategorias(){

  return this.firestore.collection('Categorias').snapshotChanges()
}

getVentas(){

  return this.firestore.collection('Ventas').snapshotChanges()
}

}
