"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class GamesController {
    index(req, res) {
        //res.send("hello juegos")
        //pool.query('DESCRIBE games');
        //res.json('games');
        //
        const query = "DESCRIBE games";
        (0, database_1.default)(query).then((result) => {
            res.json(result);
        })
            .catch((error) => {
            console.log(error);
        });
    }
    // end query
    // _______________________________________________esta ejecutando una promesa,pero no devuelve nada
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
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
            yield (0, database_1.default)(`INSERT INTO games (title, description, image)  VALUES  ('${req.body.title}','${req.body.description}','${req.body.image}' ) ; `);
            res.json({ message: "juego guardado" });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield (0, database_1.default)(`DELETE  FROM games where id = ${id};`);
            res.json({ message: "eliminando un juego" });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield (0, database_1.default)(`UPDATE games SET title = "${req.body.title}", description = "${req.body.description}", image = "${req.body.image}" where id = ${id};`);
            res.json({ text: "actualizando un juego" + req.params.id });
        });
    }
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const games = yield (0, database_1.default)('SELECT * FROM games');
            res.json(games);
        });
    }
    list_get_one(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const games = yield (0, database_1.default)('SELECT * FROM games WHERE id =' + id);
            //console.log(games);
            //
            if (games.length > 0) {
                return res.json(games[0]);
            }
            //
            res.status(404).json({ message: 'juego no encontrado' });
        });
    }
}
const gamesController = new GamesController();
exports.default = gamesController;
