import React from "react";
import { Collapse } from "@kunukn/react-collapse";

const CollapseSouSection = ({ title, contentData, isOpen, onToggle }) => {
  return (
    <div className="bg-container">
      <div className="t-div">
        <thead className="t-title">
          <th className="title-fc">{title}</th>
          <div className="t-child-div sou-sec-dif">
            <th>Catégories</th>
            <th>Sujets</th>
            <th>
              <button onClick={onToggle}>
                {isOpen ? "Réduire" : "Ouvrir"}
              </button>
            </th>
          </div>
        </thead>

        <Collapse isOpen={isOpen} className="tbody-content">
          {contentData.map((section, index) => (
            //crée ce param'contentData' va permettre de crée une nouvelle section en fonction de chaque
            //section de data disponible/fournis sans pourtant devoir recrée a la main en html si une nouvelle section/catégorie vois le jour
            <React.Fragment key={index}>
              <tr className="tr-content">
                <td>
                  <a href="/forum/category" className="link-category">
                    <h3>{section.header}</h3>
                  </a>
                  <p className="p-data">{section.description}</p>
                </td>
                <td>
                  <ul className="p-data">
                    {section.items.map((item, itemIndex) => (
                      <li key={itemIndex}>
                        <a href="/forum/Scategory" className="link-category">
                          <p>{item.text}</p>
                        </a>
                        <p>{item.timeStamp}</p>
                      </li>
                    ))}
                  </ul>
                </td>
                <td>{section.messagesCount}</td>
              </tr>
              {index < contentData.length - 1 && <hr className="split" />}
            </React.Fragment>
          ))}
        </Collapse>
      </div>
    </div>
  );
};

export default CollapseSouSection;
