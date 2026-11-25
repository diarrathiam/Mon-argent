# Mon Argent — PWA installable

Application personnelle de suivi d’argent, avec stockage sur le téléphone.

## Déploiement sur GitHub Pages

1. Créer un dépôt public **mon-argent** sur GitHub.
2. Envoyer **les cinq fichiers situés à la racine de ce dossier** (`index.html`, `manifest.json`, `sw.js`, `icon.png`, `icon512.png`) dans la branche `main`. Ne pas envoyer ce dossier comme sous-dossier.
3. Dans le dépôt : `Settings` → `Pages` → `Build and deployment` → `Deploy from a branch`, branche `main`, dossier `/(root)` → `Save`.
4. Ouvrir `https://VOTRE-PSEUDO.github.io/mon-argent/` dans Chrome sur Android, puis menu ⋮ → « Ajouter à l'écran d'accueil » → « Installer ».
5. Restaurer la sauvegarde JSON privée depuis la section « Import et sauvegarde ».

## Confidentialité et limites

- Le code déployé est public ; ne jamais publier de sauvegarde JSON, relevé CSV, données financières ni code PIN sur GitHub.
- Les montants et personnes sont volontairement absents du code initial ; ils sont chargés uniquement via la sauvegarde locale.
- La sauvegarde JSON **n'est pas chiffrée** ; le PIN bloque seulement l'interface et ne protège pas les données contre une personne ayant accès au stockage du téléphone.
- Après installation, les données sont conservées par origine de site (adresse HTTPS), pas partagées automatiquement avec les fichiers HTML ouverts en local.
- Ne pas désinstaller/effacer les données de Chrome ou de la PWA sans avoir exporté une sauvegarde JSON.
- Tester les calculs financiers avec des exemples fictifs avant d'y saisir des mouvements définitifs.
