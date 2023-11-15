/**
* la class de Movement.
*/
class Movement{
    /**
    * initialise DeltaX,DeltaY
    * @param {integer} DeltaX : DeltaX
    * @param {integer} DeltaY : DeltaY
    */
    constructor(DeltaX,DeltaY){
        this._DeltaX = DeltaX;
        this._DeltaY = DeltaY;
    }
    /**  inverse delta x. */
    reverseX(){
        this.DeltaX = - this.DeltaX;
    }
    /** inverde deltaY */
    reverseY(){
        this.DeltaY = - this.DeltaY;
    }
    /**
    * getteur de _DeltaX 
    * @return {integer} DeltaX : DeltaX
    */
    get DeltaX() { 
        return this._DeltaX; 
    }
    /**
    * getteur de _DeltaY 
    * @return {integer} DeltaY : DeltaY
    */
   get DeltaY() { 
    return this._DeltaY; 
    }
    /**
    * set DeltaX
    */
    set DeltaX(DeltaX) { 
        this._DeltaX = DeltaX; 
    }
    /**
    * set DeltaY
    */
    set DeltaY(DeltaY) { 
        this._DeltaY = DeltaY; 
    }
}