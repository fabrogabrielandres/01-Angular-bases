import { Injectable } from '@angular/core';
import { Personaje } from '../interfaces/dbz';

@Injectable()
export class DbzService {
	private _personajes: Personaje[] = [
		{
			nombre: 'goku',
			poder: 15000
		},
		{
			nombre: 'vegueta',
			poder: 7500
		}
	];

	get personajes(): Personaje[] {
		return [ ...this._personajes ];
	}

	constructor() {}

    agregarPersonaje(personaje:Personaje){
        this._personajes.push(personaje)
    }
}
