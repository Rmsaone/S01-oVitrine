# Cahier des Charges Fonctionnel (CDCF) 

## Présentation du Projet : La O'Vitrine

Le projet consiste à créer une application web de type *"site vitrine"*. Cette application permettra à des clients potentiels (dits "leads") de visualiser le portfolio de l'entreprise proposant ses services, ainsi que d'obtenir des détails sur des projets réalisés.  

## Besoins et Objectifs

Besoin Identifiés : 
- Un invité doit pouvoir consulter la liste des projets réalisés par l'entreprise ; le nom du projet, une courte description, et la technologie sont exposés publiquement. 
- Un invité doit pouvoir consulter les détails d'un projet en particulier.  
- Un invité doit pouvoir consulter les informations de contact de l'entreprise.  
- Un invité doit pouvoir consulter les réseaux sociaux de l'entreprise.  

Objectifs du Projet : 
- Fournir une interface utilisateur simple et intuitive.  
- Permettre aux invités de visualiser l'entièreté du portfolio de l'entreprise. 
- Permettre aux invités d'obtenir des informations spécifiques à un projet exposé sur le site vitrine.  
- Permettre aux invités de contacter l'entreprise via email. 
- Permettre aux invités de contacter l'entreprise via les réseaux sociaux. 

## Fonctionnalités du Projet

**Spécifications Fonctionnelles** :

1. Visualiser la liste des projets du portfolio.

> Un invité peut consulter la liste des projets du portfolio via la page d'accueil.
  
2. Consulter un projet avec une vue détaillée. 
 
> Un invité peut obtenir des informations complémentaires sur un projet en naviguant sur sa page dédiée.
3. Contacter l'entreprise

> - Un invité peut contacter l'entreprise via ses *socials* (X/Twitter, GitHub, LinkedIn)
> - Un invité peut contacter l'entreprise via email

**Évolutions Potentielles** : aucune évolution potentielle recensée à ce jour ; pas même l'ajout d'un back-office.  

## Cible du Projet

Le public cible de ce projet sont les professionnels, agences de recrutements & prestations de services, et plus généralement toute entreprise ayant des ressources financières avec besoin de ressources techniques et humaines afin de mener à bien un projet digital.  

## Arborescence de l'Application 

**Page d'Accueil** :

- Informations de contact de l'entreprise,
- Liste des projets du portfolio avec description succincte. 

**Page de Détails d'un Projet** :

- Détails sur le projet sélectionné.

## Liste des User Stories  

| User Story | En tant que... | Je veux...                                                            | Afin de...                                                    |
| ---------- | -------------- | --------------------------------------------------------------------- | ------------------------------------------------------------- |
| 1          | Invité | pouvoir visualiser la liste des projets réalisés par l'entreprise                    | depuis la page d'accueil.                                     |
| 2          | Invité | pouvoir visualiser un projet en détail                    | depuis la page de détail d'un projet.                                     |
| 3          | Invité | pouvoir contacter l'entreprise via email                    | depuis la page d'accueil.                                     |
| 4          | Invité | pouvoir contacter l'entreprise via les réseaux sociaux                 | depuis la page d'accueil.                                     |
| 5          | Invité | pouvoir contacter l'entreprise via email                    | depuis la page de détail d'un projet.                                     |
| 6          | Invité | pouvoir contacter l'entreprise via les réseaux sociaux                 | depuis la page de détail d'un projet.                                     |


## Use Cases Diagramme (UC)

```plantuml
@startuml
left to right direction
actor Invité as i
package SiteVitrine {
  usecase "Consulter liste projets" as UC1
  usecase "Naviguer détail projet" as UC2
  usecase "Consulter adresse email entreprise" as UC3
  usecase "Consulter socials entreprise" as UC4
}
i --> UC1
i --> UC2
i --> UC3
i --> UC4
@enduml
```

![UC Diagram](plantuml_out/UC_1.png)

## Diagramme de Séquence

*FindAllProjects* :

```plantuml
@startuml
Invité -> "dashboardController" as D : 1: Afficher Projets 
D -> "Projet" as C : 1.1 : getProjets(): listeProjets 
C --> D : 1.2 : Projets
D -> "ViewProjet" as V : 1.3 : render(projets)
V --> D : 1.4: renderView
D --> Invité : 1.5 : ok
@enduml
```

![Sequence Diagram FindAllProjects](./plantuml_out/plant_Seq_1.png)

*FindProjectById* :

```plantuml
@startuml
Invité -> "projectDetailController" as D : 1: Afficher Détail Projet 
D -> "Projet" as C : 1.1 : getProjet(int): Projet 
C --> D : 1.2 : Projet
D -> "ViewProjetDetail" as V : 1.3 : render(projet)
V --> D : 1.4: renderView
D --> Invité : 1.5 : ok
@enduml
```

![Sequence Diagram FindProjectById](./plantuml_out/plant_Seq_2.png)

## Diagramme de Classe

```plantuml
@startuml
package models {
  class Owner {
    - login: String
    - html_url: String
    - type: String
    - avatar_url: String
  }
  class Project {
    - private: boolean
    - archived: boolean
    - name: String
    - full_name: String
    - description: String
    - language: String
    - html_url: String
    - license: String
  }
  Owner "0..*" - "1..1" Project 
}

package controllers { 
  class DashboardController {
    + void render()
  }
  class ProjectdetailController {
    + void render(int projectId)
  }
}
@enduml
```

![Class Diagram](./plantuml_out/plant_C_1.png)

## Entités-Relations Diagramme (ERD)

```plantuml
@startuml

entity "Project" as e01 {
  *project_id : number <<generated>>
  --
  *owner_id : number <<FK>>
  *private: boolean
  *archived:  boolean
  *name: text
  *full_name: text
  *description : text
  *language: text
  *html_url: text
  license: text
  created_at: date
  updated_at: date
}

entity "Owner" as e02 {
  *owner_id : number <<generated>>
  --
  *login: text
  *html_url: text
  *type: text
  avatar_url: text
  created_at: date
  updated_at: date
}

e02 }o----|| e01

@enduml
```

## Wireframes 

Page d'accueil :

![wireframe page accueil](./j01-assets/wireframe-index.png)  

Page de projet :

![wireframe page projet](./j01-assets/wireframe-project.png)

## Maquettes

Page d'accueil :

![mockup page accueil](./mockups/page_accueil.png)  

Page de projet :

![mockup page projet](./mockups/page_projet.png)
