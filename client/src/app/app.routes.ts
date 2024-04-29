import { Routes } from '@angular/router';
import { GameListComponent } from './components/game-list/game-list.component';
import { GameformComponent } from './components/gameform/gameform.component';

import { NavigationComponent } from './components/navigation/navigation.component';

export const routes: Routes = [
	{path: 'games-list', component: GameListComponent },
	{path: 'game-add', component: GameformComponent },
	{path: 'info', component: NavigationComponent },
	{path: 'game-edit/:id', component: GameformComponent },
	{path: '', component: GameListComponent },
	{path: '**', component: GameListComponent }
];
