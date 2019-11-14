import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pokemon',  //NOTE CSS selector that tells angular to create and insert an instance of this component wherever it finds the corresponding tag in template HTML. i.e <pokemon></pokemon>
  templateUrl: './pokemon.component.html', //NOTE HTML address for component, defines the host view.
  styleUrls: ['./pokemon.component.css'] //NOTE CSS address for component
  //providers: [name]  An array of providers for services that the component requires.
})

export class PokemonComponent implements OnInit {
  constructor() { }

  ngOnInit() { }
}