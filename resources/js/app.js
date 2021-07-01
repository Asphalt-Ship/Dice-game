    //  PARTIE 1 : DECLARATION DES VARIABLES DU PROGRAMME


let scoresGlobals = [0, 0];
let scoreEnCours = 0;
let joueurActif = 1; 
let jouer = true;


    // PARTIE 2 : INITIALISATION DU GUI DU JEU


// document.getElementById('score-1').textContent = '0';
// document.getElementById('score-2').textContent = '0';
// document.getElementById('encours-1').textContent = '0';
// document.getElementById('encours-2').textContent = '0';
// document.querySelector('.de').style.display = 'none';

initialiseLeJeu();


    // PARTIE 3 : GESTION DU CLIC SUR LE BOUTON 'LANCEZ LE DE'


// on cible le bouton à l'aide de sa classe
let btnLancezLeDe = document.querySelector(`.btn-lancer`);

// on attache l'événement de clic à notre bouton avec une fonction anonyme lambda
btnLancezLeDe.addEventListener('click', () => {

    if (jouer) {

        // on simule le lancer de dé et encapsule le résultat dans la variable 'de'
        let de = Math.floor(Math.random() * 6) + 1;

        // on met à jour l'image du dé dans le GUI
        let domDe = document.querySelector('.de'); 
        domDe.style.display = 'block'; 
        domDe.src = `resources/images/de-${de}.png`;

        if (de !== 1) {

            // ici, le lancer a sorti une valeur qui n'est pas '1'

            // on met à jour le score en cours du joueur actif
            scoreEnCours += de;
            document.getElementById(`encours-${joueurActif}`).textContent = scoreEnCours;

        } else {

            // ici, le lancer a sorti la valeur '1'
            // on passe la main au joueur suivant

            // on utilise une expression ternaire pour faire l'alternance entre les deux joueurs
            // joueurActif === 1 ? joueurActif = 2 : joueurActif = 1;

            // on réinitialise le score en cours du joueur actif
            // scoreEnCours = 0;

            // on met à jour le GUI du score en cours pour le joueur actif
            // document.getElementById(`encours-${joueurActif}`).textContent = '0';

            // on met à jour le GUI du voyant actif pour le joueur actif
            // document.querySelector('.joueur-1-panel').classList.toggle('active');
            // document.querySelector('.joueur-2-panel').classList.toggle('active');

            // on met à jour le GUI du dé en le masquant
            // document.querySelector('.de').style.display = 'none';
            
            joueurSuivant();

        }

    }

});


    // PARTIE 4 : GESTION DU CLIC SUR LE BOUTON 'COMMUTEZ' 


let btnCommutez = document.querySelector('.btn-commuter');
btnCommutez.addEventListener('click', () => {

    if (jouer) {

        // lors de la commutation, on met à jour le tableau de scoresGlobal
        // on n'oubliera pas qu'un tableau débute avec un index de 0
        // le joueurActif valant soit 1, soit 2, on prendra soin d'adapter
        // de sorte que joueur 1 ait un index de [0], et joueur 2 un index de [1]
        scoresGlobals[joueurActif - 1] += scoreEnCours;

        // on met à jour le GUI du score global
        document.getElementById(`score-${joueurActif}`).textContent = scoresGlobals[joueurActif-1];
    
        // on vérifie si le joueur a atteint le score gagnant
        if (scoresGlobals[joueurActif -1] >= 100) {
    
            document.getElementById(`nom-${joueurActif}`).textContent = 'Bravo !!!';
            document.querySelector('.de').style.display = 'none';
            document.querySelector(`.joueur-${joueurActif}-panel`).classList.add('vainqueur');
            document.querySelector(`.joueur-${joueurActif}-panel`).classList.remove('active');
            jouer = false;
    
        } else {
    
            // sinon, on passe la main au joueur concurrent, comme dans la partie 3 :
            joueurSuivant();
    
        }

    }

});


    // PARTIE 5 : IMPLEMENTATION DE LA FONCTION 'joueurSuivant'


function joueurSuivant() {

    joueurActif === 1 ? joueurActif = 2 : joueurActif = 1;
    scoreEnCours = 0;
    document.getElementById(`encours-${joueurActif}`).textContent = '0';
    document.querySelector('.joueur-1-panel').classList.toggle('active');
    document.querySelector('.joueur-2-panel').classList.toggle('active');
    document.querySelector('.de').style.display = 'none';

}


    // PARTIE 6 : GESTION DU CLIC SUR LE BOUTON 'NOUVEAU JEU'


let btnNouveauJeu = document.querySelector('.btn-nouveau');
btnNouveauJeu.addEventListener('click', () => {

    // on réinitialise tous les composants du GUI
    initialiseLeJeu();

});


    // PARTIE 7 : IMPLEMENTATION DE LA FONCTION 'initialiseLeJeu'


function initialiseLeJeu() {
    scoresGlobals = [0, 0];
    scoreEnCours = 0;
    joueurActif = 1;

    document.querySelector('.de').style.display = 'none';

    document.getElementById('score-1').textContent = '0';
    document.getElementById('score-2').textContent = '0';
    document.getElementById('encours-1').textContent = '0';
    document.getElementById('encours-2').textContent = '0';

    document.getElementById('nom-1').textContent = 'Joueur 1';
    document.getElementById('nom-2').textContent = 'Joueur 2';

    document.querySelector('.joueur-1-panel').classList.remove('vainqueur');
    document.querySelector('.joueur-2-panel').classList.remove('vainqueur');

    document.querySelector('.joueur-2-panel').classList.remove('active');
    document.querySelector('.joueur-1-panel').classList.add('active');
    jouer = true;

}