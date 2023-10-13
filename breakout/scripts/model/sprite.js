/**
* la classe Sprite.
*/
class Sprite {
    /**
    * initialise topLeft,dimension 
    * @param {Position} topLeft : topLeft
    * @param {Dimension} dimension : dimension
    */
    constructor(id, type, topLeft, dimension) {
        this._id = id;
        this._type = type;
        this._topLeft = topLeft;
        this._dimension = dimension;
    }
    /**
    * getteur de  _id 
    * @return {integer} id : id
    */
    get id() {
        return this._id;
    }
    /**
    * getteur de  type 
    * @return {string} type : type
    */
    get type() {
        return this._type;
    }
    /**
        * getteur de  _topLeft 
        * @return {Position} topLeft : topLeft
        */
    get topLeft() {
        return this._topLeft;
    }
    /**
     * getteur de _dimension
     * @return {dimension} dimension : dimension
     */
    get dimension() {
        return this._dimension;
    }
    /**
     * vérifie si le sprite est en collision avec un autre sprite
     * @return {sprite} other : l'autre sprite
     */
    onColision(other) {
        
        return (this.topLeft.y -this.dimension.height <= other.topLeft.y &&
                this.topLeft.y >= other.topLeft.y - other.dimension.height &&
                this.topLeft.x <= other.topLeft.x + other.dimension.width &&
                this.topLeft.x + this.dimension.width >= other.topLeft.x ); 

    }
}