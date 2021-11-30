import { Component, OnInit, Input } from '@angular/core';
import { Form, FormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { NgModule } from '@angular/core';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
} )
  
export class AppComponent implements OnInit {
  ngOnInit (): void
  {
    throw new Error( 'Method not implemented.' );
  }
  constructor ()
  {
    

  }

  title = 'ExamenAngular';

  nombre: string = "";
  
 




  creacionUsuario (): void
  {
    
  }

}
