import { Request, Response } from 'express';
import  pool from '../database';

class GamesController {
	public	index( req: Request, res: Response ) {
		//res.send("hello juegos")
		//pool.query('DESCRIBE games');
		//res.json('games');
		//
		const query = "DESCRIBE games";
		pool(query).then((result) => {
			res.json(result);})
			.catch((error) => {
				console.log(error);
			});
	}
			// end query
	// _______________________________________________esta ejecutando una promesa,pero no devuelve nada
	public async create( req: Request, res: Response ): Promise<void> {
		//muestra por consola lo que recibe
		//console.log(req.body);
		//console.log( `INSERT INTO games SET ? ${JSON.stringify(req.body)} ;  `);
// YA NO SE USA MAS ASI; ES PELIGROSO
		//const query2 =  "INSERT INTO games set ?", req.body ;
		//await pool( `INSERT INTO games VALUES  ('${JSON.stringify(req.body)}') ; `).then((result) => {
		//await pool( `INSERT INTO games SET ? ${JSON.stringify(req.body)} ; `).then((result) => {
		//await pool( `INSERT INTO games(title, description, image ) 'VALUES  ('${JSON.stringify(req.body)}')' ; `).then((result) => {
	//	await pool( `INSERT INTO games (title, description, image)  VALUES  ('${req.body.title}','${req.body.description}','${req.body.image}' ) ; `).then((result) => {
	//		res.json(result);})
	//		.catch((error) => {
	//			console.log(error);
	//		});

		await pool( `INSERT INTO games (title, description, image)  VALUES  ('${req.body.title}','${req.body.description}','${req.body.image}' ) ; `);

			res.json({message: "juego guardado"});
	}
	public async delete( req: Request, res: Response ): Promise<void> {
		const { id } = req.params;
		await pool(`DELETE  FROM games where id = ${id};`);
		res.json({message: "eliminando un juego" });
	}
	public async update( req: Request, res: Response ): Promise<void> {
		const { id } = req.params;
		await pool(`UPDATE games SET title = "${req.body.title}", description = "${req.body.description}", image = "${req.body.image}" where id = ${id};`);
		res.json({text: "actualizando un juego" +req.params.id });
	}
	public async list( req: Request, res: Response ){
		const games = await pool('SELECT * FROM games' );
		res.json(games);
		
	}
	public async list_get_one( req: Request, res: Response ): Promise<any>{
		const { id } = req.params;
		const games = await pool('SELECT * FROM games WHERE id =' + id );
		//console.log(games);
		//
		if(games.length > 0){
			return res.json(games[0]);
		}
		//
		res.status(404).json({message: 'juego no encontrado'});
	}
}

const gamesController= new GamesController();

export default gamesController;
