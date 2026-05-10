# 🎓 Speech formateur & Déroulé pédagogique — S1-S2

## PPNI 2026 · Cybersécurité & GitHub · 11 → 22 mai 2026

> **Comment lire ce document ?**
> Les blocs `💬 FORMATEUR` sont les paroles à prononcer (adaptables selon le groupe).
> Les blocs `📌 TECHNIQUE` expliquent les concepts avec définitions + analogies.
> Les blocs `⚙️ ATELIER` décrivent les manipulations à faire faire aux stagiaires.
> Les **timings** sont indicatifs — s'adapter au rythme du groupe.

---

## Avant de commencer — Check-list formateur

- [ ] Salle équipée : 1 PC par stagiaire, accès Internet, vidéoprojecteur
- [ ] Comptes créés à l'avance si accès Internet limité : GitHub, Bitwarden
- [ ] Fiches imprimées : fiche-phishing + fiche-git + fiche-securite
- [ ] Dossier Exercices accessible : URL courte ou QR code vers `exercices/index.html`
- [ ] Bitwarden disponible sur les postes (ou navigateur en ligne)
- [ ] GitHub Desktop installé ou web-only selon les postes

---

# ═══════════════════════════════════════════

# S1 — SEMAINE 1 · 11 mai 2026

# ═══════════════════════════════════════════

---

## 🟢 Lundi 11 mai — 09h00 → 17h00 (7h de formation)

---

### ⏰ 09h00 – 09h20 · Installation & ouverture

💬 **FORMATEUR — Accueil (prononcer à voix haute) :**

> "Bonjour à tous. Bienvenue dans le PPNI 2026. Je suis [prénom], votre formateur pour les 20 prochaines semaines.
>
> Avant de commencer, quelques mots sur l'ambiance qu'on va essayer de créer ensemble : ici, il n'y a pas de questions stupides. Si quelque chose n'est pas clair, vous levez la main ou vous me faites signe. On avance ensemble, pas les uns contre les autres.
>
> Ce programme dure 5 mois. Certains d'entre vous ont peut-être une relation compliquée avec l'informatique — ça tombe bien, c'est exactement pour ça qu'on est là. On repart de zéro et on construit quelque chose de solide."

---

### ⏰ 09h20 – 09h50 · Quiz de positionnement individuel

⚙️ **ATELIER — Distribuer le quiz papier (ou ouvrir le formulaire en ligne) :**

10 questions simples. Exemples :

1. Avez-vous le même mot de passe sur plusieurs sites ? (oui / non / je sais pas)
2. Avez-vous déjà reçu un e-mail qui vous semblait suspect ?
3. Savez-vous ce qu'est un "commit" en informatique ?
4. Avez-vous un compte GitHub ?
5. Que faites-vous quand votre logiciel vous demande une mise à jour ?

💬 **FORMATEUR :**

> "Ce quiz ne donne pas de notes. Il me sert juste à savoir où vous en êtes aujourd'hui pour qu'on adapte le rythme. Répondez honnêtement — y compris 'je ne sais pas', c'est la meilleure réponse si c'est la vraie."

---

### ⏰ 09h50 – 10h20 · Tour de table

💬 **FORMATEUR :**

> "Chacun son tour : prénom, et une phrase sur pourquoi vous êtes là. Pas de pression — une phrase suffit."

Prendre note des niveaux déclarés, des peurs exprimées, des attentes.

💬 **FORMATEUR (après le tour de table) :**

> "Merci pour votre honnêteté. Ce que j'entends souvent : 'je ne suis pas fait pour l'informatique'. Je vais vous dire un truc : personne n'est naturellement doué en informatique. On apprend, on pratique, on rate, on recommence. C'est tout. Vous allez rater des choses ici — c'est prévu dans le programme."

---

### ⏰ 10h20 – 10h30 · Présentation du parcours

💬 **FORMATEUR :**

> "Voici les 5 mois qui viennent. Pas besoin de tout retenir maintenant — le programme est affiché et disponible en ligne. Retenez juste ça :
>
> - Ces 2 premières semaines : les fondations. Sécurité + GitHub.
> - Ensuite selon votre axe : développement web OU support numérique.
> - À la fin : un portfolio, c'est-à-dire des preuves concrètes de ce que vous savez faire.
>
> Une règle dans ce groupe : la bienveillance. Si quelqu'un galère, on l'aide — on ne se moque pas. Le niveau de chacun est différent, et c'est une force."

---

### ⏰ 10h30 – 12h30 · Cybersécurité : menaces, mots de passe, MFA

---

#### 📌 TECHNIQUE — Les bases de la cybersécurité

Avant de lancer l'atelier, expliquer ces 4 notions avec leurs analogies :

---

**🔑 VULNÉRABILITÉ**

> **Définition :** Un défaut, une faiblesse dans un système ou un comportement, qui peut être exploitée pour causer un dommage.

💬 **Analogie :**

> "Votre porte d'entrée a une serrure. Mais si vous laissez la clé sous le paillasson, c'est une vulnérabilité. La porte est solide, mais le comportement crée une faille."

En informatique : un mot de passe trop simple, un logiciel non mis à jour, un Wi-Fi public utilisé sans protection = autant de vulnérabilités.

---

**⚠️ MENACE**

> **Définition :** Un événement potentiel qui pourrait causer un dommage en exploitant une vulnérabilité.

💬 **Analogie :**

> "Un cambrioleur qui rôde dans votre quartier est une menace. Il n'a pas encore agi — mais il existe. En informatique, les menaces sont permanentes : virus, hackers, arnaques par e-mail, ransomwares."

Les menaces les plus courantes en 2026 :

- **Phishing** _(prononcé "fishing")_ : e-mail frauduleux qui se fait passer pour une vraie entreprise
- **Ransomware** _(prononcé "ransom-wère")_ : logiciel malveillant qui chiffre vos fichiers et demande une rançon
- **Brute force** : robot qui teste des milliers de mots de passe à la seconde jusqu'à trouver le bon
- **Social engineering** (ingénierie sociale) : manipulation psychologique pour vous faire révéler un mot de passe

---

**📊 RISQUE**

> **Définition :** La combinaison de la probabilité qu'une menace se réalise ET de l'impact que ça aurait.

💬 **Analogie :**

> "Le risque d'être renversé par une voiture en traversant au feu rouge = probabilité (forte) × impact (grave) = risque élevé. Le risque d'être touché par la foudre en intérieur = probabilité très faible = risque faible, même si l'impact serait grave."

En sécurité numérique : utiliser "123456" comme mot de passe est un risque **très élevé** car la probabilité d'être piraté est forte (ce mot de passe est testé en premier par tous les robots) ET l'impact peut être grave (accès à vos comptes, données volées).

---

**🚪 VECTEUR D'ATTAQUE**

> **Définition :** Le chemin emprunté par un attaquant pour atteindre sa cible.

💬 **Analogie :**

> "Un cambrioleur peut entrer par la porte, la fenêtre, le garage, ou se faire passer pour un plombier. Chaque entrée possible est un vecteur. En informatique, les vecteurs les plus courants sont : un e-mail piégé, un lien cliqué, une clé USB trouvée, un faux site web."

---

### ⏰ 10h30 – 11h25 · Atelier — Le mot de passe parfait

⚙️ **ATELIER 1 — Tester et créer un mot de passe fort (55 min)**

**Étape 1 — Tester son mot de passe actuel (10 min)**

> Ouvrir l'exercice : `exercices/password-checker.html`
>
> Chaque stagiaire teste un de ses vrais mots de passe (celui qu'il utilise souvent).

💬 **FORMATEUR :**

> "Ce testeur fonctionne entièrement sur votre ordinateur. Rien n'est envoyé sur Internet. Vous pouvez tester votre vrai mot de passe en toute sécurité.
>
> Regardez le résultat. Est-ce que certains d'entre vous ont une barre rouge ou orange ?"

_(Attendre les réactions — ne pas forcer le partage, mais laisser s'exprimer ceux qui veulent)_

---

**Étape 2 — Comprendre ce qui fait un bon mot de passe (15 min)**

📌 **TECHNIQUE — Anatomie d'un mot de passe fort :**

| Critère      | Mauvais exemple | Bon exemple                      |
| ------------ | --------------- | -------------------------------- |
| Longueur     | `abc` (3 car.)  | `Cheval-Lune-Forêt-42` (21 car.) |
| Variété      | `password`      | `T@mP0wEr!9x`                    |
| Unicité      | Même partout    | 1 différent par site             |
| Mémorabilité | `x9Qz!#mK`      | `Cheval-Lune-Forêt-42`           |

💬 **FORMATEUR — La méthode des 4 mots aléatoires :**

> "La meilleure méthode pour créer un mot de passe fort ET mémorisable, ça s'appelle la 'passphrase' — phrase de passe.
>
> Vous prenez 4 mots qui n'ont aucun rapport entre eux. Par exemple : Cheval — Lune — Forêt — Piano. Vous les reliez par des tirets, vous ajoutez un chiffre : `Cheval-Lune-Forêt-Piano-42`.
>
> Ce mot de passe a 27 caractères. Pour le craquer par force brute, un robot devrait essayer des milliards de milliards de combinaisons. Il lui faudrait plus de 100 ans.
>
> ET vous pouvez le retenir parce que vous avez une image mentale : un cheval qui regarde la lune dans une forêt, en jouant du piano."

_(Faire générer une passphrase dans l'outil password-checker, onglet "Générer")_

---

**Étape 3 — Présenter Bitwarden (15 min)**

📌 **TECHNIQUE — Gestionnaire de mots de passe :**

> **Définition :** Un logiciel qui génère, stocke et remplit automatiquement des mots de passe complexes et uniques pour chaque site. Vous n'avez à retenir qu'un seul "mot de passe maître".

💬 **Analogie :**

> "C'est comme un trousseau de clés, mais numérique. Vous avez 1 seule clé pour ouvrir le trousseau (votre mot de passe maître), et à l'intérieur il y a une clé différente et ultra-sécurisée pour chaque serrure. Vous n'avez pas à vous souvenir de 50 mots de passe — Bitwarden s'en charge."

⚙️ **Installer Bitwarden (extension navigateur + compte gratuit) :**

1. Aller sur bitwarden.com → Créer un compte gratuit
2. Choisir un mot de passe maître FORT (utiliser la méthode des 4 mots)
3. Installer l'extension dans Chrome/Firefox
4. Tester : sauvegarder un compte existant

💬 **FORMATEUR :**

> "Bitwarden est open source — son code est public et vérifié par des milliers de personnes dans le monde. C'est l'une des solutions les plus sûres. Et c'est gratuit pour un usage individuel."

---

**Étape 4 — MFA : le 2ème verrou (15 min)**

📌 **TECHNIQUE — Authentification multi-facteurs (MFA / 2FA)**

> **Définition :** Mécanisme de sécurité qui exige **deux preuves d'identité distinctes** pour se connecter :
>
> 1. Ce que vous **savez** : votre mot de passe
> 2. Ce que vous **avez** : votre téléphone (code SMS, application d'authentification)
>    Parfois un 3ème facteur : ce que vous **êtes** (empreinte digitale, reconnaissance faciale).

💬 **Analogie :**

> "Votre banque fait déjà ça : vous avez votre carte (ce que vous avez) ET votre code PIN (ce que vous savez). Si quelqu'un vole votre carte sans le code, il ne peut pas retirer d'argent. Le MFA, c'est le même principe pour vos comptes en ligne."

> **2FA** = Two-Factor Authentication = la même chose que MFA mais avec exactement 2 facteurs.

⚙️ **Activer le MFA sur un compte :**

Option A (Google) : `myaccount.google.com` → Sécurité → Validation en deux étapes
Option B (GitHub) : github.com → Settings → Password and authentication → Two-factor authentication

💬 **FORMATEUR :**

> "Une fois activé, même si quelqu'un obtient votre mot de passe, il ne peut pas se connecter sans votre téléphone. C'est le filet de sécurité numéro 1."

---

### ⏰ 11h25 – 11h50 · Discussion collective — vos habitudes numériques

💬 **FORMATEUR :**

> "Levez la main si vous utilisez le même mot de passe sur plusieurs sites."

_(Pause — attendre les mains levées, sans pointer quelqu'un du doigt)_

> "Merci pour votre honnêteté. Regardez autour de vous — vous n'êtes pas seuls. C'est la norme, pas l'exception. C'est pour ça qu'on est là.
>
> Questions ouvertes : avez-vous déjà reçu un e-mail qui vous semblait bizarre ? Qu'est-ce que vous avez fait ?"

_(Laisser 3-4 personnes raconter leur expérience — valider, ne jamais dire "vous auriez dû savoir")_

---

### ⏰ 12h30 – 13h20 · Pause déjeuner

---

### ⏰ 13h20 – 15h00 · Phishing : reconnaître et réagir

---

#### 📌 TECHNIQUE — Le phishing

> **Définition :** Technique d'hameçonnage où un attaquant se fait passer pour une entité de confiance (banque, impôts, Amazon, DHL...) par e-mail, SMS ou téléphone pour vous pousser à révéler des informations sensibles (mot de passe, numéro de carte) ou à cliquer sur un lien malveillant.

💬 **Analogie :**

> "Le mot vient de 'fishing' — pêche. L'attaquant jette un hameçon (l'e-mail piégé) dans l'eau (Internet) et attend que quelqu'un morde. Il envoie le même e-mail à un million de personnes — si 0,1% cliquent, c'est 1000 victimes. Il n'a pas besoin que tout le monde tombe dans le piège."

**Sous-catégories importantes :**

- **Phishing** : e-mail de masse, peu personnalisé ("Cher client")
- **Spear phishing** _(prononcé "spear fishing")_ : phishing ciblé, personnalisé avec votre nom, votre entreprise, un contexte crédible — beaucoup plus dangereux
- **Smishing** : phishing par SMS
- **Vishing** : phishing par téléphone (appel vocal)

---

#### 📌 TECHNIQUE — Les 8 indices d'un e-mail phishing

Distribuer ou afficher la **fiche-phishing** :

1. **L'expéditeur** : l'adresse e-mail ressemble à l'originale mais avec une variante (`amaz0n.fr`, `impots-gouv.net`, `paypal-securite.com`)
2. **L'URL du lien** : passer la souris dessus sans cliquer — l'URL affichée ne correspond pas au domaine officiel
3. **Le ton urgent** : "votre compte sera supprimé dans 24h", "action requise immédiatement"
4. **La salutation générique** : "Cher client", "Madame/Monsieur" sans prénom
5. **Les fautes** : orthographe, grammaire approximative (signe d'automatisation)
6. **La demande anormale** : un vrai service ne vous demande jamais votre mot de passe par e-mail
7. **Le domaine inconnu dans l'URL** : `.xyz`, `.ru`, `.online`, `.click` au lieu de `.fr` ou `.com`
8. **Les pièces jointes suspectes** : `.exe`, `.zip`, `.docm` — ne jamais ouvrir sans vérifier

---

### ⏰ 13h20 – 14h10 · Quiz phishing interactif (50 min)

⚙️ **ATELIER — Quiz phishing :**

> Ouvrir : `exercices/quiz-phishing.html`

💬 **FORMATEUR (avant de lancer) :**

> "On va regarder 10 e-mails ensemble. Votre mission : décider si c'est du phishing ou si c'est légitime. Ne cherchez pas à 'bien répondre' — cherchez les indices. On va discuter après chaque réponse collective."

Mode recommandé : **vidéoprojecteur + réponse collective à main levée** avant de cliquer, puis correction avec explication.

Pour chaque question, demander :

> "Qu'est-ce qui vous a mis la puce à l'oreille ?" / "Pourquoi celui-là vous semblait légitime ?"

---

### ⏰ 14h10 – 14h40 · Atelier binôme — analyser un e-mail (30 min)

⚙️ **ATELIER — En binôme :**

Distribuer 2 e-mails imprimés par binôme (1 phishing + 1 légitime).

Consigne :

1. Lister 3 indices qui vous ont permis de les distinguer
2. Écrire en 1 phrase : "Cet e-mail est [phishing/légitime] parce que..."
3. Partager en 2 min avec le groupe

---

### ⏰ 14h40 – 15h00 · Que faire si on a cliqué ? (20 min)

📌 **TECHNIQUE — Procédure d'urgence (5 étapes) :**

1. **Ne pas paniquer** — agir vite mais sans précipitation
2. **Déconnecter d'Internet** si possible (couper le Wi-Fi) pour limiter les dommages
3. **Changer immédiatement le mot de passe** du compte ciblé (depuis un autre appareil si possible)
4. **Alerter** : employeur si compte pro, banque si données bancaires, police si arnaque financière
5. **Signaler** sur `cybermalveillance.gouv.fr` — site officiel de l'ANSSI pour obtenir de l'aide

💬 **FORMATEUR :**

> "Cybermalveillance.gouv.fr, c'est le numéro 15 du numérique. Gratuit, officiel, disponible pour les particuliers comme les professionnels. Si vous avez un doute, même des mois plus tard, allez-y."

📌 **TECHNIQUE — ANSSI :**

> **Agence Nationale de la Sécurité des Systèmes d'Information** — l'autorité française en matière de cybersécurité. Publie des alertes, des guides, des recommandations. Site : `cyber.gouv.fr`. C'est l'équivalent des pompiers, mais pour les attaques informatiques.

---

### ⏰ 15h00 – 17h00 · Découverte de GitHub

---

#### 📌 TECHNIQUE — Git vs GitHub : la distinction fondamentale

💬 **Analogie centrale à retenir :**

> **Git** c'est le logiciel de sauvegarde intelligente installé sur votre ordinateur. Il travaille en local (sur votre machine).
> **GitHub** c'est le service en ligne (le "cloud") qui héberge vos projets Git et les rend accessibles de partout.

> Autre analogie :
> "Git, c'est Microsoft Word qui enregistre l'historique de vos modifications. GitHub, c'est OneDrive qui synchronise votre document dans le cloud et le rend accessible depuis n'importe quel appareil."

---

📌 **TECHNIQUE — Vocabulaire Git essentiel (expliquer un par un avec analogies) :**

---

**📁 REPOSITORY (repo)**

> **Définition :** Un dossier de projet suivi par Git. Il contient tous vos fichiers ET l'historique complet de toutes leurs modifications depuis le début.

💬 **Analogie :**

> "Un repo, c'est comme un classeur avec mémoire. Non seulement il contient tous vos documents, mais il se souvient de chaque version de chaque document depuis le premier jour. Vous pouvez revenir en arrière à n'importe quel moment."

---

**📸 COMMIT**

> **Définition :** Un instantané (une "photo") de l'état de vos fichiers à un moment précis, accompagné d'un message qui explique ce qui a changé.

💬 **Analogie :**

> "Un commit, c'est comme une sauvegarde de jeu vidéo avec une étiquette. Vous sauvegardez à un moment clé et vous écrivez 'Avant le boss du niveau 3'. Plus tard, si le niveau 4 est impossible, vous pouvez revenir exactement à ce point. En informatique, le message du commit joue le rôle de l'étiquette."

> ⚠️ **Un bon message de commit répond à la question :** "Si je lis ça dans 6 mois, est-ce que je comprends ce qui a changé ?"
> ✅ `Ajouter section "Sources" dans le README`
> ❌ `correction` / `modification` / `aaa`

---

**📤 PUSH**

> **Définition :** Envoyer ses commits locaux (sur votre ordinateur) vers le dépôt distant (GitHub).

💬 **Analogie :**

> "Push = pousser. Vous poussez vos sauvegardes locales vers GitHub, comme vous envoyez un mail. Avant le push, votre travail n'existe que sur votre machine. Après le push, il est en ligne, sauvegardé et accessible partout."

---

**📥 PULL**

> **Définition :** Récupérer les dernières modifications depuis GitHub vers votre ordinateur local.

💬 **Analogie :**

> "Pull = tirer. Vous tirez les mises à jour depuis le cloud vers votre machine. En travail d'équipe : si votre binôme a poussé des modifications, vous faites `git pull` pour les récupérer avant de commencer à travailler."

---

**🌿 BRANCHE (branch)**

> **Définition :** Une ligne de développement parallèle et indépendante. Par défaut, vous êtes sur la branche `main`. Vous créez une branche pour tester une idée sans modifier le projet principal.

💬 **Analogie :**

> "Imaginez un arbre. Le tronc = la branche `main` (votre projet officiel, stable). Quand vous voulez tester quelque chose, vous créez une branche latérale. Vous expérimentez dessus. Si c'est bien, vous fusionnez la branche dans le tronc. Si ça ne marche pas, vous la supprimez sans avoir touché au tronc."

---

**🔀 MERGE**

> **Définition :** Fusionner les modifications d'une branche dans une autre (généralement dans `main`).

💬 **Analogie :**

> "Vous avez écrit un chapitre sur une feuille de brouillon. Il est bon. Vous le recopiez dans votre manuscrit principal. C'est un merge."

---

**📋 README.md**

> **Définition :** Le fichier de présentation d'un projet GitHub. Écrit en Markdown, il s'affiche automatiquement sur la page d'accueil du repository. C'est la carte de visite du projet.

> **Markdown** = un langage de mise en forme simple. `# Titre`, `**gras**`, `- liste`. Pas de clic, juste du texte avec des symboles. Le navigateur l'affiche joliment.

💬 **Analogie :**

> "Le README, c'est la couverture et la 4ème de couverture d'un livre. Quand quelqu'un arrive sur votre repo GitHub, la première chose qu'il voit c'est votre README. C'est votre présentation professionnelle."

---

**🏠 LOCAL vs REMOTE**

> **Local** = votre ordinateur. Vos fichiers, votre historique Git, tout est sur votre disque dur.
> **Remote** = le serveur distant. GitHub. Accessible depuis partout, sauvegardé en ligne.

💬 **Analogie :**

> "Local = le brouillon dans votre tiroir. Remote = le document envoyé par mail et stocké dans le cloud. Les deux existent en parallèle. Le `push` synchronise le tiroir vers le cloud."

---

### ⏰ 15h00 – 16h00 · Créer son compte GitHub (60 min)

⚙️ **ATELIER — Création compte GitHub :**

1. Aller sur `github.com` → "Sign up"
2. Choisir un **nom d'utilisateur professionnel** (prénom + initiale du nom, ou prenom-nom — pas de surnom de gamer)
3. Utiliser l'e-mail professionnel ou un e-mail sérieux
4. Mot de passe fort (généré par Bitwarden)
5. **Activer le MFA immédiatement** : Settings → Password and authentication → 2FA
6. Compléter le profil : photo (professionnelle ou neutre), bio courte (ex: "Stagiaire PPNI 2026 — Auxilia Formation")

💬 **FORMATEUR :**

> "Votre nom d'utilisateur GitHub va peut-être vous suivre pendant des années, y compris dans vos candidatures. Choisissez quelque chose de professionnel. Un recruteur technique regarde presque toujours GitHub avant un entretien."

---

### ⏰ 16h00 – 17h00 · Explorer GitHub en groupe (60 min)

⚙️ **ATELIER — Exploration collective :**

1. Chaque stagiaire partage son URL GitHub dans le chat de groupe
2. Suivre le compte du formateur (Follow)
3. Explorer l'interface : onglets Repositories, Stars, Explore
4. Installer **GitHub Desktop** (client graphique — évite la ligne de commande pour l'instant)

💬 **FORMATEUR :**

> "GitHub Desktop, c'est une interface visuelle pour Git. Pas de ligne de commande pour l'instant — vous verrez les changements en couleur, vous pourrez committer en un clic. C'est l'outil idéal pour débuter."

**Fin du lundi S1 :**

💬 **FORMATEUR :**

> "Ce que vous avez fait aujourd'hui : vous avez compris comment vous protéger sur Internet, vous avez créé un compte GitHub professionnel, et vous avez découvert le vocabulaire du versioning. C'est énorme pour une première journée.
>
> Pour vendredi : essayez de vous connecter à votre compte GitHub depuis chez vous. Relisez la fiche cybersécurité qu'on vous a distribuée. Et si vous avez le temps, essayez de trouver un exemple de phishing que vous avez reçu. On en discutera."

---

## 🔵 Vendredi 15 mai — 09h00 → 15h00 (3,5h effectives)

_Format demi-journée : 09h00-12h30 puis 13h20-15h00_

---

### ⏰ 09h00 – 09h15 · Retour sur la semaine

💬 **FORMATEUR :**

> "Bonjour. Avant de commencer : est-ce que quelqu'un a essayé quelque chose depuis lundi ? Une mise à jour, tester Bitwarden, regarder son compte GitHub ?"

_(Valoriser chaque initiative, même petite)_

> "Est-ce que quelqu'un a eu une question depuis lundi ? Quelque chose qui n'était pas clair ?"

---

### ⏰ 09h15 – 10h15 · Quiz flash collectif + Checklist de sécurité (60 min)

⚙️ **ATELIER 1 — Quiz flash (20 min) :**

8 questions rapides — format Kahoot ou papier :

1. Quel est le signe qu'un e-mail est peut-être du phishing ? _(réponses attendues : expéditeur bizarre, URL suspecte, urgence, fautes...)_
2. Que signifie MFA ?
3. Combien de caractères minimum pour un mot de passe fort ?
4. Qu'est-ce qu'un gestionnaire de mots de passe ?
5. Que faire si vous avez cliqué sur un lien suspect ?
6. Quel est l'avantage d'une phrase de passe (passphrase) ?
7. Vrai ou faux : votre banque peut vous demander votre mot de passe par e-mail ?
8. À quoi sert `cybermalveillance.gouv.fr` ?

💬 **FORMATEUR (après correction) :**

> "Les questions auxquelles beaucoup ont répondu faux, on les retravaile maintenant. C'est normal — retenir prend du temps et de la répétition."

---

⚙️ **ATELIER 2 — Checklist de sécurité personnelle (40 min) :**

> Ouvrir : `ressources/fiche-securite.html`

Chaque stagiaire parcourt la checklist interactive (15 items, 4 sections) sur son poste.

💬 **FORMATEUR :**

> "Cette checklist, c'est votre audit de sécurité personnel. Pour chaque item : si vous l'avez déjà fait, cochez. Si vous ne l'avez pas encore fait, faites-le maintenant — j'aide ceux qui en ont besoin."

Faire le tour des postes pour aider.

Items à prioriser si le temps manque :

- MFA activé sur au moins 1 compte
- Bitwarden installé et 1 mot de passe sauvegardé
- Vérification des e-mails suspects dans la boite de réception

---

### ⏰ 10h15 – 10h25 · Les bons réflexes au quotidien (10 min)

📌 **TECHNIQUE — La règle des 3 :**

1. **Je sauvegarde** régulièrement (backup = copie de sauvegarde, stockée ailleurs que sur l'ordinateur principal — disque dur externe, cloud)
2. **Je chiffre** les données sensibles (chiffrement = transformation des données en une version illisible sans clé — comme mettre ses documents dans un coffre)
3. **Je vérifie** avant de cliquer (URL, expéditeur, contexte)

📌 **TECHNIQUE — Wi-Fi public :**

> **Wi-Fi public** = réseau Internet accessible à tous (café, gare, hôpital). Le problème : n'importe qui sur ce réseau peut potentiellement intercepter les données non chiffrées qui transitent. Règle : **ne jamais saisir un mot de passe ou des données bancaires sur un Wi-Fi public**.

📌 **TECHNIQUE — VPN :**

> **VPN** (Virtual Private Network, Réseau Privé Virtuel) = un tunnel chiffré entre votre appareil et Internet. Vos données passent dans ce tunnel — même sur un Wi-Fi public, elles sont illisibles pour quelqu'un qui intercepterait le trafic.

💬 **Analogie VPN :**

> "Imaginez que vous envoyez un courrier. Normalement la lettre est dans une enveloppe classique — le facteur pourrait l'ouvrir. Avec un VPN, c'est comme mettre votre lettre dans un tube blindé scellé. Personne ne peut lire le contenu en route."

---

### ⏰ 10h25 – 12h30 · Premier dépôt GitHub + README (2h05)

---

### ⏰ 10h25 – 10h35 · Markdown en 5 minutes (10 min)

📌 **TECHNIQUE — Markdown :**

> **Définition :** Un langage de balisage léger. Vous écrivez du texte simple avec quelques symboles, et le rendu est mis en forme automatiquement.

💬 **Analogie :**

> "En HTML, pour mettre du texte en gras vous écrivez `<strong>texte</strong>`. En Markdown, vous écrivez juste `**texte**`. C'est une simplification conçue pour que n'importe qui puisse écrire du contenu formaté rapidement."

Syntaxe essentielle à retenir :

```
# Titre principal
## Sous-titre
### Sous-sous-titre

**texte en gras**
*texte en italique*

- élément de liste
- autre élément

[Texte du lien](https://url.com)

`code en ligne`
```

> Ouvrir `ressources/fiche-markdown.html` pour la référence complète et l'éditeur live.

---

### ⏰ 10h35 – 12h05 · Créer le 1er repo + rédiger le README (1h30)

⚙️ **ATELIER — Création du repository et du README :**

**Étape 1 — Créer le repository sur GitHub (10 min)**

1. Se connecter sur `github.com`
2. Cliquer sur "+" → "New repository"
3. Nom du repo : `ppni-cybersecurite` (tout en minuscules, tirets)
4. Visibilité : **Public**
5. Cocher "Add a README file"
6. Cliquer "Create repository"

💬 **FORMATEUR :**

> "Pourquoi Public ? Parce que ce repo va devenir une partie de votre portfolio. Les recruteurs pourront le voir. Si vous avez des doutes sur le contenu, dites-le moi — on s'assure que ce qui est mis en ligne est professionnel."

---

**Étape 2 — Rédiger le README (50 min)**

Structure attendue du README :

```markdown
# 🔐 Cybersécurité — Bonnes pratiques essentielles

> Fiche rédigée dans le cadre du PPNI 2026 (Auxilia Formation)

## Pourquoi la cybersécurité ?

Chaque jour, des millions de personnes se font voler leurs données.
Pas parce qu'elles sont négligentes, mais parce qu'elles ne connaissent
pas les bons réflexes. Cette fiche partage les 3 pratiques les plus importantes.

## 3 bonnes pratiques

### 1. Un mot de passe fort et unique par site

...

### 2. Activer l'authentification à deux facteurs (MFA)

...

### 3. Reconnaître un e-mail de phishing

...

## Ressources utiles

- [Cybermalveillance.gouv.fr](https://www.cybermalveillance.gouv.fr)
- [Have I Been Pwned](https://haveibeenpwned.com)
- [Bitwarden (gestionnaire de mots de passe)](https://bitwarden.com)
```

💬 **FORMATEUR (pendant l'atelier) :**

> "Vous n'êtes pas obligés d'utiliser exactement ce modèle. C'est une base. L'important : ce que vous écrivez, vous devez le comprendre et pouvoir l'expliquer. Si vous copiez-collez quelque chose sans savoir ce que ça veut dire, ça ne sert à rien."

Faire le tour des postes — vérifier :

- La syntaxe Markdown (les `##` bien placés)
- Que le contenu est personnel et compris
- Que l'orthographe est correcte (leur rappeler que c'est un document professionnel public)

---

**Étape 3 — Committer via GitHub Desktop (30 min)**

1. Ouvrir GitHub Desktop
2. Cloner le repo `ppni-cybersecurite` en local (ou modifier directement en ligne pour commencer)
3. Modifier le README dans VS Code ou le Bloc-notes
4. Revenir dans GitHub Desktop → observer le diff (modifications en vert/rouge)
5. Écrire un message de commit : `Rédiger les 3 bonnes pratiques cybersécurité`
6. Cliquer "Commit to main" puis "Push origin"
7. Vérifier sur `github.com` que le README a changé

💬 **FORMATEUR :**

> "Ce que vous venez de faire, c'est ce que font des milliers de développeurs chaque jour. Vous avez modifié un fichier, vous avez écrit une description de ce que vous avez fait, et vous avez envoyé ça sur un serveur public. Félicitations — vous venez de faire votre premier commit professionnel."

---

### ⏰ 12h05 – 12h30 · Revue croisée en binôme (25 min)

⚙️ **ATELIER — Peer review :**

Chaque binôme visite le repo GitHub de l'autre.

Grille de retour (orale, 2 min max par personne) :

1. ✅ Ce qui est bien (1 point précis, pas "c'est bien fait")
2. 💡 Une suggestion (1 chose concrète à améliorer)
3. ❓ Une question sur le contenu

💬 **FORMATEUR :**

> "Une revue de code — ou de contenu — ça s'apprend. L'objectif n'est pas de critiquer mais de s'améliorer mutuellement. En développement professionnel, TOUT le code passe par une revue avant d'être mis en production. Vous pratiquez une compétence très professionnelle là."

---

### ⏰ 13h20 – 14h10 · Finalisation README + envoi au formateur (50 min)

⚙️ **ATELIER — Finalisation :**

1. Intégrer les retours du binôme
2. Vérifier : au moins 3 commits visibles dans l'historique
3. Vérifier : l'URL publique du repo est accessible
4. Envoyer l'URL GitHub par e-mail au formateur : `[prenom.nom]@auxilia.fr`

Format du mail :

```
Objet : [PPNI 2026] Mon repo GitHub — [Prénom Nom]

Bonjour,

Voici l'URL de mon premier dépôt GitHub :
https://github.com/[mon-pseudo]/ppni-cybersecurite

[Prénom Nom]
```

---

### ⏰ 14h10 – 14h35 · Tour de table de clôture S1 (25 min)

💬 **FORMATEUR :**

> "On fait un rapide tour de table avant de se quitter. Une phrase par personne sur une des ces questions — à vous de choisir :
>
> - Qu'est-ce que j'ai appris cette semaine que je ne savais pas lundi ?
> - Qu'est-ce qui m'a surpris ?
> - Qu'est-ce que j'ai envie de creuser ?"

_(Ne pas forcer — accepter "je ne sais pas encore" comme réponse valide)_

---

### ⏰ 14h35 – 15h00 · Preview S2 + défi optionnel (25 min)

💬 **FORMATEUR :**

> "Lundi prochain, on passe à la vitesse supérieure sur GitHub. On apprend les branches — c'est le concept qui distingue un débutant d'un utilisateur intermédiaire. On va aussi pratiquer le flux complet Git en ligne de commande, pas seulement en interface graphique.
>
> Pour ceux qui veulent : défi du week-end. Ajoutez une section à votre README. N'importe laquelle : vos sources, une ressource que vous recommanderiez, un truc que vous avez appris. Et committez-la. Je regarderai vos historiques lundi."

---

# ═══════════════════════════════════════════

# S2 — SEMAINE 2 · 18 mai 2026

# ═══════════════════════════════════════════

---

## 🟢 Lundi 18 mai — 09h00 → 17h00 (7h de formation)

---

### ⏰ 09h00 – 09h20 · Retour sur S1 + Défi du week-end

💬 **FORMATEUR :**

> "Bonjour tout le monde. Avant de commencer, j'ai regardé vos repos ce week-end. Je vais montrer 2 ou 3 exemples anonymisés de ce que j'ai trouvé de bien — et ce que j'aurais amélioré."

_(Projeter 2 READMEs anonymisés — un bon, un à améliorer. Montrer ce qui fait la différence : structure claire, messages de commit explicites, contenu personnel et compris)_

> "Quelqu'un a tenté le défi du week-end ?"

_(Valoriser ceux qui l'ont fait, sans stigmatiser ceux qui ne l'ont pas fait)_

---

### ⏰ 09h20 – 10h30 · Le flux Git de A à Z (1h10)

---

#### 📌 TECHNIQUE — Les 4 zones de Git

Dessiner ou projeter ce schéma :

```
┌────────────────────────────────────────────────────────────┐
│                                                            │
│   [Espace de travail]                                      │
│   Vos fichiers sur votre ordinateur                        │
│          │                                                  │
│          │  git add                                         │
│          ▼                                                  │
│   [Staging Area / Index]                                   │
│   Zone de préparation : ce qui sera dans le prochain       │
│   commit                                                    │
│          │                                                  │
│          │  git commit                                      │
│          ▼                                                  │
│   [Repository local]                                       │
│   Historique Git sur votre ordinateur                      │
│          │                                                  │
│          │  git push                                        │
│          ▼                                                  │
│   [Repository distant — GitHub]           ────── git pull ─┘
│   Votre repo en ligne                                      │
│                                                            │
└────────────────────────────────────────────────────────────┘
```

💬 **FORMATEUR — Expliquer chaque zone :**

> "Zone 1 — Espace de travail : c'est votre bureau. Vous modifiez vos fichiers librement. Git observe ces changements mais ne fait rien encore.
>
> Zone 2 — Staging area : c'est votre corbeille de tri. Vous sélectionnez quels changements vont faire partie du prochain commit. `git add fichier.md` = 'j'ajoute ce fichier à ma corbeille de tri'. `git add .` = 'j'ajoute tout.'
>
> Zone 3 — Repository local : c'est votre album photo. Chaque commit = une photo de votre projet à un instant T, avec une légende (le message de commit).
>
> Zone 4 — GitHub (remote) : c'est le même album, mais stocké dans le cloud et accessible de partout. `git push` = 'je synchronise mon album local vers le cloud'."

---

📌 **TECHNIQUE — Les commandes Git essentielles (10 commandes à maîtriser) :**

| Commande                  | Zone           | Ce qu'elle fait                     |
| ------------------------- | -------------- | ----------------------------------- |
| `git status`              | Workspace      | Affiche ce qui a changé             |
| `git add .`               | Staging        | Prépare tout pour le commit         |
| `git add fichier.md`      | Staging        | Prépare un seul fichier             |
| `git commit -m "message"` | Local          | Crée une sauvegarde commentée       |
| `git push`                | Remote         | Envoie vers GitHub                  |
| `git pull`                | Local ← Remote | Récupère les dernières mises à jour |
| `git log --oneline`       | Local          | Affiche l'historique compact        |
| `git diff`                | Workspace      | Montre exactement ce qui a changé   |
| `git clone [url]`         | Local          | Copie un repo GitHub en local       |
| `git init`                | Local          | Initialise Git dans un dossier      |

> Référence complète : `ressources/fiche-git.html` + `exercices/quiz-git.html` (15 flashcards)

---

### ⏰ 09h20 – 10h15 · Atelier flux complet avec GitHub Desktop (55 min)

⚙️ **ATELIER — Flux complet :**

1. Cloner son repo `ppni-cybersecurite` en local (File > Clone Repository)
2. Ouvrir le dossier dans VS Code (`code .` dans le terminal, ou File > Open Folder)
3. Modifier le README : ajouter une ligne dans une section existante
4. Revenir dans GitHub Desktop → voir le diff (rouge = supprimé, vert = ajouté)
5. Écrire un message de commit précis
6. Commit puis Push
7. Vérifier sur github.com

💬 **FORMATEUR :**

> "À chaque fois que vous modifiez quelque chose, posez-vous la question : 'Est-ce que mon message de commit explique clairement ce que j'ai changé et pourquoi ?' Si la réponse est non, reécrivez-le. C'est une habitude professionnelle."

---

### ⏰ 10h15 – 10h30 · Revue des repos collectivement (15 min)

💬 **FORMATEUR :**

> "Je vais montrer 2 historiques de commits. On regarde ensemble : est-ce que les messages sont clairs ? Est-ce qu'on comprend l'évolution du projet ?"

_(Projeter 2 historiques — valoriser les bons messages, corriger les moins bons collectivement)_

---

### ⏰ 10h30 – 12h30 · Branches Git (2h)

---

#### 📌 TECHNIQUE — Les branches en profondeur

💬 **Analogie complète :**

> "Vous écrivez un roman. Le manuscrit principal, c'est votre branche `main`. Un jour vous avez une idée : et si le personnage principal était une femme au lieu d'un homme ? Vous ne voulez pas modifier le manuscrit original — et si l'idée ne fonctionne pas ?
>
> Vous faites une photocopie du manuscrit. Sur cette copie, vous réécrivez quelques chapitres avec le nouveau personnage. Si ça fonctionne, vous intégrez ces chapitres dans le manuscrit original (merge). Si ça ne fonctionne pas, vous jetez la copie sans avoir touché à l'original.
>
> C'est exactement ce que font les branches Git."

---

📌 **TECHNIQUE — Pourquoi les branches sont fondamentales en équipe :**

> Sans branches : tout le monde modifie le même fichier en même temps → conflits, écrasements, chaos.
>
> Avec branches : chaque développeur travaille sur sa propre branche → les modifications sont isolées → quand c'est prêt, on fusionne → le projet principal reste stable à tout moment.

---

📌 **TECHNIQUE — Règle de nommage des branches :**

Nommer une branche comme on nomme un commit : décrivez ce que vous faites dessus.

✅ `amelioration-readme`, `ajout-section-sources`, `correction-fautes`
❌ `test`, `branche2`, `nouvelle-branche`

---

### ⏰ 10h30 – 11h30 · Atelier branches (60 min)

⚙️ **ATELIER — Créer et fusionner une branche :**

**Via GitHub Desktop :**

1. Branch menu → "New branch" → nommer : `amelioration-readme`
2. Sur cette branche : ajouter une nouvelle section au README
3. Committer sur cette branche (le message doit mentionner la branche)
4. Pusher la branche : "Publish branch"
5. Sur github.com : créer une "Pull Request" (PR)

---

📌 **TECHNIQUE — Pull Request (PR) :**

> **Définition :** Une demande formelle de fusionner une branche dans une autre. Sur GitHub, elle permet de voir exactement ce qui va changer, de commenter, et de valider avant de fusionner.

💬 **Analogie :**

> "Une Pull Request, c'est comme soumettre un devoir pour correction avant de le rendre définitivement. Vous dites : 'Voilà ce que j'ai fait sur ma branche — est-ce qu'on peut le fusionner dans le projet principal ?' Quelqu'un regarde, valide (ou commente), puis on fusionne."

---

**Suite de l'atelier (GitHub Desktop + github.com) :**

6. Sur github.com, vérifier la PR : onglet "Files changed" → voir le diff
7. Cliquer "Merge pull request" → "Confirm merge"
8. Retourner dans GitHub Desktop → basculer sur `main` → Pull pour récupérer la fusion
9. Vérifier que le README contient bien la nouvelle section

💬 **FORMATEUR :**

> "Vous venez de faire le workflow complet qu'utilisent les équipes professionnelles : branche → commits → push → pull request → merge. C'est le coeur de la collaboration sur GitHub."

---

### ⏰ 11h30 – 12h30 · Atelier avancé — Intro à la ligne de commande Git (60 min)

💬 **FORMATEUR :**

> "GitHub Desktop c'est bien pour commencer. Mais dans le monde professionnel, vous allez souvent utiliser le terminal — la ligne de commande. C'est plus puissant et ça marche partout, même sans interface graphique. On va faire les mêmes actions qu'avant, mais en ligne de commande."

⚙️ **ATELIER — Terminal Git :**

Ouvrir le terminal (Git Bash sur Windows, ou terminal intégré VS Code) :

```bash
# 1. Se placer dans son dossier
cd ppni-cybersecurite

# 2. Vérifier l'état
git status

# 3. Créer une branche
git checkout -b ajout-section-ressources

# 4. Modifier le README (ouvrir dans l'éditeur)

# 5. Voir les changements
git diff

# 6. Préparer le commit
git add README.md

# 7. Committer
git commit -m "Ajouter section ressources recommandées"

# 8. Pousser la nouvelle branche
git push -u origin ajout-section-ressources

# 9. Créer la PR sur github.com

# 10. Après merge, récupérer les changements
git checkout main
git pull
```

💬 **FORMATEUR :**

> "Ces 10 commandes, c'est 90% de ce que vous ferez au quotidien. Utilisez `git status` tout le temps — il vous dit toujours exactement où vous en êtes. C'est votre boussole."

---

### ⏰ 12h30 – 13h20 · Pause déjeuner

---

### ⏰ 13h20 – 15h00 · README avancé + Markdown pratique (1h40)

---

📌 **TECHNIQUE — Un bon README professionnel :**

Un README qui impressionne un recruteur contient :

1. **Un titre clair** avec émoji (facultatif mais agréable)
2. **Une phrase de présentation** en quelques mots
3. **Le contexte** : dans quel cadre ce projet a été créé
4. **Le contenu** ou les **fonctionnalités** (selon le projet)
5. **Les technologies utilisées** (même simples : HTML, Markdown, Git)
6. **Des liens utiles** (ressources, démo, references)
7. **L'auteur** et le contexte de formation

💬 **FORMATEUR :**

> "Un README vide ou minimaliste sur GitHub, ça donne l'impression d'un travail bâclé. Un README soigné, ça montre que vous prenez votre travail au sérieux. La différence entre les deux, c'est 30 minutes de travail supplémentaire."

---

⚙️ **ATELIER — Améliorer le README avec Markdown avancé (1h20) :**

Ouvrir `ressources/fiche-markdown.html` → onglet Éditeur live.

Notions avancées à introduire :

````markdown
## Tableau

| Outil     | Usage                      | Gratuit |
| --------- | -------------------------- | ------- |
| Bitwarden | Gestionnaire mots de passe | ✅      |
| GitHub    | Versioning et portfolio    | ✅      |

## Bloc de code

```bash
git commit -m "Mon premier commit"
```
````

## Lien avec image

[![GitHub](https://img.shields.io/badge/GitHub-profil-blue)](https://github.com/mon-pseudo)

## Citation

> "La sécurité est un processus, pas un produit." — Bruce Schneier

```

---

### ⏰ 15h00 – 17h00 · Projet libre + accompagnement individuel (2h)

💬 **FORMATEUR :**

> "L'après-midi, c'est du temps libre pour avancer sur votre repo. Je passe voir chacun d'entre vous individuellement. Voici les options selon où vous en êtes :
> - Vous n'avez pas encore de README solide → on le complète
> - Vous avez un bon README → on ajoute une deuxième section sur un autre sujet (ex: intro GitHub)
> - Vous voulez aller plus loin → on crée un 2ème repo ou on explore GitHub Pages (votre repo devient un site web)"

---

📌 **TECHNIQUE — GitHub Pages (bonus pour les avancés) :**

> **Définition :** Un service gratuit de GitHub qui transforme votre repository en site web statique. Un fichier `index.html` dans un repo avec GitHub Pages activé devient accessible via `https://votre-pseudo.github.io/votre-repo/`.

💬 **Analogie :**

> "C'est comme si GitHub prenait votre dossier de fichiers et le mettait sur le Web en un clic. Pas de serveur à configurer, pas d'hébergement à payer — c'est gratuit et ça marche immédiatement."

Pour l'activer : repo → Settings → Pages → Branch: main → Save.

---

## 🔵 Vendredi 22 mai — 09h00 → 15h00 · Livrable final S2

---

### ⏰ 09h00 – 10h30 · Finitions + vérification livrable

💬 **FORMATEUR :**

> "Aujourd'hui, on finalise le livrable S2. Pour rappel, voici ce qui est attendu au minimum :"

📋 **GRILLE DU LIVRABLE S2 :**

| Critère | Points | Vérification |
|---|---|---|
| Repository public créé | 2/10 | URL accessible sans être connecté |
| Au moins 3 commits distincts | 2/10 | Historique visible dans GitHub |
| Messages de commit clairs | 1/10 | Pas de "modification", "test" |
| README avec 3 bonnes pratiques rédigées | 3/10 | Contenu compris et personnel |
| Structure Markdown correcte (titres, listes, liens) | 1/10 | Rendu visuel propre |
| Repo partagé avec le formateur | 1/10 | URL reçue par e-mail |

⚙️ **ATELIER — Checklist individuelle (30 min) :**

Chaque stagiaire ouvre son repo et vérifie chaque point.

---

### ⏰ 10h30 – 12h30 · Présentations (2 min par stagiaire)

Format :
- Projeter son repo sur le vidéoprojecteur
- Expliquer en 2 min : "ce que j'ai fait, ce que j'ai appris, ce que j'améliorerais"
- 1 min de retour bienveillant du groupe

💬 **FORMATEUR (avant les présentations) :**

> "Règle d'or : on ne rigole pas, on ne minimise pas le travail de quelqu'un. Si vous avez un retour, il doit être constructif. 'J'aurais ajouté ceci' plutôt que 'il manque cela'. On est une communauté apprenante — on apprend les uns des autres."

---

### ⏰ 13h20 – 14h30 · Bilan S1-S2 + projection S3-S4

💬 **FORMATEUR :**

> "En deux semaines vous avez :
> - Compris les menaces numériques et les bons réflexes
> - Installé et utilisé un gestionnaire de mots de passe
> - Activé la double authentification
> - Appris à reconnaître le phishing
> - Créé un compte GitHub professionnel
> - Publié votre premier repository avec un README en Markdown
> - Fait vos premiers commits, push, branches et pull requests
> - Appris à utiliser Git en ligne de commande
>
> C'est objectivement beaucoup. Et c'est une base sur laquelle tout le reste va se construire."

---

### ⏰ 14h30 – 15h00 · Clôture

💬 **FORMATEUR :**

> "Pour la semaine prochaine, votre repo GitHub doit être finalisé et le lien envoyé. À partir de S3, on diverge selon votre axe : développement web pour certains, support numérique pour d'autres.
>
> Quelle que soit la voie, vous avez maintenant les fondations. La sécurité et la gestion de version, ça vous suivra quel que soit votre métier dans le numérique."

---

## Annexes

---

### Glossaire complet S1-S2

| Terme | Définition courte | Analogie |
|---|---|---|
| **Phishing** | E-mail frauduleux imitant une entité de confiance | Hameçon jeté dans l'eau |
| **Ransomware** | Logiciel qui chiffre vos fichiers et demande une rançon | Votre maison mise sous clé par un kidnappeur |
| **MFA / 2FA** | Double vérification d'identité : mdp + téléphone | Carte bancaire + code PIN |
| **VPN** | Tunnel chiffré entre votre appareil et Internet | Lettre dans un tube blindé |
| **Chiffrement** | Transformation des données en version illisible sans clé | Message en code secret |
| **Vulnérabilité** | Faiblesse exploitable d'un système | Clé sous le paillasson |
| **Vecteur d'attaque** | Chemin emprunté par l'attaquant | Entrées possibles d'une maison |
| **ANSSI** | Autorité française en cybersécurité | Pompiers du numérique |
| **Git** | Logiciel de versioning installé en local | Appareil photo avec historique |
| **GitHub** | Plateforme cloud pour héberger des repos Git | Album photo dans le cloud |
| **Repository** | Dossier de projet suivi par Git | Classeur avec mémoire |
| **Commit** | Sauvegarde commentée d'un état du projet | Sauvegarde de jeu vidéo avec étiquette |
| **Push** | Envoyer ses commits vers GitHub | Envoyer un e-mail |
| **Pull** | Récupérer les commits depuis GitHub | Recevoir une mise à jour |
| **Branche** | Ligne de développement parallèle et isolée | Copie brouillon d'un manuscrit |
| **Merge** | Fusionner deux branches | Recopier le brouillon dans le manuscrit |
| **Pull Request** | Demande formelle de merge sur GitHub | Devoir soumis avant rendu définitif |
| **README.md** | Fichier de présentation affiché sur le repo | Couverture et 4ème de couv d'un livre |
| **Markdown** | Langage de mise en forme léger | Post-it avec symboles → rendu joli |
| **GitHub Pages** | Repo transformé en site web statique | Dossier de fichiers mis en ligne en 1 clic |
| **Bitwarden** | Gestionnaire de mots de passe open source | Trousseau de clés numérique |
| **Passphrase** | Mot de passe formé de plusieurs mots | 4 mots + tirets = 100 ans pour craquer |
| **Staging area** | Zone de préparation avant le commit | Corbeille de tri sur le bureau |
| **Remote** | Dépôt distant (GitHub) | Document dans le cloud |
| **Local** | Dépôt sur votre ordinateur | Brouillon dans votre tiroir |

---

### Ressources formateur

- Exercices interactifs : `exercices/index.html`
- Fiche phishing imprimable : `ressources/fiche-phishing.html`
- Fiche Git imprimable : `ressources/fiche-git.html`
- Fiche Markdown avec éditeur live : `ressources/fiche-markdown.html`
- Checklist sécurité interactive : `ressources/fiche-securite.html`
- Hub ressources externes : `ressources/index.html`

---

*Document PPNI 2026 · Auxilia Formation · Usage interne formateur*
```
