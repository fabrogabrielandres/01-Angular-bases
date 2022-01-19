import { Component } from '@angular/core';

@Component({
	selector: 'app-listado',
	templateUrl: './listado.component.html',
})
export class ListadoComponent {
	heroes: string[] = [ 'goku', 'vegeta', 'mr Stan', 'bulma', 'trons' ];

	heroeBorrado?: string = "";
	borrarHeroe(): void {
		this.heroeBorrado = this.heroes.pop();
	}
}
