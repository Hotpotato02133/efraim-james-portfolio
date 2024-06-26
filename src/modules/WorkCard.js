import React from "react";
import "./WorkCard.css";

const WorkCard = (props) => {
  const sourceCode = () => {
    window.open(props.linkSite);
    console.log("click");
  };
  const siteCode = () => {
    window.open(props.linkGit);
    console.log("click");
  };

  return (
    <div className="col-md-6 pb-5">
      <div className="col-md-12">
        <div className="quadro">
          <img style={{ borderRadius: '16px'}} src={props.src} alt="teste" width={"100%"} />
        </div>
      </div>
      <div className="col-md-12">
        <h2 className="heading">{props.heading}</h2>
        <p className="description">{props.description}</p>
        <div className="buttons">
          <button className="project_button" onClick={sourceCode}>
            Demo
          </button>
          <button className="project_button" onClick={siteCode}>
            Github
          </button>
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
