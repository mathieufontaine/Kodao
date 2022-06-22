import React from "react";

const Post = ({ post }) => {
  console.log(post);
  return (
    <div className="card">
      <div className="card_header">
        <img className="card_img" src={post.mainImage.asset.url} alt="" />
        {/* <h4 className="card_title">{post.title}</h4> */}
      </div>
      {/* <div className="card_content"> */}
      <div className="card_content">
        <h4 className="card_title">{post.title}</h4>
        <div className="card_infos">
          <div className="flex--column">
            <span className="card_date">
              {new Date(post.publishedAt).toLocaleDateString()}
            </span>
            <span className="card_author">{post.authorName}</span>
          </div>
          <div className="card_tags">
            {post.categories?.map((tag, index) => (
              <div key={index} className="card_tag">
                {tag}
              </div>
            ))}
          </div>
        </div>
        {/* <p className="card_text">
          {post.excerpt}
          <span className="card_more">Lire la suite..</span>
        </p> */}
      </div>
    </div>
  );
};

export default Post;
