import { Component, HostBinding, OnInit } from '@angular/core';
import { MaterialModule } from '../../modules/material/material.module';
import { Game } from '../../models/game';
import { GamesService } from '../../services/games.service';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSnackBar} from '@angular/material/snack-bar';
//importar para que funcione la pipe  |date: yyyy-mm
import { CommonModule } from '@angular/common';

@Component({
	selector: 'app-gameform',
	standalone: true,
	imports: [ 
		MaterialModule,
		FormsModule, 
		CommonModule,
		MatSnackBarModule
	],
	templateUrl: './gameform.component.html',
	styleUrl: './gameform.component.css'
})
export class GameformComponent implements OnInit {
	//
	@HostBinding('class') clases='row';

	game: Game = {
		id: 0,
		title: '',
		description: '',
		image: '',
		created_at: new Date()
	};
	edit: boolean = false;

	constructor(
		private gameService: GamesService,
		private route: Router,
		private activeRoute: ActivatedRoute,
		private _snackBar: MatSnackBar
	){}
	openSnackBar(message: string, action:string){
		this._snackBar.open(message, action);
	}

	ngOnInit(): void {
		const params =	this.activeRoute.snapshot.params;
		console.log(params);
		//NOTA: se lo llama asi, porque params.id da error
		console.log(params['id']);
		if(params['id']){
			this.gameService.getGame(params['id']).subscribe(
				res => {
					console.log(res);
					this.game = res;
					this.edit = true;
				},
				err => {
					console.log(err);
					this.openSnackBar('Error al conectar con la api', 'Cerrar')
				}
			);
		}

	}
	saveNewGame(){
		delete this.game.created_at;
		delete this.game.id;
		this.gameService.saveGame(this.game).subscribe(
			res => {console.log(res);
				this.route.navigate(['/games'])
			},
			err => {
				console.log(err);
				this.openSnackBar('Error al conectar con la api', 'Cerrar')
			}
		);
	}
	updateGame(){
		delete this.game.created_at;
		console.log(this.game)
		this.gameService.updateGame(this.game.id, this.game).subscribe(
			res => {
				console.log(res);
				this.route.navigate(['games-list']);
			},
			err => {
				console.log(err);
				this.openSnackBar('Error al conectar con la api', 'Cerrar')
			}
		);
	}
}
