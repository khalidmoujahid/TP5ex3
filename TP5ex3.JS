var QUESTIONS = [
    ["Quelle propriété change la couleur du texte ?", "Color"],
    ["Quelle est la balise correcte pour créer un lien hypertexte ?", "<a>"],
    ["Combien font 5 + 7 ?", "12"],
    ["Quel est le plus grand nombre entre 7 et 19 ?", "19"],
    ["Quelle est le e l'équation X + 5 =7 ?", "2"],
    ["Quelle balise crée un saut de ligne ?", "<br>"],
    ["Quel opérateur vérifie à la fois la valeur et le type ?", "==="]
];

function lancerQuiz() {
    var score = 0;
    var totalQuestions = QUESTIONS.length;
    
    console.log("=== QUIZ INTERACTIF ===");
    console.log("Bienvenue ! Le quiz commence avec " + totalQuestions + " questions.");
    alert("Bienvenue au Quiz !\nVous allez répondre à " + totalQuestions + " questions.");
    
    for (var i = 0; i < QUESTIONS.length; i++) {
        var question = QUESTIONS[i][0];
        var reponseCorrecte = QUESTIONS[i][1];
        
        var reponseUtilisateur = prompt("Question " + (i + 1) + "/" + totalQuestions + "\n" + question);
        
        if (reponseUtilisateur !== null) { 
 
            var reponseNorm = reponseUtilisateur.trim().toLowerCase();
            var correcteNorm = reponseCorrecte.trim().toLowerCase();
            
            if (reponseNorm === correcteNorm) {
                score++;
                console.log(" Question " + (i + 1) + ": Réponse juste");
                alert(" Réponse juste !");
            } else {
                console.log(" Question " + (i + 1) + ": Réponse fausse");
                console.log(" Votre réponse: " + reponseUtilisateur);
                console.log(" Bonne réponse: " + reponseCorrecte);
                alert(" Réponse fausse !\nLa bonne réponse était : " + reponseCorrecte);
            }
        } else {
            console.log("  Question " + (i + 1) + ": Annulée par l'utilisateur");
        }
    }
    
    var messageResultat = " RÉSULTATS DU QUIZ\n";
    messageResultat += "Vous avez répondu correctement à " + score + " questions sur " + totalQuestions;
    
    var pourcentage = Math.round((score / totalQuestions) * 100);
    messageResultat += "\nScore : " + pourcentage + "%";
    
    if (pourcentage === 100) {
        messageResultat += "\n Excellent ! Parfait !";
    } else if (pourcentage >= 80) {
        messageResultat += "\n Très bien !";
    } else if (pourcentage >= 60) {
        messageResultat += "\n Bon travail !";
    } else if (pourcentage >= 40) {
        messageResultat += "\n Pas mal !";
    } else {
        messageResultat += "\n Continuez à apprendre !";
    }
    
    alert(messageResultat);
    console.log("=== RÉSULTATS FINAUX ===");
    console.log("Score: " + score + "/" + totalQuestions + " (" + pourcentage + "%)");
}

function lancerQuizAmeliore() {
    var score = 0;
    var totalQuestions = QUESTIONS.length;
    
    var normalisations = {
        "color": ["couleur", "color"],
        "12": ["douze"],
        "19": ["dix-neuf"],
        "2": ["deux"]
    };
    
    console.log("=== QUIZ INTERACTIF AMÉLIORÉ ===");
    alert("Bienvenue au Quiz Amélioré !\nVous allez répondre à " + totalQuestions + " questions.");
    
    for (var i = 0; i < QUESTIONS.length; i++) {
        var question = QUESTIONS[i][0];
        var reponseCorrecte = QUESTIONS[i][1];
        
        var reponseUtilisateur = prompt("Question " + (i + 1) + "/" + totalQuestions + "\n" + question);
        
        if (reponseUtilisateur !== null && reponseUtilisateur.trim() !== "") {
            var reponseNorm = reponseUtilisateur.trim().toLowerCase();
            var correcteNorm = reponseCorrecte.trim().toLowerCase();
            
            var estCorrect = reponseNorm === correcteNorm;

            if (!estCorrect && normalisations[correcteNorm]) {
                for (var j = 0; j < normalisations[correcteNorm].length; j++) {
                    if (reponseNorm === normalisations[correcteNorm][j]) {
                        estCorrect = true;
                        break;
                    }
                }
            }
            
            if (estCorrect) {
                score++;
                console.log("Question " + (i + 1) + ": Réponse juste");
                alert("Réponse juste !");
            } else {
                console.log("Question " + (i + 1) + ": Réponse fausse");
                console.log("Votre réponse: '" + reponseUtilisateur + "'");
                console.log("Bonne réponse: '" + reponseCorrecte + "'");
                alert("Réponse fausse !\nLa bonne réponse était : " + reponseCorrecte);
            }
        } else {
            console.log(" Question " + (i + 1) + ": Pas de réponse");
            alert("Vous n'avez pas répondu à cette question.");
        }
    }
    
    var messageFinal = "RÉSULTATS FINALA EST :\n";
    messageFinal += "Vous avez répondu correctement à " + reponseCorrecte + " questions sur " + totalQuestions;
    messageFinal += "\nScore : " + Math.round((score / totalQuestions) * 100) + "%";
    
    alert(messageFinal);
    console.log("Score final: " + reponseCorrecte, + "/" + totalQuestions);
}
