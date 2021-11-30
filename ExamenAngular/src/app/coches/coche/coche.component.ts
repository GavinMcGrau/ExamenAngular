import { Component, OnInit,Input } from '@angular/core';
import { isEmpty } from 'rxjs';
import { Coche } from 'src/app/interface';

@Component({
  selector: 'app-coche',
  templateUrl: './coche.component.html',
  styleUrls: ['./coche.component.scss']
})
export class CocheComponent implements OnInit {

  constructor ()
  {
    let listaCoches: Coche[];
    let nullLista = false;
    
    
  }
  
  nullLista = false;
  listaCoches: Coche[] = [
    { marca: "Ford", matricula: "4324FVC", color: "rojo" },
    { marca: "Tesla", matricula: "5468RTR", color: "blanco" },

  ];

  isEmpty ()
  {
    if ( this.listaCoches == null )
    {
      const mostrar = document.getElementById( "sinInfo" );
     mostrar!.setAttribute("style", "display:block;");
        
      
    } else
    {
        const mostrar = document.getElementById( "listadoCoches" );
     mostrar!.setAttribute("style", "display:block;");
      
    }
}

 


  ngOnInit(): void {
  }
  

}

  


