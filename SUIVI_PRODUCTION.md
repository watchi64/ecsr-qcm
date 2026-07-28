# Suivi de production — QCM par thème (source SRRR)

> **Rôle de ce fichier** : trace de provenance et d'avancement du chantier QCM (spec : `docs/specs/2026-07-26-qcm-srrr-adaptatif-design.md`).
> La provenance SRRR est notée **ici uniquement**, jamais dans un champ visible de l'app.
> Règles : reformulation systématique (aucune phrase SRRR copiée), chaque fait vérifié (Légifrance PISTE / ONISR / securite-routiere.gouv.fr), source tracée dans le champ `explication` de chaque question.

## QCM transversaux (thèmes non numérotés, créés le 2026-07-26)

| QCM | theme_id | qcm_id | Cible | Statut |
|---|---|---|---|---|
| 📅 Dates clés de la sécurité routière | 117 | 18 | ~20-25 q | **PRODUIT 26/07** — 26 q en 6 sections, trace `qcm_dates_cles.md` |
| 📊 Statistiques et chiffres clés (ONISR 2024) | 115 | 19 | ~20-25 q | **PRODUIT 26/07** — 22 q en 5 sections, trace `qcm_statistiques.md` |
| ⚖️ Sanctions routières — panorama | 116 | 20 | ~50-60 q | **PRODUIT 26/07** — 60 q en 12 sections, 39 articles vérifiés API PISTE, trace `qcm_sanctions.md` |

## Mapping 57 thèmes ↔ fiches SRRR

Base URL : `https://www.srrr.fr/themes-securite-routiere/`
« Déjà en base » = questions existantes avant chantier (import Google Forms ECF / docx Hocine) — à **enrichir**, pas remplacer.

| N° | Thème | Slug SRRR | Déjà en base | Statut |
|----|-------|-----------|--------------|--------|
| 01 | Signalisation verticale | `la-signalisation-verticale` (+ bonus `les-panneaux-de-prescription`) | 9 q | **ENRICHI 26/07** — +6 q (15 au total), trace `qcm_theme_01_complement.md` |
| 02 | Signalisation horizontale | `la-signalisation-horizontale` | 10 q | **ENRICHI 26/07** — +6 q (16 au total), trace `qcm_theme_02_complement.md` |
| 03 | Stationnement, arrêt, immobilisation | `arret-stationnement-et-immobilisation` | 0 q (coquille qcm_id 17) | **PRODUIT 26/07** — 14 q, trace `qcm_theme_03.md` |
| 04 | L'autoroute | `l-autoroute` | 13 q | **ENRICHI 26/07** — +6 q (19 au total), trace `qcm_theme_04_complement.md` ⚠️ voir anomalie q4 |
| 05 | Les croisements | `les-croisements` | 10 q | **ENRICHI 26/07** — +6 q (16 au total), trace `qcm_theme_05_complement.md` |
| 06 | Les dépassements | `les-depassements` | — | **PRODUIT 26/07** — 15 q (qcm_id 22), trace `qcm_theme_06.md` |
| 07 | Les voies réservées | `les-voies-reservees` | 9 q | **ENRICHI 26/07** — +6 q (15 au total), trace `qcm_theme_07_complement.md` |
| 08 | Intersections non gérées | `les-intersections-non-gerees-par-une-signalisation-lumineuse` | 19 q | **ENRICHI 26/07** — +4 q (23 au total), trace `qcm_theme_08_complement.md` |
| 09 | Intersections gérées | `les-intersections-gerees-par-une-signalisation-lumineuse` | 19 q | **ENRICHI 26/07** — +5 q (24 au total), trace `qcm_theme_09_complement.md` |
| 10 | Les passages à niveau | `les-passages-a-niveau-p-a-n` | — | **PRODUIT 26/07** — 13 q (qcm_id 21), trace `qcm_theme_10.md` |
| 11 | Ronds-points et sens giratoires | `les-ronds-points-et-les-carrefours-a-sens-giratoire` | 11 q | **ENRICHI 26/07** — +5 q (16 au total), trace `qcm_theme_11_complement.md` |
| 12 | Vitesse : réglementation et sanctions | `vitesse-reglementation-et-sanctions` | — | **PRODUIT 26/07** — 15 q (qcm 25), trace `qcm_theme_12.md` |
| 13 | Vitesse : signalisation et rôle | `la-vitesse-signalisation-et-role` | — | **PRODUIT 26/07** — 12 q (qcm 23), trace `qcm_theme_13.md` |
| 14 | Les distances d'arrêt | `les-distances-d-arret` | — | **PRODUIT 26/07** — 12 q (qcm 26), trace `qcm_theme_14.md` |
| 15 | Temps de réaction et distance de sécurité | `temps-de-reaction-et-distances-de-securite` | — | **PRODUIT 26/07** — 13 q (qcm 27), trace `qcm_theme_15.md` |
| 16 | Lois physiques appliquées au véhicule | `la-physique-appliquee-au-vehicules` | — | **PRODUIT 26/07** — 13 q (qcm 24), trace `qcm_theme_16.md` |
| 17 | Le permis à points | `le-permis-a-points-role-et-fonctionnement` | — | **PRODUIT 27/07** — 13 q (qcm 29), trace `qcm_theme_17.md` |
| 18 | Le permis B | `le-permis-de-conduire-de-categorie-b` | — | **PRODUIT 27/07** — 13 q (qcm 30), trace `qcm_theme_18.md` |
| 19 | Permis : sanctions administratives et pénales | `sanctions-administratives-et-penales-en-matiere-de-securite-routiere` | — | **PRODUIT 27/07** — 12 q (qcm 28), trace `qcm_theme_19.md` |
| 20 | Documents et équipements | `documents-et-equipements-obligatoires-et-facultatifs` | 9 q (corrigés DÉDUITS — form Google supprimé) | **FIABILISÉ 27/07** — les 9 corrigés confirmés ou clarifiés, plus aucun « à confirmer » |
| 21 | Ensembles de véhicules cat. B | `les-ensembles-de-vehicules-de-la-categorie-b` | — | **PRODUIT 27/07** — 12 q (qcm 31), trace `qcm_theme_21.md` |
| 22 | Feux du véhicule | `les-feux-obligatoires-et-facultatifs-des-vehicules` | — | à produire (cours local dispo) |
| 23 | Transport d'une charge | `le-transport-d-une-charge-en-securite-a-l-aide-d-un-vehicule` | — | à produire |
| 24 | Surfaces vitrées et rétroviseurs | `surfaces-vitrees-et-retroviseurs` | — | à produire |
| 25 | Vérifications de sécurité | `les-verifications-de-securite-du-vehicule` | — | à produire |
| 26 | La vue du conducteur | `la-vue-du-conducteur` | — | à produire |
| 27 | L'attention du conducteur | `l-attention-du-conducteur` | — | à produire |
| 28 | Alcool : cadre réglementaire | `alcool-le-cadre-reglementaire` | — | à produire |
| 29 | Estimation du taux d'alcoolémie | `alcool-evaluation-du-taux` | — | à produire |
| 30 | Alcool : diffusion et élimination | `alcool-diffusion-elimination` | — | à produire |
| 31 | Alcool : effets et accidentologie | `alcool-effets-accidentologie` | — | à produire |
| 32 | Substances psychoactives | `les-substances-psychoactives-et-la-conduite` | — | à produire |
| 33 | Usagers vulnérables | `les-usagers-vulnerables-sur-la-route` | — | à produire |
| 34 | Partage de la route : piétons | `le-partage-social-de-la-route-avec-les-pietons` | — | à produire |
| 35 | Partage de la route : deux-roues et L5e | `le-partage-social-de-la-route-avec-les-deux-et-trois-roues-motorises` | — | à produire |
| 36 | Partage de la route : groupe lourd | `partage-social-de-la-route-avec-les-vehicules-du-groupe-lourd` | — | à produire |
| 37 | Véhicules d'intérêt général | `les-vehicules-d-interet-general-vig` | — | à produire |
| 38 | Communication entre usagers | `la-communication-entre-les-usagers` | — | à produire |
| 39 | L'âge et la conduite | `l-age-et-la-conduite` | — | à produire |
| 40 | Risque routier 18-24 ans | `le-risque-routier-chez-les-jeunes-de-18-a-24-ans` | — | à produire |
| 41 | Conduite par intempéries | `les-risques-lies-a-la-conduite-par-intemperies` | 10 q | à enrichir |
| 42 | Conduite de nuit | `les-risques-lies-a-la-conduite-de-nuit` | — | à produire |
| 43 | Circulation en hiver, voyage | `la-circulation-en-hiver` | — | à produire |
| 44 | Systèmes de retenue | `les-systemes-de-retenue-en-vehicule` | — | à produire |
| 45 | Pneumatiques | `les-pneus-adherence-entretien-et-reglementation` | — | à produire |
| 46 | Sécurité active | `les-dispositifs-de-securite-active-et-passive` | — | à produire |
| 47 | Aides et assistances à la conduite | `aides-et-assistances-a-la-conduite` | — | à produire |
| 48 | Utilisation rationnelle du véhicule | `utilisation-rationnelle-du-vehicule-aspect-mecanique` | 12 q (docx Hocine) | à enrichir |
| 49 | L'éco-conduite | `l-eco-conduite` | — | à produire |
| 50 | Assurance : rôle, obligatoires/facultatives | `assurance-automobile` | — | à produire |
| 51 | Assurance : constat amiable | `le-constat-amiable` | — | à produire |
| 52 | Comportement en cas d'accident | `le-comportement-en-cas-d-accident-materiel-et-corporel` | — | à produire |
| 53 | Approche multifactorielle, HVE | `approche-multifactorielle-de-l-accident` | 14 q | à enrichir |
| 54 | Continuum éducatif | `le-continuum-educatif` | — | à produire |
| 55 | Fonction sociale de la réglementation | `la-fonction-sociale-de-la-reglementation-en-matiere-de-securite-routiere` | — | à produire |
| 56 | Justifications des politiques SR | `justification-des-politiques-de-securite-routiere` | 10 q (« Histoire de la SR et statistiques ») | à enrichir (lié au QCM 📅) |
| 57 | Pressions et influences (vitesse) | `pressions-et-influences-incitant-a-une-vitesse-inadaptee` | — | à produire |

**Couverture : 57/57 thèmes ont une fiche SRRR.** Fiche surnuméraire : `les-panneaux-de-prescription` (rattachée au thème 01).

## Erreurs SRRR relevées (corrigées chez nous)

| Fiche | Erreur | Correction | Source |
|---|---|---|---|
| vitesse-reglementation-et-sanctions | « Radars automatiques déployés en 2004 » | Premier radar automatique : **27 octobre 2003** (RN20, La Ville-du-Bois) | securite-routiere.gouv.fr + presse spécialisée (vérifié 26/07) |
| arret-stationnement-et-immobilisation | « Ouverture dangereuse de portière : 135 € depuis 2024 » | R417-7 en vigueur = contravention de **1re classe (11 €)** | API Légifrance PISTE 26/07 |
| les-passages-a-niveau-p-a-n | « 31 accidents, 19 décès en 2024 » | SNCF Réseau : **89 collisions, ~20 tués** en 2024 ; ~100 collisions/an ; 98 % dues aux usagers routiers | sncf-reseau.com, accidentologie ferroviaire |
| les-distances-d-arret **vs** la-physique-appliquee-au-vehicules | **SRRR se contredit** sur les distances de freinage : la fiche « distances d'arrêt » donne 130 m à 130 km/h (arrêt = dizaines², freinage = arrêt − réaction), la fiche « physique » donne 75 m. Idem sur le mouillé : « ×1,5 » puis « doublée » | Mnémotechniques chiffrées de freinage **écartées** de nos QCM. On ne retient que le certain : réaction = dizaines × 3 ; sécurité 2 s = dizaines × 6 ; freinage ∝ v² (doubler la vitesse → ×4) ; mouillé ≈ freinage doublé | analyse interne 26/07 |

## Thème 20 — les 9 corrigés « déduits » ont été tranchés (27/07)

Le formulaire Google d'origine ayant été supprimé, les bonnes réponses avaient été reconstruites et marquées « à confirmer ». Vérification faite, **les 9 corrigés sont bons**, mais 3 énoncés étaient ambigus et ont été reformulés :

| Q | Problème | Traitement |
|---|---|---|
| 1 | « Durée de validité du permis » : « 15 ans » et « À vie » sont tous deux défendables selon qu'on parle de la carte ou du droit | Énoncé recentré sur le **TITRE** (la carte plastifiée) → 15 ans indiscutable |
| 2 | « Récidive de défaut de permis » : 1 an/15 000 € est la peine du délit simple, pas une peine doublée | Énoncé précisé : en récidive, **on perd le bénéfice de l'amende forfaitaire** et l'affaire va au tribunal |
| 7 | « Ne pas AVOIR de gilet » → la réponse 135 € vaut pour ne pas le PORTER ; ne pas l'avoir à bord = 11 € (1re classe) | Énoncé recentré sur « sortir du véhicule sans le mettre » → 135 € correct, la nuance passe dans l'explication |

Deux confirmations utiles au passage : la **vignette verte d'assurance est supprimée depuis le 1er avril 2024** (d'où « rien à afficher »), et l'**éthylotest n'est plus obligatoire à bord depuis 2020**.

## Anomalie détectée dans l'existant (import ECF) — décision utilisateur requise

**Thème 04, question 4** (`question_id` 85) : « Quelle est la distance moyenne entre deux aires de repos sur autoroute ? »
→ **DEUX** options sont marquées correctes : « Environ 10 km » ET « Environ 5 km ». Avec le scoring de l'app (ensemble coché = ensemble des bonnes), la question est **impossible à réussir** sauf à cocher les deux.
→ Les sources publiques (Ornikar, En Voiture Simone, Wikipédia) convergent plutôt sur **15 à 25 km** (« une aire tous les 20 km »), soit l'option « Environ 20 km », actuellement marquée fausse.
→ **Non corrigé volontairement** : le corrigé ECF fait référence pour l'examen. À trancher par l'utilisateur (décocher « Environ 5 km », ou basculer la bonne réponse sur « Environ 20 km »).

Contrôle global thèmes 01-11 : **aucune** question à 0 bonne réponse, **aucun** énoncé dupliqué. Les 6 autres questions à réponses multiples sont légitimes (énoncés « plusieurs réponses », gérées par le player multi).

## Règle de rédaction (ajoutée le 2026-07-27, demande utilisateur)

Chaque question doit être **univoque et compréhensible sans jargon** :
- **Pas de vocabulaire juridique brut** dans l'énoncé. Le texte de loi se paraphrase (« pneus à clous » et non « crampons antidérapants faisant saillie » ; « peut vous être reproché » et non « opposable » ; « autocar transportant des passagers debout » et non « en exploitation »). Le terme savant peut figurer dans l'explication, entre parenthèses.
- **Une réponse = une seule idée.** Interdit de mélanger deux informations dans une option (« Oui, 2e classe — et minimum 80 km/h sur la voie de gauche ») : le complément va dans l'explication.
- **Options courtes** (≈ 70 caractères max) pour rester lisibles sur mobile.
- Si une question compare deux notions, la recentrer sur une seule et traiter l'autre dans l'explication.

**Règles ajoutées le 2026-07-28 (signalements utilisateur en cours de relecture)** :

- **Aucun indice de forme ne doit trahir la bonne réponse.** Les options sont mélangées à l'affichage (entraînement *et* examen), donc la position ne fuite pas — mais la **longueur**, la **ponctuation** et la **richesse** de la formulation, oui. Un leurre doit avoir la même longueur et la même forme que la bonne réponse : si la bonne réponse énumère trois facteurs, les leurres énumèrent trois facteurs ; si elle donne « valeur, ou valeur si condition », les leurres suivent la même structure. Même exigence pour le point final : soit toutes les options en portent un, soit aucune.
- **Jamais d'option qui renvoie à une autre par sa position.** « Toutes les réponses ci-dessus », « les deux propositions précédemment citées », « les réponses A et B » : le mélange des options rend ces formulations absurdes. Deux remèdes : rendre l'option **autoportante** (« un rétrécissement à droite, à gauche ou des deux côtés »), ou passer la question en **réponses multiples** quand les éléments sont vrais indépendamment.
- **Une question = une seule information.** Interdit : « Stationner en double file, **et** stationner sur une place réservée : quelles amendes ? ». Soit on scinde en deux questions, soit on recentre l'énoncé sur une seule information et la seconde passe dans l'explication.
- **Les réponses multiples sont disponibles** (10 questions les utilisent). L'énoncé doit alors le signaler — « (plusieurs réponses) » ou « (2 réponses) » — car le score exige l'**ensemble exact** des bonnes réponses : en cocher une seule est compté faux.

**Exception ajoutée le 2026-07-28 (arbitrage utilisateur)** : la consigne « zéro jargon » vise le **vocabulaire juridique brut**, pas le vocabulaire de spécialité de la formation. En **psychologie** et en **anatomie / physiologie**, les termes enseignés en ECSR sont à conserver même s'ils sont introuvables sur internet : ils font partie de ce qui est attendu à l'examen. C'est à ce titre que la typologie des cinq mobiles de la prise de risque et la grille des trois familles de facteurs du sur-risque masculin ont été réintégrées. La règle qui subsiste : **définir le terme dans l'explication**, jamais le laisser nu.

⚠️ **Les questions de l'import ECF (Google Forms) ne respectent pas ces règles** : options de 100 à 180 caractères, phrases avec point final, formulations verbeuses. Concerne surtout les thèmes 01, 04, 05, 07, 11. À reprendre lors d'une passe de fiabilisation (non bloquant : elles restent justes).

## ✅ CHANTIER COMPLET (27/07/2026)

État vérifié en base : **998 questions, 4 916 options, 63 QCM, 57/57 thèmes couverts**.
- **0** question sans explication — **chaque question de la base a désormais une explication sourcée**, y compris les 177 questions ECF et seeds formateur reprises en fin de chantier.
- **0** question sans source nommée, **0** question non jouable, **0** artefact d'échappement, **0** mojibake.
- Les 9 questions à réponses multiples sont les questions ECF légitimes (énoncés « plusieurs réponses »).

✅ **Questions à image : vérifiées par l'utilisateur le 28/07** — les 11 illustrations sont bien présentes et s'accordent avec les énoncés, « pas de problèmes apparents ». Le tableau §QUESTIONS À IMAGE est conservé comme trace, mais **il n'y a rien à finir**.

⏳ **Tous les QCM restent `published = false`** — décision utilisateur du 28/07 : **on ne publie pas maintenant**. La publication interviendra après sa relecture de validation, au cours de laquelle chaque doute restant sera corrigé.

## QUESTIONS À IMAGE — à finir avec l'illustration sous les yeux

Ces questions ont une explication correcte sur le fond, mais qui ne peut pas commenter l'image. **Seul un humain voyant l'illustration peut les compléter.** Par ordre de priorité :

| id | QCM | Sujet | Pourquoi c'est fragile |
|---|---|---|---|
| **105** | 10 (croisements) | Planche de 10 balises, réponse « 7 » | **Le cas le plus faible** : impossible de justifier le numéro sans voir la planche |
| **111** | 10 (croisements) | Car / camion, le car s'arrête | On ne sait pas pourquoi le car est désigné plutôt que le camion |
| 109, 110 | 10 (croisements) | Situations violet/bleu et rouge/camion | La raison du choix dépend de l'obstacle et de la pente dessinés |
| 104 | 10 (croisements) | « Les flèches sont-elles dans le bon sens ? » | B15 ou C18 indéterminable |
| 49 | 4 (signalisation) | Balise en intersection | Catégorie de balise non identifiable |
| 48 | 4 (signalisation) | Panneau temporaire de rétrécissement | Explication générique |
| 54 | 5 (giratoires) | « Cette signalisation indique un giratoire ? » | Explication générique |
| 93, 94, 112 | 8, 10 | Télépéage, bifurcation à 1000 m, chaucidou | Déduction jugée sûre par l'agent |

## Arbitrage du 28/07/2026 — tranché et appliqué en base

L'utilisateur a validé les recommandations, **sauf deux points explicitement redressés** (#4 et #6), et confirmé le point #17. État après arbitrage : **1 004 questions, 4 957 options**.

### Corrections appliquées

| # | Décision | Ce qui a changé en base |
|---|---|---|
| 1 | **Corrigé de 1992 rendu univoque** | id 74 : l'énoncé est daté au **1er janvier 1992**, ce qui ne laisse que le contrôle technique. L'explication rappelle que le permis à points est entré en application le 1er juillet de la même année. |
| 2 | **Millésime mis à jour** | id 79 : « 91 tués par million » → **97** (Bilan ONISR 2024). |
| 3 | **Question rendue jouable** | id 85 : l'option « Environ 5 km » est **décochée**. Le corrigé ECF « environ 10 km » est conservé comme seule bonne réponse. |
| 4 | **Triangle : 30 m enseignés comme du code** (arbitrage utilisateur, contre ma recommandation initiale) | **2 questions ajoutées** au qcm 43 (ordres 5-6, section PROTÉGER) : la distance de 30 m, et le placement **avant** un sommet de côte ou un virage. R416-19 ne fixe aucune distance mais cite bien ces situations : la nuance est dans l'explication. |
| 6 | **Typologie du risque réintégrée** (arbitrage utilisateur : le vocabulaire de la psychologie est attendu à l'examen) | **6 questions ajoutées** au qcm 42 (ordres 7-12, section « Les cinq mobiles de la prise de risque ») : un cas concret par mobile — pratique, autonomie, prestance, stimulation, catharsis — plus l'usage pédagogique de la grille. **2 questions ajoutées** au qcm 35 (ordres 9-10) sur les trois familles de facteurs du sur-risque masculin (biologique, psychologique, anthropologique), écartées elles aussi pour la même raison. Chaque explication distingue le fait documenté de la grille de lecture, et précise que celle-ci ne figure pas dans le Code de la route. |
| 13 | **Non-sujet** | Vérifié dans le code de l'app : `section = NULL` n'affiche simplement pas de sous-titre (`js/views/qcm.js:169` et `:464`), et c'est le cas des **12** blocs importés d'ECF, pas seulement du qcm 3. Seule la graphie de l'option d'abstention a été harmonisée (« Je ne sais pas. » partout, forme majoritaire à 888 contre 71). |
| 14 | **Doublons d'import supprimés** | Les 4 questions sur les **feux** en double ont été retirées du **qcm 12** (thème 8, intersections *non* gérées par signalisation lumineuse) et conservées au **qcm 14** (thème 9, intersections à feux), leur place logique. Numérotation resserrée. Aucune tentative n'était enregistrée sur ce QCM. Les 5 recoupements restants sont volontaires (dont 1:9 = 2:9 sur la boîte de vitesses, deux thèmes différents : utile en révision espacée). |
| 16 | **Code de panneau corrigé** | id 138 : « panneau AB7 » → **AB25**. L'explication retient au passage que l'AB7 annonce la fin d'une route prioritaire. |
| 17 | **Confirmé par l'utilisateur : il s'agit bien de la longueur d'une bande** | id 155 : énoncé précisé en « longueur d'un **trait** de la ligne discontinue qui borde la BAU » → **39 m** (traits de 39 m, intervalles de 13 m). **Ma réserve était infondée.** L'explication de la question voisine (id 149, rive de route ordinaire : 3 m de trait pour 3,5 m d'intervalle) mentionne désormais ce cas particulier, qui inverse la proportion. |
| 18 | **Corrigé conservé** | id 156 : seule la faute d'orthographe de l'énoncé est corrigée (« Est ce que » → « La couleur rouge existe-t-elle… »). L'explication distinguait déjà les trois couleurs réglementaires du rouge de renforcement. |
| 19 | **Infraction clarifiée** | id 92 : l'énoncé devient « lorsqu'on **circule** sur la bande d'arrêt d'urgence… sans nécessité absolue », en cohérence avec le barème appliqué (4e classe, 135 €, 3 points). |

### Statu quo assumé

- **#5, #7, #8, #9, #21** — **RÉSOLUS le 28/07** par recherche dans les sources officielles, voir la section « Points tranchés par les sources officielles » plus bas. Restent ouverts : **#10** (amende « conduite sans correction visuelle », aucun article citable trouvé) et **#22** (statistiques ECF non recoupables).
- **#11** — sans objet : `qcm_theme_22.md` contient bien la trace du QCM actuel (15 q, qcm 60). L'ancienne version à 16 questions reste dans `qcm_theme_22.html`.
- **#12** — rien à faire avant 2029 (abrogations différées, articles en vigueur).
- **#20** — « croisement à l'indonésienne » : vocabulaire ECF conservé tel quel, le principe testé étant juste.
- **#23** — corrigés du QCM formateur (qcm 1) inchangés : ils appartiennent à Hocine.

### Contrôle d'intégrité après arbitrage

`1 004 questions / 4 957 options` — 0 question sans bonne réponse, 0 sans explication, 0 sans source nommée, 0 artefact d'apostrophe, 0 mojibake, 0 doublon d'ordre, 0 trou de numérotation, 0 option dupliquée. Restent 8 questions à réponses multiples (les « plusieurs réponses » ECF légitimes) et 5 énoncés partagés entre deux QCM (recoupements voulus).

---

## Points remontés par la production (état au 27/07, avant arbitrage)

| # | Sujet | Problème | Recommandation |
|---|---|---|---|
| 1 | Thème 56 (qcm 7), q « mesure de 1992 » | Le corrigé compte « permis à points » **FAUX** et « contrôle technique » juste. Or les deux datent de 1992 — et le permis à points est la réponse spontanée, retenue par l'ONISR. Aucune réponse unique défendable. | Reformuler et basculer sur « permis à points », ou supprimer (redondant avec le QCM 📅 Dates clés). **Non modifié.** |
| 2 | Thème 56 (qcm 7), q ordre 8 | Énoncé « 91 tués par million » chez les 18-24 ans : millésime antérieur, l'ONISR 2024 donne **97**. La bonne réponse reste valide. | Mettre l'énoncé à jour. **Non modifié.** |
| 3 | Thème 04 (qcm 8), q4 « aires de repos » | **Deux** options marquées correctes (10 km ET 5 km) → question impossible à réussir. Sources publiques : 15-25 km. | Décocher « 5 km », ou basculer sur « 20 km ». **Non modifié** (corrigé ECF fait foi). |
| 4 | Distance du triangle de présignalisation | SRRR enseigne « 30 m » comme règle ; **R416-19 ne fixe aucune distance**. | Ajouter une question distincte si ECF enseigne les 30 m, en la présentant comme une recommandation. |
| 5 | Sirène « 2 tons / 3 tons » | Distinction enseignée (Codes Rousseau) mais absente des articles vérifiés (relève d'un arrêté non indexé par l'API). Écartée. | Fournir la référence de l'arrêté pour l'intégrer. |
| 6 | Typologie « risque catharsis / prestance / stimulation » (thèmes 39-40) | Très présente dans SRRR, aucune source réglementaire, et contraire à la consigne « zéro jargon ». Écartée. | À réintégrer si c'est attendu à l'examen ECF. |
| 7 | Multiplicateurs de risque alcool/cannabis | SRRR annonce ×18, ×44, ×29 ; l'étude SAM donne ×8,5 et ×14. Contradiction non arbitrable. Aucune question ne repose dessus. | Trancher avec le formateur. |
| 8 | Statistiques « conduite de nuit » et « poids lourds » | SRRR avance 46 % des décès la nuit, 399 tués en PL, etc. Non recoupables dans l'ONISR 2024. Questions posées en formulation qualitative. | Valider les chiffres si une question chiffrée est souhaitée. |
| 9 | Acuité visuelle (6/10 pour l'œil valide) | Provient de l'arrêté du 28 mars 2022 relayé par sources officielles, non confirmé en source primaire. | Verrouiller avec le Codes Rousseau Tome A. |
| 10 | Amende « conduite sans correction visuelle » | SRRR annonce 135 € + 3 points ; **aucun article citable trouvé**. Question non produite. | Fournir la référence pour l'ajouter. |
| 11 | Fichier `qcm_theme_22.md` | Écrasé par la production (il n'était pas suivi par git). Contenu conservé dans `qcm_theme_22.html` (16 q, aussi dans `ecsr-qcm/` et sur GitHub Pages). | Régénérer le markdown depuis le HTML si voulu. |
| 12 | Articles en abrogation différée | `L224-1`, `L234-4`, `L235-2`, `L324-2` (dateFin 01/01/2029), `R417-11`, `L221-2` : **en vigueur aujourd'hui**, recodification à venir. | Revoir les fiches avant 2029. |
| 13 | Cosmétique qcm 3 (thème 41) | Les 10 questions ECF ont `section = NULL` et « Je ne sais pas » sans point, contrairement aux ajouts. | Vérifier l'affichage dans l'app. |
| 14 | **Doublons entre QCM** (confirmés en base après normalisation des apostrophes) | qcm **12:16-19 = 14:16-19** → 4 questions sur les feux affectées à la fois au thème 8 et au thème 9 (erreur d'import ECF). Préexistant : **1:9 = 2:9** (boîte de vitesses). Volontaires : 13:13=20:38, 13:14=20:40, 19:7=42:1, 20:52=28:9 (recoupements transversal ↔ thème, utiles en révision espacée). | Supprimer les 4 doublons du thème 8 ou du thème 9. Les recoupements transversaux peuvent rester. |
| 15 | **`ressources/REMC_texte_complet.md` était trompeur** | Il présentait les compétences du *programme de formation B* comme « les 4 compétences du REMC ». **CORRIGÉ le 27/07** : les 4 compétences globales de l'arrêté sont ajoutées et les deux nomenclatures distinguées. | ✅ Fait. C'est ce fichier qui aurait fait rater la question ECF sur la compétence 1. |
| 16 | Panneau **AB7** dans un énoncé (qcm 12) | « Giratoire identifié par le panneau AB7 » : l'AB7 signale la **fin de route prioritaire**, le giratoire c'est l'**AB25**. La bonne réponse reste juste sur le fond. | Corriger le code du panneau dans l'énoncé. |
| 17 | « Longueur de la bande d'arrêt d'urgence = 39 m » (qcm 13) | Grandeur physiquement inadéquate : une BAU n'a pas de longueur (elle court sur toute la section), c'est sa **largeur** qui est normalisée (~3 m). Le 39 renvoie à une valeur de marquage. | Reformuler l'énoncé. |
| 18 | « La couleur rouge existe en marquage au sol ? → Oui » (qcm 13) | La nomenclature officielle des marques sur chaussée retient **blanc, jaune, bleu**. Le rouge existe en voirie comme revêtement coloré de renforcement — défendable, mais pas au même titre. | Confirmer avec le Tome A. |
| 19 | Sanction BAU (qcm 8, id 92) | L'énoncé dit « hors cas de nécessité » (vocabulaire de l'**arrêt/stationnement**, R421-7 = 35 €) mais le corrigé applique le barème de la **circulation** sur la BAU (135 € + 3 points). Deux infractions mélangées. | Reformuler en « circuler sur la bande d'arrêt d'urgence ». |
| 20 | « Croisement à l'indonésienne » (qcm 10) | Terme introuvable dans le Code de la route et l'IISR. Le principe testé reste défendable. | Confirmer le vocabulaire auprès d'ECF. |
| 21 | Cartouches de couleur (qcm 4, id 51) | Le jaune est bien utilisé, mais les sources divergent sur la catégorie de route à laquelle il correspond. L'explication n'attribue donc pas la couleur. | Trancher avec l'IISR 5e partie. |
| 22 | Statistiques ECF non recoupables | 150 décès/an aux feux, 10 000 accidents aux intersections, 30 000 intersections à feux, 788 radars, « cinq fois plus sûres » (ASFA), « +20 % » sans année. Les explications les attribuent honnêtement au support ECF. | Recouper si tu veux les verrouiller. |
| 23 | Corrigés du QCM formateur (qcm 1) | Régime moteur au démarrage : corrigé « 2000 tr/min » alors que 1500 est plus couramment enseigné. « Tirer/pousser le volant » : énoncé qui exploite une ambiguïté du verbe. Sigles CIA/VIF non développés. | Confirmer avec Hocine. |

## Erreurs SRRR relevées et corrigées (bilan consolidé)

Au-delà du tableau plus haut, la production en masse a confirmé que **SRRR est peu fiable sur le pénal, les sanctions et les statistiques** :
- **Feux** : 68 € annoncés partout, alors que l'**usage** fautif relève de la 4e classe (135 €) et que rouler sans éclairage la nuit coûte 135 € + 4 points (R416-11). Le 68 € ne concerne que l'équipement.
- **Feux de gabarit** : SRRR les dit facultatifs, R313-10 les rend obligatoires dès 2,10 m de large.
- **Alcool** : « 2 ans / 4 500 € » pour le délit → **3 ans / 9 000 €** (L234-1) ; « suspension 3 ans » → **5 ans** (L234-2) ; récidive → **6 ans / 18 000 €** (avec 132-10 C. pénal).
- **Homicide/blessures routières** : structure entièrement renouvelée (221-18 et **221-19** C. pénal) — les supports parlant d'« homicide involontaire aggravé » sont à réécrire.
- **L5e au permis B** : SRRR oublie la condition des **21 ans** (R221-8 III).
- **Amende du piéton** : 35 € annoncés, forfait réel **4 €** (R49 CPP).
- **Priorité au bus quittant l'arrêt** : 135 € annoncés, en réalité 2e classe **35 €** sans point (R412-11).
- **Convoyeurs de fonds** : présentés comme prioritaires, or seuls les transports de la **Banque de France** le sont (R311-1).
- **Visites médicales des seniors** et **éthylotest obligatoire en probatoire** : deux affirmations **sans aucune base légale**.
- **Contrôle visuel du permis tous les 5 ans** : faux pour le permis B, délivré **sans visite médicale** (R221-10).
- **Enfant à l'arrière** : attribué à R412-2, c'est **R412-3**, avec 3 exceptions.
- **Portée des feux** : 50/150 m annoncés, le code dit **30 m** (croisement, R313-3) et **100 m** (route, R313-2).
- **Loi Montagne** : l'article est **D314-8** (et non R314-1-1) ; l'obligation est satisfaite par des pneus hiver **ou la seule détention de chaînes**.
- **Homéostasie du risque** : l'auteur est **Gerald J. S. Wilde** (et non « Gérard »).
- **Résistance de l'air** : croissance **quadratique et continue**, pas « exponentielle à partir de 120 km/h ».
- **Constat non transmis** : SRRR affirme une « présomption automatique de responsabilité » — **faux**, la déchéance suppose que l'assureur prouve un préjudice (L113-2 C. assurances).
- **Contradiction interne SRRR** : la part de la vitesse chez les 18-24 ans est donnée à 34 % dans une fiche et 41 % dans une autre.

## Points tranchés par les sources officielles (28/07, consigne « ONISR, Légifrance et tout site officiel font foi »)

| # | Sujet | Verdict |
|---|---|---|
| 5 | Sirène **2 tons / 3 tons** | **CONFIRMÉ, la distinction est réglementaire.** `R313-34` (en vigueur, API PISTE) : les véhicules d'intérêt général **prioritaires** peuvent recevoir des « avertisseurs spéciaux » (2 tons), ceux bénéficiant de **facilités de passage** des « timbres spéciaux » (3 tons), engins de service hivernal exceptés. Les caractéristiques sont fixées par l'**arrêté du 3 juillet 1974** modifié (dernière modification : arrêté du 27 août 2015). À rapprocher de `R313-27` : feux tournants ou rampe pour les prioritaires, feux à éclats sur autorisation préfectorale pour les facilités de passage. **Intégrable.** |
| 7 | Multiplicateurs de risque alcool / cannabis | **SRRR AVAIT RAISON, ET MOI TORT.** Je comparais ses chiffres à l'étude SAM de 2005 (cannabis ×1,8, alcool ×8,5, cumul ×14) ; SRRR citait en fait **ActuSAM 2016**, publiée par l'ONISR : cannabis **×1,65**, alcool **×17,8** en moyenne (de ×6,4 entre 0,5 et 0,8 g/L à **×44,4** au-delà de 2 g/L), cumul alcool + cannabis **×29**. Ce sont les chiffres officiels les plus récents. **À utiliser, en citant ActuSAM 2016.** |
| 8 | Statistiques poids lourds | **CHIFFRE SRRR NON RETROUVÉ, vrais chiffres ONISR 2024 disponibles** : **752 tués** dans un accident impliquant un VU, PL, bus ou car (**24 %** de la mortalité), dont seulement **157 occupants** de ces véhicules, et **30 occupants de PL** tués. Les « 399 tués en PL » de SRRR ne correspondent à aucune ligne du bilan. |
| 8 bis | Statistiques conduite de nuit | **NON CONFIRMÉ.** Le « 46 % des tués la nuit pour 10 % du trafic » circule partout, mais la source la mieux placée dans les résultats est… SRRR lui-même, et je n'ai pas pu le retrouver dans une publication ONISR lisible. L'ordre de grandeur (la nuit tue hors de proportion avec son trafic) est certain, la valeur exacte non. **Nos questions restent qualitatives — c'était le bon choix.** |
| 9 | Acuité visuelle **6/10** | **CONFIRMÉ, mais c'est le cas de l'œil unique.** Arrêté du 28 mars 2022, §2.1.1-2.1.2, groupe léger : acuité **binoculaire ≥ 5/10** (avec correction) et champ visuel horizontal ≥ 120°. Si un œil est à **0 ou moins de 1/10**, l'autre doit atteindre **6/10**. Le 6/10 n'est donc pas le seuil général : ne pas confondre les deux. |
| 21 | Cartouches de couleur | **TRANCHÉ : le jaune correspond à la route départementale.** Codes de route portés par le cartouche : E (européenne), A (autoroute), N (nationale), D (départementale), C (communale), R (rurale), F (forestière), avec un fond rouge pour nationale et autoroute, **jaune pour départementale**, blanc pour communale et rurale, vert pour européenne et forestière. Source : IISR 5e partie (signalisation d'indication, de service et de repérage), publiée par le Cerema. |
| 22 | Statistiques ECF | **Toujours non recoupables** (150 décès/an aux feux, 10 000 accidents aux intersections, 30 000 intersections à feux, 788 radars, « cinq fois plus sûres »). Les explications continuent de les attribuer honnêtement au support ECF. |

## Journal

- **2026-07-29** — **PASSE ANTI-LONGUEUR TERMINÉE, IMPORT ECF INCLUS.** Sur décision de l'utilisateur, les **50 questions ECF** dont la bonne réponse dépassait de 10 caractères ou plus le plus long de ses leurres ont été traitées à leur tour, par 3 sous-agents et sous la même contrainte vérifiable (`update qcm_options … and is_correct = false`, énoncés et corrigés ECF intouchables). Particularité : leurs options montent à **183 caractères**, la cible de longueur était donc celle de chaque bonne réponse, sans plafond fixe. **Bilan mesuré sur les 995 questions à réponse unique :**

  | Périmètre | Bonne réponse la plus longue | Écart visible (≥ 10 car.) |
  |---|---|---|
  | Import ECF | 39,3 % → **21,2 %** | 50 → **0** |
  | Production | 35,8 % → **28,3 %** | 61 → **0** |
  | **Total** | **36,6 % → 26,5 %** | **111 → 0** |

  Le hasard pur donnerait ~20 % avec 5 options : l'import ECF est désormais **au niveau du hasard**, et il ne reste **aucun** écart perceptible dans toute la base. Les trois lots ont été recontrôlés indépendamment (17/17, 17/17, 16/16) et les **empreintes de longueur des bonnes réponses sont identiques à celles relevées avant lancement** — aucun corrigé touché.

  Corrigé au passage : la question 461 (« Comment un conducteur sait-il qu'il a perdu des points ? ») dont **l'énoncé ne correspondait pas à ses options**, toutes centrées sur le *moment* où le retrait devient effectif → énoncé réaligné.

  ⚠️ **Preuve du danger de l'édition concurrente** : la question 308 portait des identifiants d'options **recréés** (5034-5038), signe d'un réenregistrement depuis l'éditeur qui avait **écrasé la correction de l'agent** — elle a dû être rejouée. `saveQcmQuestion` supprime et réinsère les options : toute édition en parallèle d'un traitement de masse écrase silencieusement le travail en cours.

- **2026-07-28** — **PASSE ANTI-INDICES (signalements utilisateur pendant sa relecture).** Trois défauts de conception repérés par l'utilisateur, tous vérifiés et corrigés. (1) **« La réponse la plus longue est souvent la bonne »** — mesuré : **36,6 %** des questions à réponse unique avaient la bonne réponse comme option strictement la plus longue, contre ~20 % attendus par hasard. Le biais venait de moi autant que de l'import ECF (35,8 % contre 39,3 %) : mes bonnes réponses étaient complètes et nuancées, mes leurres courts et péremptoires. Les **61 questions de ma production** dont l'écart dépassait 10 caractères ont été retraitées par 3 sous-agents, avec une contrainte vérifiable — **modifier uniquement `qcm_options.texte` sur des lignes `is_correct = false`**, chaque requête portant le garde-fou `and is_correct = false`. Résultat : cas perceptibles de ma production **61 → 1**, taux global **36,6 % → 31,6 %**. Les **50 cas de l'import ECF sont laissés en l'état** (formulation de référence pour l'examen) — à traiter sur décision. (2) **Options renvoyant à une position** — 3 questions (ids 48, 66, 150) portaient « Tous les cas précédemment cités », « Toutes les réponses ci-dessus », « Si les deux propositions précédemment citées sont réunies », **et c'était chaque fois la bonne réponse** : le mélange des options les rendait absurdes. La 48 a reçu une bonne réponse autoportante ; les **66 et 150 sont passées en réponses multiples** (3 et 2 bonnes réponses), ce qui rend le sens exact — pour la 150, l'élève doit cocher les **deux** conditions cumulatives, et le score exigeant l'ensemble exact, en cocher une seule est faux. (3) **Questions doubles** — 8 énoncés posaient deux questions ; celui signalé par l'utilisateur (double file **et** place handicapée) a été **scindé en deux questions** (35 €, R417-10 / 135 €, R417-11), et 4 autres recentrés sur une seule information. Trouvé au passage : **5 questions ECF où la bonne réponse se distinguait par le seul point final** — ponctuation harmonisée. Contrôle final : **1 005 questions, 4 963 options**, 0 option positionnelle, 0 indice de ponctuation, 0 question sans bonne réponse, 10 questions à réponses multiples toutes signalées dans leur énoncé. ⚠️ **L'utilisateur éditait la base en même temps** (question 303 réenregistrée, option « 49 mètres » ajoutée à la 155) : mon empreinte de contrôle a bougé pour cette raison, et les 30 bonnes réponses que j'avais relevées avant le lancement sont vérifiées identiques au caractère près.
- **2026-07-28** — **VRAIE CAUSE DU BUG DE L'ÉDITEUR TROUVÉE** (`086ba29` + cache-bust `01c36c5`, token `20260728c`, en prod, live vérifié). L'utilisateur a signalé que le bug persistait : la correction du 27/07 reposait sur une mauvaise hypothèse. Cause réelle = **conflit de z-index**. Le formulaire de question (`.modal-backdrop`, z-index 200) s'ouvrait **derrière** l'écran d'édition (`.qcm-overlay`, z-index 1000) : « ça ouvre la question derrière » était à prendre **au sens propre**. L'overlay restant au-dessus, tout clic l'atteignait et fermait l'écran d'édition — le formulaire était en fait **inutilisable**. Un seul défaut expliquait les deux symptômes. Corrigé : classe `qcm-form-backdrop` à 1100 pour ce seul formulaire, plus de fermeture au clic à côté (croix ou Échap), et toast remonté de 300 à 2000 (sous l'overlay, les confirmations étaient invisibles). Leçon : le banc d'essai ne peut pas observer un empilement (viewport 0×0) — il a fallu une page autonome chargeant le vrai CSS pour mesurer les z-index.
- **2026-07-28** — **ARBITRAGE DES 23 POINTS.** L'utilisateur délègue l'arbitrage (« je te laisse arbitrer avec tes recommandations »), avec deux redressements : les **30 m du triangle de présignalisation** sont bien enseignés comme du code (avec le placement avant un virage ou un sommet de côte), et le **vocabulaire de la psychologie du risque** doit être conservé — « parfois c'est indispensable, surtout quand ça touche de la psychologie ou l'anatomie ». Il confirme aussi que la question sur la BAU porte bien sur la **longueur d'une bande du marquage** : ma réserve était infondée. Appliqué : 11 corrections de corrigés ou d'énoncés, suppression des 4 doublons d'import du thème 8, **+10 questions** (2 triangle, 6 mobiles de la prise de risque, 2 familles de facteurs du sur-risque masculin), harmonisation de l'option d'abstention. Base à **1 004 questions / 4 957 options**, intégrité complète revérifiée. **Publication volontairement différée** jusqu'à sa relecture de validation. Le point #13 s'est révélé un non-sujet après lecture du code de l'app (`section = NULL` n'affiche rien, et concerne les 12 blocs ECF).
- **2026-07-27** — **PASSE EXPLICATIONS : les 177 questions ECF et seeds formateur ont reçu leur explication sourcée**, par 4 sous-agents en parallèle (intersections 8-9 ; référentiels REMC/GDE ; autoroute-giratoires-croisements-voies réservées-signalisation verticale ; HVE-mécanique-politiques-intempéries-signalisation horizontale). Consigne centrale : **ne toucher qu'au champ `explication`**, jamais aux énoncés, options ou corrigés (la formulation ECF est la référence pour l'examen) ; tout corrigé douteux devait être **signalé, pas réparé**. Résultat vérifié : **0 question sans explication dans toute la base, 0 sans source nommée, 0 artefact**. Longueur moyenne des explications : 320 à 390 caractères. Bilan de la passe : 10 corrigés ou énoncés problématiques identifiés (voir tableau des points à arbitrer, lignes 14 à 23), 11 questions à image repérées comme non finissables sans l'illustration, et **le fichier `REMC_texte_complet.md` du repo corrigé** — il confondait deux nomenclatures et aurait fait rater la question ECF sur la compétence 1.
- **2026-07-27** — **VAGUE FINALE : les 36 thèmes restants produits en parallèle par 9 sous-agents** (22-25, 26-27, 28-32, 33-36, 37-40, 41-43, 44-49, 50-52, 53-57), chacun avec le même cahier des charges (règle d'or Légifrance, zéro jargon, une option = une idée, options ≤ 70 caractères, explication sourcée obligatoire, mode ajout strict sur les QCM ECF existants). **+502 questions**. Chaque bloc recontrôlé indépendamment en SQL par le fil principal (intégrité, sources, longueurs, apostrophes, position de la bonne réponse). Corrections apportées au passage : ma question du thème 19 sur la durée de suspension judiciaire (j'avais écrit 3 ans en citant L234-1/L235-1 qui prévoient 5 ans → énoncé recentré sur les contraventions), ajout des « blessures routières » (221-19 C. pénal) et du doublement en récidive au QCM ⚖️ Sanctions, harmonisation d'une explication du thème 36. Bilan : **998 questions, 4 916 options, 57/57 thèmes couverts**.
- **2026-07-27** — Lots 3+ vague D (Permis et documents) : **catégorie PERMIS (17-21) TERMINÉE**. 4 QCM neufs (17 → 13 q, 18 → 13 q, 19 → 12 q, 21 → 12 q = 50 questions) + thème 20 fiabilisé. 17 articles vérifiés PISTE (L223-2/3, L224-1/2/7/8, R221-4/5/6/8/10, R211-3/5, R233-1, R322-4 — dump `lot3d_articles.txt`). Trouvailles : **L223-2 III** — en cas d'infractions simultanées, le cumul est plafonné aux **deux tiers** du capital, soit 8 points sur 12 ; **R221-5** — le permis B est désormais accessible à **17 ans** ; **R233-1** — le certificat d'immatriculation de la remorque n'est exigé qu'au-delà de **500 kg**, et l'accompagnateur en conduite accompagnée doit avoir son permis depuis **5 ans** ; **L224-2** — la rétention dure 72 h, portée à 120 h après vérifications alcool/stupéfiants ; **L224-8** — suspension préfectorale ≤ 6 mois, portée à 1 an pour les faits graves. Piège d'échappement corrigé avant insertion : les apostrophes étaient pré-doublées dans le fichier de données, ce qui aurait affiché `l''obtention` à l'élève → normalisation ajoutée au générateur.
- **2026-07-27** — **Correctif éditeur QCM déployé en prod** (`af5a4be` + cache-bust `81fd4a8`, token `20260727b`) : (1) « Éditer » ouvrait la question précédente — les actions étaient rendues en bas de carte, donc visuellement collées à l'en-tête de la question suivante, et **aucun CSS n'existait pour l'éditeur** (polish jamais fait) ; actions déplacées dans l'en-tête + 92 lignes de CSS (cartes bordées, numéro en pastille) ; (2) un clic à côté fermait le formulaire et perdait la saisie — le clic sur le fond est désormais ignoré, Annuler/Échap ne demandent confirmation que si le formulaire a été modifié. Vérifié sur banc (correspondance carte↔question, 6 scénarios de fermeture, CSS calculé).
- **2026-07-27** — **Passe anti-jargon** (demande utilisateur) : 5 questions reformulées (th12 q11 « en exploitation », th12 q12 « faisant saillie », th13 q1 « opposable », th16 q11 « hydroplanage ») et 2 réponses composées scindées (th12 q13). 5 options trop longues resserrées (th3 q14 recentrée sur un seul marquage, th7 q11, th11 q14, th15 q2, th15 q11). Intégrité revérifiée : 0 question sans bonne réponse, 0 option dupliquée, 446 q / 2 155 options. ⚠️ Les `.md` de trace antérieurs au 27/07 ne reflètent pas ces reformulations — **la base est la source de vérité**.
- **2026-07-26** — Lots 3+ vague C (Vitesse) : **catégorie VITESSE (12-16) TERMINÉE**, 5 QCM neufs créés et remplis (65 questions : 12 → 15 q, 13 → 12 q, 14 → 12 q, 15 → 13 q, 16 → 13 q). 17 articles vérifiés PISTE (R413-1/3/4/6/7/8/9/10/11/12/13/15/18/19, R411-25, R412-6 — dump `lot3c_articles.txt` ; seul R413-16 a échoué sur timeout réseau, non utilisé). Trouvailles : **R411-25** fournit la base légale de la hiérarchie (les feux prévalent sur les panneaux de priorité) et de l'inopposabilité d'une mesure non signalée ; **R413-15** avertisseur de radars = 5e classe + 6 points (la simple détention suffit) ; **R413-6** exempte des vitesses novices celui qui a récupéré son permis sans repasser l'épreuve pratique ; **R413-19** vitesse anormalement réduite = 2e classe. Contrôle : 65/65 questions avec explication sourcée, 0 anomalie. **État global : 446 questions, 2 155 options, 21 thèmes numérotés pourvus sur 57.**

- **2026-07-26** — Lots 3+ vague B (Réglementation) : **catégorie Réglementation TERMINÉE**. Les 8 thèmes déjà pourvus enrichis (+44 questions : 01 +6, 02 +6, 04 +6, 05 +6, 07 +6, 08 +4, 09 +5, 11 +5), existant intégralement conservé (ajout à la suite, `ordre` = max+n). 16 articles supplémentaires vérifiés PISTE (R413-2, R413-5, R421-1/2/6/7, R414-1/2/3, R415-5/7/10, R412-31, R412-7, R311-1, R412-9 — dump `lot3b_articles.txt`). Nouveautés juridiques intégrées : R412-9 autorise désormais de **serrer à gauche dans un giratoire multi-voies** pour une sortie à gauche ; feu jaune fixe = **2e classe (35 €)** contre 4e classe + 4 points pour le rouge ; piéton sur autoroute = **1re classe (11 €)**. Contrôle d'intégrité complet passé (0 question non jouable, 0 doublon) ; une anomalie de l'import ECF signalée ci-dessus.
- **2026-07-26** — Lots 3+ vague A (Réglementation) : les 3 thèmes VIDES produits — **03 Stationnement (14 q, qcm 17), 06 Dépassements (15 q, qcm 22, coquille créée), 10 Passages à niveau (13 q, qcm 21, coquille créée)**. 20 articles supplémentaires vérifiés via PISTE (R110-2, R417-1/2/4/7/13, R416-19, R414-5 à R414-16, R422-3 — dump `lot3a_articles.txt`). Deux nouvelles erreurs SRRR corrigées (portière, stats PAN — voir tableau). Reste dans la catégorie : enrichir les 8 thèmes déjà pourvus (01, 02, 04, 05, 07, 08, 09, 11).

- **2026-07-26** — Lot 2 : QCM ⚖️ Sanctions (60 q, 12 sections) rédigé et inséré. **39 articles tirés de l'API Légifrance PISTE le jour même** (Code de la route, Code pénal, Code de procédure pénale — dump conservé en annexe de `qcm_sanctions.md` avec les URLs). Découvertes d'actualité juridique intégrées : le grand excès ≥ 50 km/h est désormais un **délit** (L413-1, 3 mois/3 750 €, AF 300 €, `R413-14-1` n'existe plus) ; alcool ≥ 0,8 g/L et stupéfiants durcis à **3 ans/9 000 €** (les supports 2025 disent souvent encore 2 ans/4 500 €) ; l'**homicide routier** créé (221-18 C. pénal, 7 ans/100 000 €, 10 ans/150 000 € si ≥ 2 circonstances) ; alcool+stups = retrait des **3/4 des points** (dérogation unique). ⚠️ À re-vérifier lors des futures mises à jour : `R417-11`, `L221-2`, `L324-2` sont en **abrogation différée** (recodification à venir — toujours en vigueur ce jour).

- **2026-07-26** — Lot 0 : 3 thèmes transversaux créés (ids 115/116/117), 3 coquilles QCM (ids 18/19/20), mapping complet établi. API Légifrance PISTE activée et client réparé (voir CLAUDE.md).
- **2026-07-26** — Lot A : entraînement adaptatif déployé en prod (app, commit `3926055`, token `20260726b`) — l'entraînement fait passer les questions échouées d'abord (tentatives entraînement + examen, dernier résultat prioritaire), bouton « Revoir mes erreurs » dans la fiche QCM, examen inchangé. Vérifié sur banc d'essai (3 scénarios déterministes).
- **2026-07-26** — Lot 1 : QCM 📅 Dates (26 q) et 📊 Stats (22 q) rédigés, vérifiés et insérés (published=false). Sources primaires : ONISR « Les grandes dates de la sécurité routière » (annexe bilan, PDF officiel), Bilan définitif 2024 ONISR (3 193 tués métropole, facteurs vitesse 29 %/alcool 22 %/inattention 14 %/stups 13 %), securite-routiere.gouv.fr. Chaque explication porte sa source. Générateur réutilisable : `scratchpad/gen_lot1.py` + `lot1_data.py` (format données → SQL idempotent + markdown de trace). Erreur SRRR « radars 2004 » corrigée (27 oct. 2003, RN20, confirmé multi-sources). Piège relevé au passage : le QCM existant du thème 56 (id 7) a une question ambiguë (« mesure de 1992 » : contrôle technique ET permis à points sont tous deux corrects) — à fiabiliser lors de l'enrichissement du thème 56.
