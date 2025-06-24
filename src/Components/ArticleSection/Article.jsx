import React from "react";
import "./article.css";
import ArticleContainer from "./ArticleContainer/ArticleContainer";
const Article = () => {
  return (
    <>
      <div className="main__article">
        <div className="article__section">
          <div className="article__text">
            <h1>
              Explain <span>Health</span> Advice and Update
            </h1>
            <h6>See All</h6>
          </div>
          <ArticleContainer />
        </div>
      </div>
    </>
  );
};

export default Article;
