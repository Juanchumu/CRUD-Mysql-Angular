import { Router } from 'express';
import gamesController  from '../controllers/gamesController'

class GameRoutes {

	 public router: Router = Router();
	 constructor(){
		 this.config();

	 }
	 config(): void {
		// this.router.get('/',gamesController.index);
		 this.router.post('/', gamesController.create);
		 this.router.get('/', gamesController.list);
		 this.router.get('/:id', gamesController.list_get_one);
		 this.router.delete('/:id', gamesController.delete );
		 this.router.put('/:id', gamesController.update );
	 }
}

const gameRoutes = new GameRoutes();

//exportar solo en enrutador
export default gameRoutes.router; 
