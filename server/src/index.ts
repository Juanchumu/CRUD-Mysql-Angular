import express, { Application } from 'express';
import gameRoutes from './routes/gameRoutes';
import indexRoutes from './routes/indexRoutes';
import morgan from 'morgan';
import cors from 'cors';


class Server{
	public app: Application;
	constructor(){
		this.app = express();
		this.config();
		this.routes();

	}
	config(): void {

						//si hay un puerto, tomalo
		//sirve por si lo subimos a la nube
		this.app.set('port', process.env.PORT || 3000);
		// Muestra las peticiones GET,POST, por consola
		this.app.use(morgan("dev"));
		this.app.use(cors());

		this.app.use(express.json());

		this.app.use(express.urlencoded({extended: false}));
	}
	routes(): void {
		this.app.use('/', indexRoutes);
		this.app.use('/api/juegos',gameRoutes);
	}
	start(): void {
		this.app.listen(this.app.get('port'), () =>{
			console.log('Server en el puerto', this.app.get('port'))
		}  

					   );
	}

}

const server = new Server();
server.start();
