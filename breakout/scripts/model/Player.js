/**
* la class Player.
*/
class Player{
    /**
    * initialise score 
    * @param {integer} score : le score du joueur
    */
    constructor() {
        this._score = 0;
        this._life = 3;
    }
    /**
    * getteur du score
    */
    get score(){
        return this._score;
    }
    /**
    * getteur du life
    */
   get life(){
    return this._life;
}
    /**
    * ajoute des points au score 
    * @param {integer} points : les points a ajouter
    */
    addToScore(points){
        this._score += points;
    }
    /** enléve 1 point de vie. */
    loseALife(){
        this._life--;
    }
    /** retourne true si il a encore de la vie */
    isALive(){
        return this._life != 0;
    }
}