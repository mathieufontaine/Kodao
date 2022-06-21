import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import imageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react";
import sanityClient from "../client.js";
import Cta from "./Cta";

const builder = imageUrlBuilder(sanityClient);

function urlFor(source) {
  return builder.image(source);
}
const SinglePost = () => {
  let { slug } = useParams();
  const [post, setPost] = useState(null);
  const [isLoading, setIsLoading] = useState();

  useEffect(() => {
    fetchData();
  }, [slug]);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const data = await sanityClient.fetch(
        `*[slug.current == "${slug}"]{
        title, 
        slug,
        publishedAt,
        categories,
        excerpt,
        mainImage{
          asset->{
            url}},
        body,
        "authorName":author->name,
        "authorImage": author->image,
      }`
      );
      console.log(data);
      setPost(data[0]);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  return (
    <main>
      {!isLoading && post !== null && (
        <article className="article">
          <header className="section section--hero">
            <img
              className="hero_img"
              src={urlFor(post.mainImage?.asset.url).url()}
              alt={post.title}
            />
            <h1 className="hero_title">{post.title}</h1>
          </header>
          <section className="section section--white">
            <div className="container">
              <div className="article_content">
                {/* {article.body.map((text, index) => (
            <p key={index} className="article_body">
              {text[0].children[0].markes.text}
            </p>
          ))} */}
                <BlockContent
                  blocks={post.body}
                  projectId="k53e7haa"
                  dataset="production"
                />
              </div>
              <div className="article_infos">
                <p className="article_date">Puublié le {post.publishedAt}</p>
                <div className="author">
                  <img
                    className="author_img"
                    src={urlFor(post.authorImage).url()}
                    alt={post.title}
                  />
                  <p className="author_name">Par {post.authorName}</p>
                </div>
              </div>
            </div>
          </section>
          <Cta />
        </article>
      )}
    </main>
  );
};

export default SinglePost;
