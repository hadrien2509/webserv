/**
* la classe Position.
*/
class Position {
    /**
    * initialise x,y 
    * @param {integer} x : x
    * @param {integer} y : y
    */
    constructor(x, y) {
        this._x = x;
        this._y = y;
    }
    /**
    * getteur de  _x 
    * @return {integer} x : x
    */
    get x() {
        return this._x;
    }
    /**
     * getteur de _y
     * @return {integer} y : y
     */
    get y() {
        return this._y;
    }
    /**
    * set x
    */
    set x(x) {
        this._x = x;
    }
    /**
    * set y
    */
    set y(y) {
        this._y = y;
    }
}