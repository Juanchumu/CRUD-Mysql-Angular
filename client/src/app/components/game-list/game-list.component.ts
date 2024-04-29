import { Component, OnInit } from '@angular/core';
import { GamesService } from '../../services/games.service';
import { MaterialModule } from '../../modules/material/material.module';
import { RouterModule } from '@angular/router';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSnackBar} from '@angular/material/snack-bar';
//Para que funcione la pipe date:
import { CommonModule } from '@angular/common';
@Component({
	selector: 'app-game-list',
	standalone: true,
	imports: [ MaterialModule,
		RouterModule,
		MatSnackBarModule, CommonModule
	],
	templateUrl: './game-list.component.html',
	styleUrl: './game-list.component.css'
})
export class GameListComponent implements OnInit {
	games: any = [];
	constructor(
		private gameservices: GamesService,
		private _snackBar: MatSnackBar){
		}
		openSnackBar(message: string, action:string){
			this._snackBar.open(message, action);
		}
		ngOnInit(): void {
			this.getGames();
		}
		getGames(){ 
			this.gameservices.getGames().subscribe(
				res => {
					this.games = res;
				},
				err => {
					console.log(err);
					this.openSnackBar('Error al conectar con la api', 'Cerrar')

				}
			);


		}
		deleteGame(id: string){
			this.gameservices.deleteGame(id).subscribe(
				res => {
					console.log(res);
					this.getGames();
				},
				err => {
					console.log(err);
					this.openSnackBar('Error al conectar con la api', 'Cerrar');
				}
			)
		}
		//Funcion que solo sirve para saber que id tiene
		//editGame(id: string){
		//	console.log('funcion id');
		//}
}
