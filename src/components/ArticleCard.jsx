import React from "react";
import "./ArticleCard.css";

export default function ArticleCard({ category, title, excerpt, imageSrc, link }) {
  return (
    <div className="article-card">
      <div className="article-image" style={{ backgroundImage: `url(${imageSrc})` }} />
      <div className="article-content">
        <span className="article-category">{category}</span>
        <h3 className="article-title">{title}</h3>
        <p className="article-excerpt">{excerpt}</p>
        <a href={link} className="article-link">
          Read more →
        </a>
      </div>
    </div>
  );
}