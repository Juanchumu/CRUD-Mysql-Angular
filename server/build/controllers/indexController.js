"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.indexController = void 0;
class IndexController {
    index(req, res) {
        //res.send("hell0o")
        res.json({ text: 'API is in /api/games' });
    }
}
exports.indexController = new IndexController();
