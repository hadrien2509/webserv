/**
* class de la view
* gére l'affichage
*/
class View{

    /**
    * calcul la distance entre le coin gauche de la scene
    * et le coin gauche de la barre
    * @param {evt} evt : l'evt
    * @return la position
    */
    sceneLeft(){
        return $("#scene").offset().left;
    }
    /**
    * ajoute un sprite dans la scene
    * @param {sprite} sprite : le sprite a ajouter
    * @return la position
    */   
    add(sprite){
        $("#scene").append("<span id="+sprite.id+" class="+sprite.type+"></span>");
        this.update(sprite);
    }
    /**
    * mets a jours la position d'un sprite
    * param {sprite} sprite : le sprite
    */
    update(sprite){
        $("#"+sprite.id).css("left",sprite.topLeft.x+"px");
        $("#"+sprite.id).css("bottom",sprite.topLeft.y+"px");
    }
    /**
    * ajoute un tableau de brique
    * @param {[brick]} wall : tableau de brique
    */
    addAll(wall){
        for(let brick of wall) {
            this.add(brick);
        }
    }
    /**
    * supprime un tableau de brique
    * @param {[brick]} wall : tableau de brique
    */
    removeAll(wall){
        for(let brick of wall) {
            this.remove(brick);
        }
    }
    /**
    * supprime un sprite
    * @param {sprite} sprite : le sprite a supprimer
    */
    remove(sprite){
        $("#"+sprite.id).remove();
    }
    /**
    * mets a jours l'affichage du score
    * @param {integer} score : le score
    */
    updateScore(score){
        $("#score").text(score);
    }
    /**
    * mets a jours l'affichage du lvl
    * @param {integer} lvl : le lvl
    */
   updateLvl(lvl){
    $("#lvl").text(lvl);
}
/** cache startMessage. */
    hideMessage(){
        $("#startMessage").hide();
    }
    /** montre startMessage. et change son text
     * @param {string} message : le message a montré
    */
    showMessage(message){
        
        $("#startMessage").show();
        $("#startMessage").text(message);
    }
    /** montre la vie du joueur.
     * @param {int} life : le nombre de coeur a affiché
    */
    showLife(life){
        for(let i = 0; i< life ; i++){
            $("#hearts").append("<img id='heart"+i+"' src='img/heart.png' width='30' />");
        }
    }
    /** enléve un coeur
     * @param {int} life : le nombre de coeur restant
    */
    updateLife(life){
        $("#heart"+(life)).remove();
    }
}
