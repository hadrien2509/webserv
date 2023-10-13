/**
* Contrôleur pour le mouvement de la barre.
* Il le fait suivre la souris.
*/
class PaddleCtrl {
    /**
     * Affichez la palette et commencez à la contrôler avec la souris.
     * @param {Game} game: le jeu
     * @param {View} view: la vue
     */
    constructor(game,view) {
        view.update(game.paddle);
        $(document).mousemove((evt) => this.moveMouse(game,view,evt));
    }
    /**
     * Appelé lorsque la souris est déplacée.
     * Il déplace la barre (horizontalement) où se trouve la souris.
     * @param {Paddle} paddle: la barre
     * @param {View} view: la vue
     * @param {MouseEvent} evt: l'événement mouse
     */
    moveMouse(game, view, evt) {
        game.paddleMove(evt.clientX - (view.sceneLeft()+(game.paddle.dimension.width/2)));
        view.update(game.paddle);
    }
}