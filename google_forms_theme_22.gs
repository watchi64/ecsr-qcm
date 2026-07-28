/**
 * QCM — Thème 22 : Feux obligatoires et facultatifs du véhicule
 * Formation ECSR
 *
 * INSTRUCTIONS :
 * 1. Va sur https://script.google.com
 * 2. Clique sur "Nouveau projet"
 * 3. Supprime le code existant et colle tout ce fichier
 * 4. Clique sur ▶ Exécuter (fonction "creerQCM")
 * 5. Accepte les autorisations Google
 * 6. Ouvre les Journaux (Exécution > Journaux) pour voir l'URL du formulaire
 */

function creerQCM() {

  var form = FormApp.create("QCM — Thème 22 : Feux obligatoires et facultatifs du véhicule");
  form.setIsQuiz(true);
  form.setTitle("QCM — Thème 22 : Feux obligatoires et facultatifs du véhicule");
  form.setDescription("15 questions sur les feux du véhicule · Formation ECSR");
  form.setCollectEmail(false);
  form.setShowLinkToRespondAgain(true);
  form.setPublishingSummary(true);

  var questions = [
    {
      q: "Quelle est la portée des feux de croisement (codes) ?",
      choices: ["15 mètres", "30 mètres", "100 mètres", "150 mètres"],
      answer: 1,
      expOk: "Correct ! Les feux de croisement ont une portée d'environ 30 mètres. Leur faisceau est court et plongeant pour ne pas éblouir les usagers venant en sens inverse.",
      expKo: "La bonne réponse est 30 mètres. Les feux de croisement ont un faisceau court et plongeant (30 m) pour ne pas éblouir les autres usagers."
    },
    {
      q: "Quelle est la portée minimale des feux de route (plein phares) ?",
      choices: ["30 mètres", "50 mètres", "100 mètres", "200 mètres"],
      answer: 2,
      expOk: "Correct ! Les feux de route doivent éclairer à au moins 100 mètres. Ils sont réservés aux routes non éclairées sans véhicule à proximité.",
      expKo: "La bonne réponse est 100 mètres minimum. Les feux de route ont un faisceau long et puissant, réservé aux routes non éclairées sans véhicule à proximité."
    },
    {
      q: "Quel voyant s'allume au tableau de bord lorsque les feux de route sont activés ?",
      choices: ["Un voyant vert", "Un voyant orange", "Un voyant bleu", "Un voyant rouge"],
      answer: 2,
      expOk: "Correct ! Le témoin des feux de route est bleu. Le vert correspond aux feux de brouillard avant, l'orange aux feux de brouillard arrière.",
      expKo: "La bonne réponse est un voyant bleu. Le vert correspond aux feux de brouillard avant, l'orange aux feux de brouillard arrière."
    },
    {
      q: "Dans quelle situation les feux de brouillard arrière sont-ils autorisés ?",
      choices: [
        "Lors de toute pluie, même légère",
        "Par brouillard ou chute de neige uniquement",
        "De nuit, quelle que soit la visibilité",
        "Lors d'un stationnement sur la voie publique"
      ],
      answer: 1,
      expOk: "Correct ! Les feux de brouillard arrière ne peuvent être utilisés que par brouillard ou chute de neige. Leur usage sous la pluie est interdit.",
      expKo: "La bonne réponse est par brouillard ou chute de neige uniquement. Sous la pluie, leur puissance éblouit le conducteur suiveur et masque les feux stop — c'est interdit."
    },
    {
      q: "Quand doit-on passer des feux de route aux feux de croisement ?",
      choices: [
        "Dès que l'on approche d'une agglomération éclairée",
        "Seulement si le véhicule en face fait un appel de phares",
        "Dès qu'un véhicule susceptible d'être ébloui est perceptible",
        "Uniquement en cas de brouillard"
      ],
      answer: 2,
      expOk: "Correct ! Il faut passer aux feux de croisement dès qu'un véhicule susceptible d'être ébloui est perceptible, sans attendre d'être trop proche.",
      expKo: "La bonne réponse : dès qu'un véhicule susceptible d'être ébloui est perceptible (en sens inverse ou devant), sans attendre."
    },
    {
      q: "Les feux de jour (DRL) sont obligatoires sur les voitures particulières neuves depuis :",
      choices: ["1er janvier 2000", "7 février 2011", "1er janvier 2015", "7 août 2012"],
      answer: 1,
      expOk: "Correct ! Les DRL sont obligatoires sur les voitures particulières neuves depuis le 7 février 2011 (directive européenne 2008/89/CE).",
      expKo: "La bonne réponse est le 7 février 2011 pour les voitures particulières (le 7 août 2012 pour les utilitaires légers), conformément à la directive européenne 2008/89/CE."
    },
    {
      q: "Un véhicule équipé de feux de jour (DRL) roule de nuit. Que doit faire le conducteur ?",
      choices: [
        "Rien, les DRL suffisent pour être vu",
        "Activer manuellement les feux de croisement",
        "Activer uniquement les feux de position",
        "Utiliser les feux de route dès la tombée de la nuit"
      ],
      answer: 1,
      expOk: "Correct ! Les DRL n'éclairent qu'à l'avant. La nuit, il faut impérativement allumer les feux de croisement manuellement — l'arrière reste sinon invisible.",
      expKo: "La bonne réponse : activer manuellement les feux de croisement. Les DRL n'allument que les feux avant. L'arrière du véhicule reste entièrement éteint sans les codes."
    },
    {
      q: "Pour quelle largeur de véhicule les feux de gabarit sont-ils obligatoires ?",
      choices: ["Plus de 1,80 m", "Plus de 2,00 m", "Plus de 2,10 m", "Plus de 2,50 m"],
      answer: 2,
      expOk: "Correct ! Les feux de gabarit sont obligatoires pour les véhicules de plus de 2,10 m de large.",
      expKo: "La bonne réponse est plus de 2,10 m de large (poids lourds, certains utilitaires). Couleur : blanche à l'avant, rouge à l'arrière."
    },
    {
      q: "Quelle est la cadence légale des clignotants ?",
      choices: [
        "30 à 60 clignotements par minute",
        "60 à 120 clignotements par minute",
        "90 à 150 clignotements par minute",
        "120 à 180 clignotements par minute"
      ],
      answer: 1,
      expOk: "Correct ! La réglementation impose une cadence de 60 à 120 clignotements par minute.",
      expKo: "La bonne réponse est 60 à 120 clignotements par minute. Un rythme anormal peut indiquer une ampoule défectueuse."
    },
    {
      q: "À quelle distance minimale la plaque d'immatriculation arrière doit-elle être lisible de nuit ?",
      choices: ["10 mètres", "20 mètres", "30 mètres", "50 mètres"],
      answer: 1,
      expOk: "Correct ! L'éclairage de la plaque arrière doit la rendre lisible à 20 mètres de nuit.",
      expKo: "La bonne réponse est 20 mètres. L'éclairage de la plaque s'allume automatiquement avec les feux de position."
    },
    {
      q: "Les feux de détresse (warnings) peuvent être utilisés dans laquelle de ces situations ?",
      choices: [
        "Pour se garer rapidement devant une boulangerie",
        "Pour signaler un ralentissement brutal sur autoroute",
        "Pour remplacer les clignotants lors d'un changement de file",
        "Pour signaler qu'on va dépasser un autre véhicule"
      ],
      answer: 1,
      expOk: "Correct ! Les warnings signalent un danger immédiat : véhicule immobilisé, ralentissement brutal sur autoroute, véhicule remorqué.",
      expKo: "La bonne réponse : signaler un ralentissement brutal sur autoroute. Les warnings ne légitiment pas un arrêt en zone interdite et ne remplacent jamais les clignotants."
    },
    {
      q: "Quelle couleur ont les feux de brouillard avant ?",
      choices: ["Rouge uniquement", "Orange uniquement", "Blanche ou jaune sélectif", "Blanche uniquement"],
      answer: 2,
      expOk: "Correct ! Les feux de brouillard avant peuvent être blancs ou jaune sélectif, avec un faisceau large et court plongeant vers le sol.",
      expKo: "La bonne réponse est blanche ou jaune sélectif. Leur faisceau est large et court, plongeant vers le sol pour éclairer sans renvoyer la lumière dans le brouillard."
    },
    {
      q: "Quel risque majeur présente l'oubli d'allumer les feux de croisement la nuit sur un véhicule équipé de DRL ?",
      choices: [
        "Le moteur surchauffe",
        "L'avant du véhicule n'est pas éclairé",
        "L'arrière du véhicule reste invisible pour les autres conducteurs",
        "Les clignotants ne fonctionnent plus"
      ],
      answer: 2,
      expOk: "Correct ! Les DRL n'allument que les feux avant. L'arrière reste entièrement éteint — risque majeur de collision arrière.",
      expKo: "La bonne réponse : l'arrière du véhicule reste invisible. Les DRL n'éclairent qu'à l'avant. Le conducteur peut croire être bien éclairé alors que l'arrière est invisible."
    },
    {
      q: "Quel est le nombre de points retirés pour avoir circulé de nuit sans les feux réglementaires ?",
      choices: ["0 point (amende uniquement)", "2 points", "3 points", "4 points"],
      answer: 3,
      expOk: "Correct ! Circuler de nuit sans éclairage réglementaire entraîne un retrait de 4 points, en plus de l'amende de 4ème classe (135 €).",
      expKo: "La bonne réponse est 4 points. Circuler de nuit ou par visibilité insuffisante sans éclairage réglementaire entraîne un retrait de 4 points + amende de 135 €."
    },
    {
      q: "Dans laquelle de ces situations les feux de route DOIVENT-ILS être éteints ?",
      choices: [
        "Sur route nationale hors agglomération sans autre véhicule visible",
        "Lorsqu'on dépasse un véhicule circulant dans le même sens",
        "En cas de pluie intense",
        "À l'approche d'un péage autoroutier"
      ],
      answer: 1,
      expOk: "Correct ! Lors d'un dépassement, les feux de route éblouissent le conducteur dépassé via ses rétroviseurs. Il faut repasser en feux de croisement.",
      expKo: "La bonne réponse : lors d'un dépassement. Les feux de route éblouissent le conducteur dépassé via ses rétroviseurs. Ils doivent aussi être éteints à l'approche d'un véhicule en sens inverse."
    }
  ];

  for (var i = 0; i < questions.length; i++) {
    var data = questions[i];
    var item = form.addMultipleChoiceItem();
    item.setTitle(data.q);
    item.setPoints(1);

    var choices = [];
    for (var j = 0; j < data.choices.length; j++) {
      choices.push(item.createChoice(data.choices[j], j === data.answer));
    }
    item.setChoices(choices);

    var feedbackOk = FormApp.newFeedback().setText(data.expOk).build();
    var feedbackKo = FormApp.newFeedback().setText(data.expKo).build();
    item.setFeedbackForCorrect(feedbackOk);
    item.setFeedbackForIncorrect(feedbackKo);
  }

  var url = form.getPublishedUrl();
  var editUrl = form.getEditUrl();

  Logger.log("=== QCM CRÉÉ AVEC SUCCÈS ===");
  Logger.log("Lien pour répondre : " + url);
  Logger.log("Lien pour modifier : " + editUrl);

  return url;
}
