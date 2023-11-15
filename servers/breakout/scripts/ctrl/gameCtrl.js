/** 
* contrôleur du jeu
*/
class GameCtrl {
    /** 
    * @param {Game} game - le jeu
    * @param {View} view - la vue
    */
    constructor(game, view) {
        this._game = game;
        this._view = view;
        this._paddleCtrl = new PaddleCtrl(this._game, this._view);
        this._ballCtrl = new BallCtrl(this._game, this._view);

        view.add(this._game.ball);
        view.add(this._game.paddle);
        view.addAll(this._game.wall);
    }
    /** Démare le jeu */
    play() {
        this._view.showLife(this._game.player.life);
        this._ballCtrl.ballStartWait();
    }

    /** Arrête je jeu */
    stop() {
        this._ballCtrl.stop();
    }
}