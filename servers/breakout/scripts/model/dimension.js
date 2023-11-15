/**
* la classe Dimension.
*/
class Dimension {
    /**
    * initialise width,height 
    * @param {Position} width : width
    * @param {height} height : height
    */
    constructor(width, height) {
        this._width = width;
        this._height = height;
    }
    /**
    * getteur de  _width 
    * @return {integer} width : width
    */
    get width() {
        return this._width;
    }
    /**
     * getteur de _height
     * @return {integer} height : height
     */
    get height() {
        return this._height;
    }
}