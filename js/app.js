console.log('nouveau module');
angular.module("Taximodule", [])
var app=angular.module("Taximodule", [])
app.controller("TaxiAff", function($scope,$location) {

	$scope.dossiers = [
    {value : "taxiliste", label:'Taxi', categorie:"stations de taxis", presentation : "à partir desquelles les taxis seront gratuits", liste:  [
    {
    Nom : "Beaubourg",
    Adresse: "24 rue Beaubourg",
    Code: "3ème arrondissement",
    Phone: "0147484946",
    Repere: "Angle impasse Berthaud",},
    {
    Nom : "Porte de Vanves",
    Adresse: "214 rue Raymond Losserand",
    Code: "14ème arrondissement",
    Phone: "0147478546",
    Repere: "En face de l'hôtel IBIS"},
    {
    Nom : "Place Charles Michels",
    Adresse: "48 rue Linois",
    Code: "15ème arrondissement",
    Phone: "0147476946",
    Repere: "Angle place Charles Michels"},
    {
    Nom : "Félix Faure - Boucicault",
    Adresse: "44 avenue Félix Faure",
    Code: "15ème arrondissement",
    Phone: "0147784326",
    Repere: "En face du commissariat"},
    {
    Nom : "Etoile - Wagram",
    Adresse: "1 avenue de Wagram",
    Code: "17ème arrondissement",
    Phone: "0147125478",
    Repere: "Angle place Charles de Gaulle"},
    {
    Nom : "Maréchal Juin",
    Adresse: "3 place du Maréchal Juin",
    Code: "17ème arrondissement",
    Phone: "0147483594",
    Repere: "Angle rue de Courcelles"},
    {
    Nom : "Mairie du 18ème",
    Adresse: "30 rue Hermel",
    Code: "18ème arrondissement",
    Phone: "0147784512",
    Repere: "Angle place Jules Joffrin"},
    {
    Nom : "Château Rouge",
    Adresse: "1 rue Custine",
    Code: "18ème arrondissement",
    Phone: "0147484457",
    Repere: "Angle place du Château Rouge"},
    {
    Nom : "Porte d'Aubervilliers",
    Adresse: "3 avenue de la porte d'Aubervilliers",
    Code: "18ème arrondissement",
    Phone: "0147412946",
    Repere: "Au pied de la tour du trésor publique"},
    {
    Nom : "Flandre - Stalingrad",
    Adresse: "13 avenue de Flandre",
    Code: "198ème arrondissement",
    Phone: "0145384946",
    Repere: "Angle de l'avenue Stalingrad"},
    {
    Nom : "Père Lachaise - Ménilmontant",
    Adresse: "30 boulevard de Menilmontant",
    Code: "20ème arrondissement",
    Phone: "0147445766",
    Repere: "Angle place Auguste Méthivier"},
    {
    Nom : "Sèvres Babylone",
    Adresse: "1 place Alphonse Deville",
    Code: "15ème arrondissement",
    Phone: "0175484946",
    Repere: "Angle boulevard Raspail"},
    {
    Nom : "Rd Pt des Champs Elysées",
    Adresse: "3 avenue Matignon",
    Code: "8ème arrondissement",
    Phone: "0147578966",
    Repere: "Angle rond point des Champs Elysées"},
    {
    Nom : "Place des Ternes",
    Adresse: "272 rue du faubourg Saint Honoré",
    Code: "8ème arrondissement",
    Phone: "0145781354",
    Repere: "A coté de l'entrée du Métro"},
    {
    Nom : "Place de Clichy",
    Adresse: "95 rue de Clichy",
    Code: "9ème arrondissement",
    Phone: "0147445784",
    Repere: "Angle place de Clichy"},
    {
    Nom : "Passy - Costa Rica",
    Adresse: "10 boulevard Delessert",
    Code: "16ème arrondissement",
    Phone: "0145136794",
    Repere: "Angle rue Benjamin Franklin"},
    {
    Nom : "Porte Maillot",
    Adresse: "78 avenue de la Grande Armée",
    Code: "17ème arrondissement",
    Phone: "01475487745",
    Repere: "Sous le pont"},
    {
    Nom : "Place du Tertre",
    Adresse: "119 rue du Mont Cenis",
    Code: "18ème arrondissement",
    Phone: "0147484876",
    Repere: "Au centre de  la place"},
    {
    Nom : "Porte de Clignancourt",
    Adresse: "1 avenue de la Porte de Clignancourt",
    Code: "18ème arrondissement",
    Phone: "0147484946",
    Repere: "Au pied de la porte"},
    {
    Nom : "Flandres - Argone",
    Adresse: "154 avenue de Flandre",
    Code: "19ème arrondissement",
    Phone: "0147484946",
    Repere: "Angle rue de l'Argone"},
    {
    Nom : "Porte Dorée",
    Adresse: "1 place Edouard Renard",
    Code: "12ème arrondissement",
    Phone: "0147445784",
    Repere: "En face du musée"},
    {
    Nom : "Château de Vincennes",
    Adresse: "7 avenue de Nogent",
    Code: "12ème arrondissement",
    Phone: "0147445784",
    Repere: "Face à la gare routière de bus"},
    {
    Nom : "Maison de la Radio",
    Adresse: "1 avenue de Versailles",
    Code: "16ème arrondissement",
    Phone: "0147445784",
    Repere: "Au pied de Radio France"},
    {
    Nom : "Place Vendôme",
    Adresse: "23 place Vendôme",
    Code: "1er arrondissement",
    Phone: "0147475484",
    Repere: "Côté rue de la Paix"},
    {
    Nom : "Tour Eiffel",
    Adresse: "69 quai Branly",
    Code: "7ème arrondissement",
    Phone: "0147475484",
    Repere: "Au pied de la Tour Eiffel"},
    {
    Nom : "Nation",
    Adresse: "3 avenue du Trône",
    Code: "11ème arrondissement",
    Phone: "0147474584",
    Repere: "Angle place de la Nation"},
    ] },

    { value : "autoliste", label:'Autolib', categorie:"stations Autolib", presentation : "à partir desquelles la location des Autolib sera gratuites", liste :[
    {Nom    : "Paris/Sèvres Babylone/Parking", Adresse: "1 rue Velpeau",Code: "7ème arrondissement",Repere: "Parking"},
    {Nom    : "Paris/Montparnasse Gaîté/Parking", Adresse: "15 rue du Commandant René Mouchotte",Code: "14ème arrondissement",Repere: "Dans un Parking sous terrain"},
    {Nom    : "Paris/Pasteur Montparnasse/Parking", Adresse: "81 rue Falguière",Code: "15ème arrondissement",Repere: "Dans un Parking sous terrain"},
    {Nom    : "Paris/Cambronne/Parking", Adresse: "26 villa Croix-Nivert",Code: "15ème arrondissement",Repere: "Sur la voirie publique"},
    {Nom    : "Paris/Jean-Jacques Rousseau/62", Adresse: "62 rue Jean-Jacques Rousseau",Code: "1er arrondissement",Repere: "Sur la voirie publique"},
    {Nom    : "Paris/Pyramides/12", Adresse: "12 Rue des Pyramides",Code: "1er arrondissement",Repere: "Sur la voirie publique"},
    {Nom    : "Paris/Quatre septembre/10", Adresse: "10 rue du Quatre septembre",Code: "2ème arrondissement",Repere: "Sur la voirie publique"},
    {Nom    : "Paris/Jouffroy d'Abbans/108", Adresse: "108 Rue Jouffroy d'Abbans",Code: "17ème arrondissement",Repere: "Sur la voirie publique"},
    {Nom    : "Paris/Ternes/6", Adresse: "6 avenue des Ternes",Code: "17ème arrondissement",Repere: "Sur la voirie publique"},
    {Nom    : "Paris/Saint Ouen/67", Adresse: "67 avenue de Saint Ouen",Code: "17ème arrondissement",Repere: "Sur la voirie publique"}
    ]},

    {value : "partageliste", label:'Véhicule partagé',categorie:"centres de véhicule partagés", presentation : "à partir desquelles la location de ces véhicules sera gratuite", liste :[
    {Nom    : "ZIPCAR Jourdain", Adresse: "2 RUE DU JOURDAIN",Code: "20ème arrondissement",Repere: "Indiquée par une pancarte lumineuse"},
    {Nom    : "MATCHA-EUROPCAR Henri IV", Adresse: "46 QUAI HENRI IV",Code: "4ème arrondissement",Repere: ""},
    {Nom    : "ZIPCAR Valette", Adresse: "4 RUE VALETTE",Code: "5ème arrondissement",Repere: ""},
    {Nom    : "COMMUNAUTO Claude Bernard", Adresse: "16 RUE CLAUDE BERNARD",Code: "5ème arrondissement",Repere: "Indiquée par une pancarte lumineuse"},
    {Nom    : "MATCHA-EUROPCAR Suffren", Adresse: "3 AVENUE DE SUFFREN",Code: "7ème arrondissement",Repere: "A l'entrée du parking sous-terrain"},
    {Nom    : "COMMUNAUTO Courcelles", Adresse: "71 RUE DE COURCELLES",Code: "8ème arrondissement",Repere: "Indiquée par une pancarte lumineuse"},
    {Nom    : "COMMUNAUTO GUY PATIN", Adresse: "10 RUE GUY PATIN",Code: "10ème arrondissement",Repere: "A l'entrée de la grande galerie commerciale"},
    {Nom    : "ZIPCAR Ledru ROllin", Adresse: "151 AVENUE LEDRU ROLLIN",Code: "11ème arrondissement",Repere: "A l'entrée du parking sous terrain"},
    {Nom    : "COMMUNAUTO Parmentier", Adresse: "125 BIS AVENUE PARMENTIER",Code: "11ème arrondissement",Repere: "Indiquée par une pancarte lumineuse"},
    {Nom    : "ZIPCAR LYON", Adresse: "6 BIS RUE DE LYON",Code: "12ème arrondissement",Repere: "Indiquée par une pancarte lumineuse"},
    ] }
    ];


    $scope.dossierCourant = null;
    $scope.selectionDossier = function(dossier) {
        $scope.dossierCourant = dossier;
    }

});
    










