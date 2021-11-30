import { Component, OnInit,Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { Coche } from 'src/app/interface';

@Component({
  selector: 'app-coches-form',
  templateUrl: './coches-form.component.html',
  styleUrls: ['./coches-form.component.scss']
})
export class CochesFormComponent implements OnInit {
 marca: string = "";
  matricula: string = "";
  color: any = null;
  constructor ()
  {
    let listaCoches: Coche[];
  }
  
 @Input() listaCoches: Coche[] = [];

  ngOnInit(): void {
  }


  insertarCoche (marca:string,matricula:string,color:string)
  {

    let datos = { marca, matricula, color };
    this.listaCoches.push(datos)
    
  }

}
