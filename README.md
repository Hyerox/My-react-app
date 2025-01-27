# React + Vite

# Projet Let's Cook

## Description

Le projet **Let's Cook** est une application web dédiée aux recettes de cuisine. Il permet à l'utilisateur de découvrir des recettes classées par catégorie, de rechercher des recettes par mot-clé, et d'ajouter ses propres recettes. L'application est construite avec **React**, en utilisant des composants fonctionnels et les **hooks** pour gérer l'état et les événements.

### Fonctionnalités

- Affichage des recettes avec filtres par recherche et catégorie.
- Possibilité d'ajouter des recettes personnelles via un pop-up.
- Visualisation détaillée des recettes avec une page individuelle.
- Gestion dynamique des recettes ajoutées par l'utilisateur.
- Design responsive pour une expérience optimale sur desktop et mobile.

## Structure du projet

- /src
- ├── /assets # Contient les images et ressources statiques
  - ├── LogoLetsCook.svg # Logo de l'application
  - ├── Kitchen.jpg # Image de fond pour l'en-tête
  - └── ... # Autres ressources
- ├── /api # Données JSON des recettes
- └── recettes.json # Fichier contenant les recettes en format JSON
- ├── /components # Composants React
- ├── Header.jsx # Composant d'en-tête avec le logo et la navigation
- ├── Footer.jsx # Composant de pied de page avec les liens sociaux
- ├── Articles.jsx # Composant pour l'affichage des recettes filtrées
- ├── Article.jsx # Composant pour afficher une recette en détail
- └── Popup.jsx # Composant pop-up pour l'ajout de recettes
- ├── App.jsx # Point d'entrée de l'application
- └── index.css # Styles globaux

markdown /
Copier /
Modifier

## Choix de conception et de développement

### 1. Utilisation de React

L'application utilise **React** pour sa modularité et sa capacité à gérer l'état des composants de manière efficace. Les **hooks** tels que `useState` sont utilisés pour gérer les données, les filtres de recherche, ainsi que l'ouverture et la fermeture du pop-up pour l'ajout de recettes.

### 2. Gestion de l'état avec `useState`

Chaque action dans l'application (recherche, ajout de recette, changement de catégorie) est suivie par la mise à jour de l'état local grâce à `useState`. Cela permet de garder l'interface utilisateur réactive et d'assurer une expérience fluide.

### 3. Design responsive

Les styles CSS sont conçus pour offrir une expérience utilisateur optimale, peu importe la taille de l'écran. Des règles spécifiques sont ajoutées pour les écrans de taille inférieure à 768px, ce qui permet à l'application de s'adapter aux appareils mobiles.

### 4. Utilisation de React Router

Le routage est géré via **React Router** pour permettre une navigation fluide entre les différentes pages de l'application (accueil, recette détaillée).

### 5. Gestion des données

Les recettes sont actuellement chargées à partir d'un fichier JSON statique, ce qui permet de simuler une base de données sans nécessiter de serveur. L'ajout de nouvelles recettes est géré localement via le pop-up.

### 6. Interaction avec l'utilisateur

Des pop-ups sont utilisés pour ajouter des recettes à la collection de l'utilisateur, et un bouton de recherche permet de filtrer les recettes en fonction des critères définis.

## Auteur

- **Nom** : DIDIER Nathan
- **Email** : Hyerox@hotmail.com
- **Site web** : ...
- **GitHub** : https://github.com/Hyerox?tab=repositories

## Date de création

Ce projet a été créé le **27 janvier 2025**.

## Installation

1. Clonez ce repository sur votre machine locale :
   git clone https://github.com/Hyerox/lets-cook.git

bash / Copier / Modifier

2. Allez dans le répertoire du projet :
   cd lets-cook

markdown /
Copier /
Modifier

3. Installez les dépendances :
   npm install

markdown /
Copier /
Modifier

4. Lancez l'application :
   npm start

markdown /
Copier /
Modifier /

Cela ouvrira l'application dans votre navigateur à l'adresse `http://localhost:3000`.

## Contribuer

Si vous souhaitez contribuer à ce projet, veuillez suivre ces étapes :

1. Fork ce repository.
2. Créez une nouvelle branche (`git checkout -b feature/ma-fonctionnalite`).
3. Effectuez vos modifications.
4. Commitez vos changements (`git commit -am 'Ajoute une nouvelle fonctionnalité'`).
5. Poussez votre branche (`git push origin feature/ma-fonctionnalite`).
6. Créez une nouvelle Pull Request.

## Licence

Ce projet est sous licence Hyerox Corporation. Vous pouvez le modifier et le redistribuer selon les termes de cette licence.

©© Hyerox ©©
Made in 2025
