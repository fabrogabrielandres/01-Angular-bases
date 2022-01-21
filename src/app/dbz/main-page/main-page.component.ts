import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz';

@Component({
	selector: 'app-main-page',
	templateUrl: './main-page.component.html',
	styleUrls: [ './main-page.component.css' ]
})
export class MainPageComponent {
	personajes: Personaje[] = [
		{
			nombre: 'goku',
			poder: 15000
		},
		{
			nombre: 'vegueta',
			poder: 7500
		}
	];

	nuevo: Personaje = {
		nombre: 'Maestro Roshi ',
		poder: 1000
	};

	agregarNuevoPersonaje(argumente: Personaje) {
		console.log(argumente);
		this.personajes.push(argumente);
	}
}
