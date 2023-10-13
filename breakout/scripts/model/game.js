/**
 * classe du jeu
 */
class Game {
    /**
     * constructeur du jeu
     */
    constructor() {
        this._lvl = 1;
        this._player = new Player();
        this._wall = [];
        this._wall = getWall();
        this._paddle = new Paddle(new Position(300, 20));
        this._ball = new Ball(new Position(getRandom(0,SCENE_WIDTH - BALL_WIDTH), 200),
            new Movement(getRandom(3,5), +getRandom(3,5)));
    }
    /**
     * deplace la barre
     */
    paddleMove(centerX) {
        this._paddle.moveTo(centerX);
    }
    /**
     * deplace la balle
     */
    ballMove() {
        this._ball.move();
        let tmp = this.onColisionWithWall();
        if (this._ball.onColision(this._paddle)) {
            this._ball.mouvement.reverseY();
            this._ball._topLeft.y += 10;
        }else if( tmp.length != 0){
            this._ball.mouvement.reverseY();
            this._ball._topLeft.y -= 10;
        }
        return tmp;
    }
    /** getteur de la barre */
    get paddle() {
        return this._paddle;
    }
    /** getteur du mur */
    get wall() {
        return this._wall;
    }
    /** getteur de la balle */
    get ball() {
        return this._ball;
    }
    /** getteur du lvl */
    get lvl() {
        return this._lvl;
    }
    /**  lance le lvl suivant. */
    nextLvl(){
        this._lvl++;
        this._wall = getWall();
        this.newBall();
    }
    /**  crée une nouvelle balle . */
    newBall(){
        this._ball = new Ball(new Position(getRandom(0,SCENE_WIDTH - BALL_WIDTH), 200),
            new Movement(getRandom(3,5), +getRandom(3,5)));
    }
    /** getteur du player */
    get player() {
        return this._player;
    }
    /** verifie si la balle est en colision avec une brique */
    onColisionWithWall(){
        let tmp = [];
        for(let i = 0 ; i<this._wall.length;i++) {
            
            if(this.wall[i].onColision(this._ball)){
                this._ball.accelerate(this._lvl);
                this._player.addToScore(42);
                tmp.push(this._wall[i]);
                this._wall.splice(i,1);
            }
        }
        return tmp;
    }
    /** si la balle sort du terrain retourne true. */
    isOutside(){
        return this._ball._topLeft._y + this._ball._mouvement._DeltaY <= 0 ;
    }
    /**  retourne true si le joueur n'a plus de vie. */
    isOver(){
        return this._player.life <= 0 ;
    }
    /** return true si il n'y a plus de brique */
    isWin(){
        return this._wall.length == 0;
    }
}
/**
* retourne un nombre alléatoire
* @param {integer} max - valeur maximum
*/
function getRandom(min,max) {
    return Math.floor(Math.random() * Math.floor(max))+min;
}
/**
* retourne un tableau de brique
*/
function getWall(){
    let tab = [];
    for(let i = 0;i<NB_LIGNE;i++){
        for(let j = 0;j<15;j++){
            tab.push(new Brick(j+(i*15),new Position(j*BRICK_WIDTH ,500-(i*BRICK_HEIGHT)+10)));
        }
    }
    return tab;
}