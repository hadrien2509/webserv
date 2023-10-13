/**
* la class brick.
*/
class Brick extends Sprite{
    /**
    * constructeur qui appelle le constructeur de sprite  
    * @param {int} id : l'id de la brique
    * @param {Position} topLeft : la position du brick
    */
    constructor(id,topLeft) {
        super(id,"brick",topLeft,new Dimension(BRICK_WIDTH,BRICK_HEIGHT));

    }
}