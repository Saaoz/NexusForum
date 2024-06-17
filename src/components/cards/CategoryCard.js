import React from "react";

const CategoryCard = ({ contentData }) => {
  const getColorDotStyle = (state) => {
    switch (state) {
      case 1:
        return {
          backgroundColor: "green",
          width: "10px",
          height: "10px",
          borderRadius: "50%",
        };
      case 2:
        return {
          backgroundColor: "orange",
          width: "10px",
          height: "10px",
          borderRadius: "50%",
        };
      case 3:
        return {
          backgroundColor: "red",
          width: "10px",
          height: "10px",
          borderRadius: "50%",
        };
      default:
        return {
          backgroundColor: "gray",
          width: "10px",
          height: "10px",
          borderRadius: "50%",
        };
    }
  };

  return (
    <>
      {contentData.map((section, index) => (
        <React.Fragment key={index}>
          <div className="category-card">
            <div className="title-section">
              <h2> {section.title} </h2>
              <p className="section-state"> {section.state} </p>
            </div>
            <div className="body-section">
              <p>Dernière activité : {section.lastActivity} </p>
              <p>Quantité de topic : {section.topicQuantity} </p>
            </div>
          </div>
        </React.Fragment>
      ))}
    </>
  );
};

export default CategoryCard;
