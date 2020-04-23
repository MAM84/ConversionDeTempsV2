/*Création d'une variable nommée "secondesSaisies" sans valeur de départ*/
var secondesSaisies

/*Création de trois variables de résultat sans valeur de départ*/
var heures
var minutes
var secondes

/*Création d'une fonction pour ouvrir la Lightbox*/
function ouvrirLightbox(){
    document.getElementById("Lightbox").style.display = "block";
    document.getElementById("fermerFenêtre").style.display = "block";
    if(secondesSaisies<0){
        document.getElementById("textLightBox").innerHTML = "La valeur saisie doit être supérieure à 0";
    }
    else{
        document.getElementById("textLightBox").innerHTML = "La valeur saisie doit être un  nombre ou doit être supérieure à 0";
    }
}

/*Création d'une fonction pour fermer la Lightbox*/
function fermerLightbox(){
    document.getElementById("Lightbox").style.display = "none";
    document.getElementById("fermerFenêtre").style.display = "none";
    document.getElementById("seconde").value = "";
    document.getElementById("résultat").innerHTML = "";
}

/*Création d'une fonction nommée "Convertisseur" qui va :
récupérer la valeur des secondes saisies par l'utilisateur
afficher le résultat dans la console
calculer le nombre d'heures correspondant
afficher le nombre d'heures dans la console
calculer le nombre de minutes correspondant
afficher le nombre de  minutes dans la console
calculer le nombre de secondes correspondant
afficher le nombre de  secondes dans la console
afficher le résultat*/
function Convertisseur() {
    secondesSaisies = document.getElementById("seconde").value;
    console.log("Nombre de secondes saisies :  " + secondesSaisies);
    if(secondesSaisies<0 || secondesSaisies==0){
        ouvrirLightbox();
        return;
    }
    
    heures = Math.floor(secondesSaisies/3600);
    console.log("Résultat en heures :  " + heures);
    minutes = Math.floor((secondesSaisies%3600)/60);
    console.log("Résultat en minutes :  " + minutes);
    secondes = ((secondesSaisies%3600)%60);
    console.log("Résultat en secondes :  " + secondes);
    document.getElementById("résultat").innerHTML = heures + " heures " + minutes + " minutes et " + secondes + " secondes"
}