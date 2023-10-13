/**
* Contrôleur de la balle.
* Propose des méthodes pour démarrer/arrêter la balle et la faire bouger.
*/
class BallCtrl {
    /** 
    * @param {Game} game - le jeu
    * @param {View} view - la vue
    */
    constructor(game, view) {
        this._game = game;
        this._view = view;
        view.update(this._game.ball);
    }

    /**  Démarre la balle. */
    start() {
        this._moveListener = setInterval(() => this.move(), 10);
    }
    /**  attend que le joueur clique puis lance la balle. */
    ballStartWait() {
        this._view.showMessage("Click to start");
        $(document).mouseup(() => this.ballStart());
    }
    /**  attend que le joueur clique puis lance la balle. */
    ballStart() {
        $(document).off("mouseup");
        this._view.hideMessage();
        this.start();
    }
    /** Déplace la balle d’un pas (défini par son mouvement) et rafraichit la vue. */
    move() {
        let tmp = this._game.ballMove();
        if (tmp != 0) {
            this._view.updateScore(this._game.player.score);
        }
        this._view.removeAll(tmp);
        this._view.update(this._game.ball);
        if(this._game.isOutside()){
            this._game.player.loseALife();
            this._view.updateLife(this._game.player.life);
            if(this._game.isOver()){
                this._view.remove(this._game.ball);
                this.stop();
                this._view.showMessage("Vous avez perdu");
            }else{
                this._game.newBall();
            }
        }
        else if(this._game.isWin()){
            this._game.nextLvl();
            this._view.updateLvl(this._game.lvl);
            this._view.addAll(this._game.wall);
        }
    }

    /** Arrête la balle. */
    stop() {
        clearInterval(this._moveListener);
    }
}