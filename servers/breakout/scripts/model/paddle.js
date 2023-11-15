/**
* la class Paddle.
*/
class Paddle extends Sprite{
    /**
    * initialise _topLeft 
    * @param {Position} topLeft : la position du paddle
    */
    constructor(topLeft) {
        super("paddle","paddle",topLeft,new Dimension(PADDLE_WIDTH,PADDLE_HEIGHT));

    }
    /**
    * change topLeft a pos 
    * sauf si pos < 0
    * sauf si pos > sceneWidth - paddleWidth
    * @param {Position} pos : la position
    */
    moveTo(pos) {
        if (pos <= 0) {
            this._topLeft.x = 0;
        } else if (pos > SCENE_WIDTH - this.dimension.width) {
            this._topLeft.x = SCENE_WIDTH - this.dimension.width;
        } else { this._topLeft.x = pos; }
    }
}