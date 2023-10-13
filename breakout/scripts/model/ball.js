/**
* la class de la balle.
*/
class Ball extends Sprite{
    /**
    * initialise DeltaX,DeltaY valeur
    * @param {Position} topLeft : la position en haut a gauche de la balle
    * @param {Mouvement} mouvement : le mouvement
    */
    constructor(topLeft, mouvement) {
        super("ball","ball",topLeft,new Dimension(BALL_WIDTH,BALL_WIDTH));
        this._mouvement = mouvement;
    }
    /**
    * déplace la balle
    */
    move() {
        if (this.onUpEdge()) {
            this._mouvement.reverseY();
        } else if (this.onLeftOrRightEdge()) {
            this._mouvement.reverseX();
        }
        this._topLeft._x = this._topLeft._x + this._mouvement._DeltaX;
        this._topLeft._y = this._topLeft._y + this._mouvement._DeltaY;
    }
    /**
     * verifie si la balle touche le bord haut ou bas de la scene
     */
    onUpEdge(){
        return this._topLeft._y + this._mouvement._DeltaY >= SCENE_HEIGHT - this.dimension.width;
        
    }
    /**
     * verifie si la balle touche le bord gauche ou droit de la scene
     */
    onLeftOrRightEdge(){
        return this._topLeft._x + this._mouvement._DeltaX <= 0 ||
        this._topLeft._x + this._mouvement._DeltaX >= SCENE_WIDTH - this.dimension.width;
    }
    /**
    * retourne mouvement 
    * @return {integer} mouvement : le mouvement
    */
    get mouvement() {
        return this._mouvement;
    }
    /**
    * accélère la balle 
    * @param {integer} lvl : le lvl courant
    * accélère la balle de 0.042* le lvl courant
    */
    accelerate(lvl){
        let speed = lvl*0.042;
        if(this._mouvement._DeltaX < 0){
            this._mouvement._DeltaX -= speed; 
        }else{
            this._mouvement._DeltaX += speed; 
        }
        if(this._mouvement._DeltaY < 0){
            this._mouvement._DeltaY -= speed; 
        }else{
            this._mouvement._DeltaY += speed; 
        }
    }
}