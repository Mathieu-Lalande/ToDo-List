import React, { useState } from "react";
import "./mentionslegales.css";

const MentionsLegales = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMentions = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button className="button" onClick={toggleMentions}>
        {isOpen ? "Hide legal notices" : "Show legal notices"}
      </button>
      <p className={`mentions ${isOpen ? "show-mentions" : ""}`}>
        Ce site est destiné à un usage personnel et familial uniquement. Il a été créé dans le but de fournir une
            application ToDoList avec une gestion des comptes localement via le storageLocal.
   
        Aucun achat n'est disponible sur cette web app.
        <br/><br/>
        <h3>Responsabilité</h3>
     
        L'utilisation de ce site et des informations qu'il contient se fait sous la seule responsabilité de
        l'utilisateur. Nous ne saurions être tenus pour responsables de tout dommage direct ou indirect résultant de
        l'utilisation de ce site.
        <br/><br/>
        <h3>Propriété intellectuelle</h3>
      
        Tous les droits de propriété intellectuelle relatifs au site et à son contenu (textes, images, etc.) sont
        réservés. Toute reproduction, représentation, diffusion ou utilisation de tout ou partie du site, sans
        autorisation préalable, est strictement interdite et constitue une contrefaçon susceptible d'engager la
        responsabilité civile et pénale de son auteur.
        <br/><br/>
        <h3>Protection des données personnelles</h3>
       
        Nous nous engageons à protéger les données personnelles de nos utilisateurs. Nous ne collectons que les
        informations nécessaires au fonctionnement de l'application et nous ne les utilisons qu'à des fins
        strictement internes. Conformément à la réglementation en vigueur, vous disposez d'un droit d'accès, de
        rectification et de suppression des données vous concernant.
        <br/><br/>
        <h3>Cookies</h3>
  
        Nous utilisons des cookies pour améliorer l'expérience utilisateur sur notre site. Les cookies sont de petits
        fichiers textes stockés sur votre ordinateur qui permettent de vous identifier lors de vos prochaines visites.
        Vous pouvez les désactiver à tout moment dans les paramètres de votre navigateur.
        <br/><br/>
        <h3>Modification des mentions légales</h3>
      
        Nous nous réservons le droit de modifier à tout moment les présentes mentions légales. Nous vous invitons donc
        à consulter régulièrement cette page pour vous tenir informé des éventuelles modifications.
        </p>
    </div>
  );
};

export default MentionsLegales;
