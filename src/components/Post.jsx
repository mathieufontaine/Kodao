import React from "react";

const Post = ({ post }) => {
  return (
    <div className="card">
      <img className="card_img" src={post.mainImage.asset.url} alt="" />
      <div className="card_content">
        <h4 className="card_title">{post.title}</h4>
        <div className="card_infos">
          <span className="card_date">{post.publishedAt}</span>
          <span className="card_author">{post.author}</span>
        </div>
        <p className="card_text">
          {post.excerpt}
          <span className="card_more">Lire la suite..</span>
        </p>
      </div>
    </div>
  );
};

export default Post;
