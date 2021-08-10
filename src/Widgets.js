import React from "react";
import "./Widgets.css";
import InfoIcon from "@material-ui/icons/Info";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

function Widgets() {
  const newsArticle = (heading, subtitle) => (
    <div className="widgets__article">
      <div className="widgets__articleLeft">
        <FiberManualRecordIcon />
      </div>
      <div className="widgets__articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );

  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>

      {newsArticle(
        "Instagram makes under-16s' accounts private by default",
        "Top News - 2000 readers"
      )}

      {newsArticle(
        "Bezos' $2bn offer to get back in race to the Moon",
        "Business News - 500 readers"
      )}

      {newsArticle(
        "Tech giants' profits soar as pandemic boom continues",
        "Tech News - 500 readers"
      )}

      {newsArticle(
        "Twitter accused of inaction on anti-Semitic tweets",
        "Tech News - 500 readers"
      )}

      {newsArticle(
        "Indians turn to crowdfunding to pay Covid bills",
        "Business News - 500 readers"
      )}

      {newsArticle(
        "Tesla profit surge driven by record car deliveries",
        "Business News - 500 readers"
      )}
    </div>
  );
}

export default Widgets;
