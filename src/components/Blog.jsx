import React, { useState, useEffect } from "react";
import sanityClient from "../client";
import Post from "./Post";
import Cta from "./Cta";
import { Link } from "react-router-dom";

const Blog = () => {
  const [postData, setPostData] = useState([]);
  const [isLoading, setIsLoading] = useState();

  console.log(postData);
  useEffect(() => {
    setIsLoading(true);
    sanityClient
      .fetch(
        `*[_type == "post"]{
         title, 
         slug,
         mainImage{asset->{url},alt},
         body, 
         excerpt,
         publishedAt,
         "categories": categories[]->title,
         "authorName":author->name,
       }`
      )
      // .then(data => console.log(data))
      .then(data => setPostData(data))
      .then(() => setIsLoading(false))
      .catch(error => console.log(error));
  }, []);

  return (
    <main className="blog">
      <section className="section">
        <div className="container">
          <div className="blog_text">
            <h1 className="blog_title">Kodao.io Blog</h1>
            <h2 className="blog_subtitle">
              Découvrez nos derniers articles sur le blog de Kodao consacré au
              Web3.0 !
            </h2>
            <img
              className="blog_line"
              src="/images/other/Ligne-purple.png"
              alt="web3 communities"
            />
          </div>
        </div>
      </section>
      <section className="section section--white">
        <div className="container">
          {/* <h3 className="section_heading">Articles</h3> */}
          <div className="card_wrapper">
            {!isLoading &&
              postData?.map((post, index) => (
                <Link to={"/blog/" + post.slug.current} key={post.slug.current}>
                  <Post key={index} post={post} />
                </Link>
              ))}
          </div>
        </div>
      </section>
      {/* <section className="section section--white">
        <div className="container">
          <h3>Pourquoi le Web3 ?</h3>
          <p>
            Le Web3 correspond au Web décentralisé, qui signifie que les données
            d'un utilisateur ne transitent plus à travers les serveurs d'un
            intéremédiaire mais via un réseau totalement décentralisé
            (blockchain). Les données sont anonymes et possédées par
            l'utilisateur.
          </p>
          <p>
            Le Web3 permet de donner beaucoup plus de liberté et de pouvoir aux
            utilisateurs, créant ainsi une infinité de possibilité pour les
            organisations et leur communautés.{" "}
          </p>
        </div>
      </section> */}
      <Cta />
    </main>
  );
};

export default Blog;
