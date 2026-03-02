"use client";

import "./index.scss";

export const Tags: React.FC<{ tags: string[] }> = ({ tags }) => {
  return (
    <div className="tags">
      {tags.map(tag => (
        <span key={tag} className="tags__item">
          {tag}
        </span>
      ))}
    </div>
  );
};
