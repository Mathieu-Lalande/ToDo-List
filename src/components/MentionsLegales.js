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
        {isOpen ? "Cacher les mentions légales" : "Voir les mentions légales"}
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

        Nous sommes engagés dans la protection des données personnelles de nos utilisateurs. Nous collectons uniquement les informations nécessaires au fonctionnement de l'application et nous les utilisons uniquement à des fins strictement internes. Nous ne stockons pas les données sur nos serveurs, elles sont stockées localement sur l'appareil de l'utilisateur, ce qui signifie que nous n'avons pas accès à ces données. Conformément à la réglementation en vigueur, vous disposez d'un droit d'accès, de rectification et de suppression des données vous concernant. Si vous souhaitez exercer l'un de ces droits, veuillez nous contacter par email à mathieu.lalandee@gmail.com.
        <br/><br/>
        <h3>Stockage local de données</h3>
Nous utilisons un stockage local de données pour stocker les informations nécessaires au fonctionnement de l'application sur l'appareil de l'utilisateur. Cette méthode ne nécessite pas l'utilisation de cookies tiers. Vous pouvez supprimer ces données à tout moment en utilisant les paramètres de l'application ou en supprimant l'application de votre appareil. Si vous avez des questions concernant le stockage local de données, veuillez nous contacter par email à mathieu.lalandee@gmail.com.
        <br/><br/>
        <h3>Modification des mentions légales</h3>
      
        Nous nous réservons le droit de modifier à tout moment les présentes mentions légales. Nous vous invitons donc
        à consulter régulièrement cette page pour vous tenir informé des éventuelles modifications.
        </p>
    </div>
  );
};

export default MentionsLegales;