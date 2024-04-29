import { Request, Response } from 'express';

class IndexController {
public	index( req: Request, res: Response ) {
		//res.send("hell0o")
	res.json({text: 'API is in /api/games'});
	}
}

export const indexController = new IndexController();
