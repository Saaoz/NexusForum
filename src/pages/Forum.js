import React from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import "../styles/Forum.css";
import useCollapsible from "../components/common/Collapse/UseCollapsible";
import CollapseSouSection from "../components/common/Collapse/CollapseSouSection";

function Forum() {
  const { isOpen, onToggle } = useCollapsible();


  const sectionData1 = {
    contentData: [
      {
        header: "Actualités",
        description: 
        "Vous trouverez ici tout ce qui concerne les actualités et maj du forum/site mais aussi des infra lié au jeux/sites/hardwares(maintenance, état des serveurs, ...)",
        items: [
          { text: "Actualités général", timeStamp: "Aujourd'hui - 11:55 par Erement" },
          { text: "Carnet de Bord", timeStamp: "Hier - 19:45 par Erement" },
          { text: "Etat des infrastructures", timeStamp: "Aujourd'hui - 10:10 par Erement" },
        ],
        messagesCount: 54962
      }
    ]
  };

  const sectionData2 = {
    contentData: [
      {
        header: "PC",
        description: "Vous trouverez ici tout ce qui concerne est en rapport avec les pc",
        items: [
          { text: "Discussions jeux vidéo", timeStamp: "Aujourd'hui - 11:55 par Erement" },
          { text: "Equipement/Hardware", timeStamp: "Hier - 19:45 par Erement" },
          { text: "Logiciel/Software", timeStamp: "Aujourd'hui - 10:10 par Erement" },
        ],
        messagesCount: 54962
      },
      {
        header: "Xbox/Psn",
        description: "Vous trouverez ici tout ce qui concerne est en rapport avec les consoles Xbox et Playstation",
        items: [
          { text: "Discussions jeux vidéo", timeStamp: "Aujourd'hui - 14:30:26 par Erement" },
          { text: "Equipement", timeStamp: "Aujourd'hui - 14:30:26 par Erement" },
          { text: "Discussion général Xbox/Psn", timeStamp: "Aujourd'hui - 14:30:26 par Erement" },
        ],
        messagesCount: 96254
      },
      {
        header: "Nintendo",
        description: "Vous trouverez ici tout ce qui concerne est en rapport avec les consoles Nintendo",
        items: [
          { text: "Discussions jeux vidéo", timeStamp: "Aujourd'hui - 14:30:26 par Erement" },
          { text: "Equipement", timeStamp: "Aujourd'hui - 14:30:26 par Erement" },
          { text: "Discussion général Nintendo", timeStamp: "Aujourd'hui - 14:30:26 par Erement" },
        ],
        messagesCount: 25496
      }
    ]
  };

  const sectionData3 = {
    contentData: [
      {
        header: "Developpement d'application web",
        description: "Question sur le developpement web ? Vous trouverez sans doute une réponse ici",
        items: [
          { text: "Front-end", timeStamp: "Aujourd'hui - 14:30:26 par Erement" },
          { text: "Back-end", timeStamp: "Aujourd'hui - 14:30:26 par Erement" },
          { text: "Design", timeStamp: "Aujourd'hui - 14:30:26 par Erement" },
        ],
        messagesCount: 456
      },
      {
        header: "Developpement d'application bureau",
        description: "Question sur le developpement d'application bureau ? Vous trouverez sans doute une réponse ici",
        items: [
          { text: "Interface Utilisateur", timeStamp: "Aujourd'hui - 14:30:26 par Erement" },
          { text: "Logique Métier", timeStamp: "Aujourd'hui - 14:30:26 par Erement" },
          { text: "Conception d'Interface", timeStamp: "Aujourd'hui - 14:30:26 par Erement" },
        ],
        messagesCount: 687
      },
      {
        header: "Developpement de jeux",
        description: "Question sur le developpement de jeu vidéo ? Vous trouverez sans doute une réponse ici",
        items: [
          { text: "Interface de Jeu", timeStamp: "Aujourd'hui - 14:30:26 par Erement" },
          { text: "Moteur de Jeu", timeStamp: "Aujourd'hui - 14:30:26 par Erement" },
          { text: "Conception de Jeu(game design)", timeStamp: "Aujourd'hui - 14:30:26 par Erement" },
        ],
        messagesCount: 45687
      }
    ]
  };

  return (
    <>
      <Header />
      <div className="main container">
        {/* premier container  */}
        <div className="title-container">
          <div>
            <h2>Forum Nexus</h2>
          </div>
        </div>

        <div className="annonce-container bg-container">
          <div className="panel-title">
            <h3>Maintenance Nexus </h3>
          </div>
          <div className="panel-content">
            <p>La maintenance aura lieu ce jeudi 31 mai à partir de 8 h 00.</p>
            <a href="/">Plus d'infos</a>
          </div>
        </div>
        <CollapseSouSection  
          title="Informations Et Annonces"
          contentData={sectionData1.contentData}
          isOpen={isOpen.a}
          onToggle={() => onToggle('a')}
        />

        <CollapseSouSection 
          title="Discussion général jeux"
          contentData={sectionData2.contentData}
          isOpen={isOpen.b}
          onToggle={() => onToggle('b')}
        />

        <CollapseSouSection 
          title="Discussion général dev"
          contentData={sectionData3.contentData}
          isOpen={isOpen.c}
          onToggle={() => onToggle('c')}
        />
      </div>
      
      <Footer />
    </>
  );
}

export default Forum;
