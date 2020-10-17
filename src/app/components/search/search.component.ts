import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  artistas: any[] = [];

  constructor( private spotify: SpotifyService,
               private router: Router ) { }

  ngOnInit(): void {
  }

  buscar(termino: string){

    console.log(termino);

    this.spotify.getArtista( termino ).subscribe( (data: any) => {

      //console.log(data.artists.items);
      this.artistas = data;


    }, (error) => {console.log(error)} );

  }

  verArtista(artista: any){
    console.log(artista.id);
    this.router.navigate(['/artist', artista.id]);
  }

}
