import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styleUrls: ['./artista.component.css']
})
export class ArtistaComponent implements OnInit {

  constructor( private activatedRoute: ActivatedRoute ) { 

    this.activatedRoute.params.subscribe( params => {
      console.log(params['id']);
      //Ya por medio de un nuevo servicio se llama y se consulta la info del artista
      //y se pinta en el html
    } )

  }

  ngOnInit(): void {
  }

}
