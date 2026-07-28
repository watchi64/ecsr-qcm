/**
 * QCM — Thème 04 : L'autoroute
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

  var form = FormApp.create("QCM — Thème 04 : L'autoroute");
  form.setIsQuiz(true);
  form.setTitle("QCM — Thème 04 : L'autoroute");
  form.setDescription("15 questions sur la réglementation autoroutière · Formation ECSR");
  form.setCollectEmail(false);
  form.setShowLinkToRespondAgain(true);
  form.setPublishingSummary(true);

  var questions = [
    {
      q: "Quelle est la vitesse maximale autorisée sur autoroute par temps sec pour un conducteur ayant le permis depuis plus de 2 ans ?",
      choices: ["110 km/h", "120 km/h", "130 km/h", "150 km/h"],
      answer: 2,
      expOk: "Correct ! La vitesse maximale est de 130 km/h par temps sec pour les conducteurs confirmés (permis depuis plus de 2 ans).",
      expKo: "La bonne réponse est 130 km/h par temps sec pour les conducteurs confirmés. Elle est réduite à 110 km/h par temps de pluie ou pour les conducteurs en période probatoire."
    },
    {
      q: "Quelle est la vitesse maximale autorisée sur autoroute par temps de pluie pour un conducteur confirmé ?",
      choices: ["90 km/h", "100 km/h", "110 km/h", "130 km/h"],
      answer: 2,
      expOk: "Correct ! Par temps de pluie ou mauvaise visibilité, la vitesse est limitée à 110 km/h sur autoroute pour un conducteur confirmé.",
      expKo: "La bonne réponse est 110 km/h. Par temps de pluie ou mauvaise visibilité, la vitesse maximale est réduite de 130 à 110 km/h pour les conducteurs confirmés."
    },
    {
      q: "Quelle est la vitesse minimale imposée sur la voie de gauche d'une autoroute (hors encombrements) ?",
      choices: ["50 km/h", "70 km/h", "80 km/h", "100 km/h"],
      answer: 2,
      expOk: "Correct ! Une vitesse minimale de 80 km/h est imposée sur la voie de gauche, réservée au dépassement.",
      expKo: "La bonne réponse est 80 km/h. La voie de gauche est réservée au dépassement et une vitesse minimale de 80 km/h y est imposée pour ne pas gêner la circulation."
    },
    {
      q: "Lequel de ces usagers a accès à l'autoroute ?",
      choices: ["Un cycliste", "Un conducteur de cyclomoteur (50 cm³)", "Un conducteur de voiture particulière", "Un conducteur de tracteur agricole"],
      answer: 2,
      expOk: "Correct ! Seuls les véhicules motorisés aptes à dépasser 80 km/h sont autorisés sur autoroute.",
      expKo: "La bonne réponse est le conducteur de voiture particulière. L'autoroute est interdite aux piétons, cyclistes, cyclomoteurs, engins agricoles et tout véhicule incapable d'atteindre 80 km/h."
    },
    {
      q: "Quelle est la distance de sécurité réglementaire minimale à respecter entre deux véhicules sur autoroute ?",
      choices: ["La distance parcourue en 1 seconde", "La distance parcourue en 2 secondes", "50 mètres fixes quelle que soit la vitesse", "100 mètres fixes quelle que soit la vitesse"],
      answer: 1,
      expOk: "Correct ! La réglementation impose de maintenir une distance équivalente à la distance parcourue en 2 secondes. Des balises blanches tous les 50 m aident à l'estimer.",
      expKo: "La bonne réponse est la distance parcourue en 2 secondes. Des balises blanches tous les 50 m sur l'autoroute aident à estimer cette distance. À 130 km/h, cela représente environ 72 mètres."
    },
    {
      q: "En cas de panne sur autoroute, que doit faire en priorité le conducteur ?",
      choices: [
        "Rester dans le véhicule et appeler depuis son téléphone",
        "Quitter le véhicule par la gauche et marcher sur la voie lente",
        "Mettre son gilet, quitter par la droite, se mettre derrière la glissière et appeler le 112",
        "Allumer ses feux de détresse et attendre dans le véhicule"
      ],
      answer: 2,
      expOk: "Correct ! En cas de panne : gilet avant de sortir, quitter par la droite, triangle à 150 m minimum, se placer derrière la glissière, appeler le 112.",
      expKo: "La bonne réponse : mettre le gilet avant de sortir, quitter par la droite, poser le triangle à 150 m, se placer derrière la glissière de sécurité et appeler le 112. Rester dans le véhicule sur la BAU est extrêmement dangereux."
    },
    {
      q: "À quelle fréquence les bornes SOS sont-elles implantées sur autoroute ?",
      choices: ["Tous les 500 mètres", "Tous les 1 kilomètre", "Tous les 2 kilomètres", "Tous les 5 kilomètres"],
      answer: 2,
      expOk: "Correct ! Les bornes SOS sont implantées tous les 2 kilomètres et géolocalisent automatiquement l'appelant.",
      expKo: "La bonne réponse est tous les 2 kilomètres. Ces bornes mettent directement en relation avec le centre d'intervention et géolocalisent automatiquement l'appelant."
    },
    {
      q: "Un conducteur peut-il faire demi-tour sur une autoroute en cas d'erreur de sortie ?",
      choices: [
        "Oui, sur la bande d'arrêt d'urgence si personne ne vient",
        "Oui, uniquement aux bretelles de sortie",
        "Non, le demi-tour est strictement interdit sur autoroute",
        "Oui, avec les feux de détresse allumés"
      ],
      answer: 2,
      expOk: "Correct ! Le demi-tour est strictement interdit sur autoroute, de même que la marche arrière.",
      expKo: "La bonne réponse est Non. Le demi-tour et la marche arrière sont strictement interdits sur autoroute. En cas d'erreur, il faut prendre la prochaine sortie."
    },
    {
      q: "Sur quelle voie le dépassement est-il autorisé sur autoroute ?",
      choices: [
        "Par la droite uniquement",
        "Par la gauche uniquement",
        "Par la droite ou la gauche selon le trafic",
        "Le dépassement est libre sur toutes les voies"
      ],
      answer: 1,
      expOk: "Correct ! Le dépassement s'effectue uniquement par la gauche sur autoroute. Dépasser par la droite est interdit.",
      expKo: "La bonne réponse est par la gauche uniquement. Dépasser par la droite est interdit sur autoroute. La voie de gauche est une voie de dépassement, pas une voie de circulation permanente."
    },
    {
      q: "Quelle est la signalisation caractéristique des panneaux directionnels d'autoroute ?",
      choices: [
        "Fond vert et lettres blanches",
        "Fond bleu et lettres blanches",
        "Fond blanc et lettres noires",
        "Fond rouge et lettres blanches"
      ],
      answer: 1,
      expOk: "Correct ! Les panneaux d'autoroute ont un fond bleu avec des lettres blanches. Le fond vert correspond aux routes nationales et express.",
      expKo: "La bonne réponse est fond bleu et lettres blanches. Le fond vert correspond aux routes nationales et express, le blanc aux routes ordinaires."
    },
    {
      q: "Un conducteur veut s'insérer sur autoroute via une bretelle d'accès. Qui a la priorité ?",
      choices: [
        "Le véhicule qui s'insère, car il est sur la voie d'accélération",
        "Les véhicules circulant déjà sur l'autoroute",
        "La priorité est partagée entre les deux",
        "Le véhicule le plus rapide a la priorité"
      ],
      answer: 1,
      expOk: "Correct ! Les véhicules déjà engagés sur l'autoroute sont prioritaires. Le conducteur qui s'insère doit trouver un créneau sans forcer.",
      expKo: "La bonne réponse : les véhicules déjà sur l'autoroute sont prioritaires. Le conducteur qui s'insère doit adapter sa vitesse sur la voie d'accélération pour trouver un créneau."
    },
    {
      q: "Que doit faire un conducteur lorsqu'il quitte l'autoroute via une bretelle de sortie ?",
      choices: [
        "Freiner fortement dès l'entrée de la bretelle",
        "Se placer sur la voie de décélération et réduire progressivement sa vitesse",
        "Enclencher le régulateur de vitesse",
        "Allumer ses feux de détresse pour prévenir les autres"
      ],
      answer: 1,
      expOk: "Correct ! Sur la voie de décélération, la vitesse doit être réduite progressivement pour atteindre celle adaptée à la sortie.",
      expKo: "La bonne réponse : utiliser la voie de décélération pour réduire progressivement sa vitesse. Freiner brutalement sur la voie autoroute est dangereux pour les véhicules suiveurs."
    },
    {
      q: "L'utilisation de la bande d'arrêt d'urgence (BAU) pour circuler est-elle autorisée ?",
      choices: [
        "Oui, en cas de bouchon pour maintenir le trafic",
        "Oui, si la BAU est libre et qu'on est pressé",
        "Non, elle est réservée aux arrêts d'urgence et aux véhicules de secours",
        "Oui, pour les véhicules légers uniquement"
      ],
      answer: 2,
      expOk: "Correct ! La BAU est strictement réservée aux arrêts d'urgence et à la circulation des véhicules de secours.",
      expKo: "La bonne réponse : la BAU est strictement réservée aux arrêts d'urgence et aux véhicules de secours. Y circuler est interdit et dangereux. Exception : certaines autoroutes l'autorisent sur signalisation spécifique en cas de congestion."
    },
    {
      q: "Quel feu d'éclairage est obligatoire dans les tunnels autoroutiers ?",
      choices: [
        "Les feux de route (plein phares)",
        "Les feux de position uniquement",
        "Les feux de croisement",
        "Les feux de brouillard avant"
      ],
      answer: 2,
      expOk: "Correct ! Les feux de croisement sont obligatoires dans les tunnels, même de jour. Les feux de route y sont interdits car ils éblouissent.",
      expKo: "La bonne réponse est les feux de croisement. Ils sont obligatoires dans les tunnels, même de jour. Les feux de route sont interdits car ils éblouissent les autres usagers."
    },
    {
      q: "À quelle vitesse maximale un conducteur en période probatoire peut-il circuler sur autoroute par temps sec ?",
      choices: ["130 km/h (comme tout le monde)", "120 km/h", "110 km/h", "100 km/h"],
      answer: 2,
      expOk: "Correct ! Les conducteurs en période probatoire sont limités à 110 km/h sur autoroute, même par temps sec.",
      expKo: "La bonne réponse est 110 km/h. Les conducteurs en période probatoire (moins de 2 ans de permis) sont limités à 110 km/h sur autoroute, contre 130 km/h pour les conducteurs confirmés."
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
