import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrl: './template.component.css'
})
export class TemplateComponent {

  tipo: string ='Template';
  constructor(){ }

  usuarios={

    nombre:'',
    apellido:'',
    email:''
  }

  ngOnInit(): void {
  }

  guardar(forma: NgForm){

    console.log(forma.value);
  }
}
