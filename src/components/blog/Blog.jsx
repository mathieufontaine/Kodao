import React from "react";

const Blog = () => {
  return (
    <div className="blog">
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
          <h3 className="section_heading">Articles</h3>
          <div className="article_wrapper">
            <div className="article">
              <img className="article_img" src="/images/pink.jpg" alt="" />
              <div className="article_content">
                <h4 className="article_title">Article 1</h4>
                <div className="article_infos">
                  <span className="article_date">13/06/2022</span>
                  <span className="article_author">Mathieu</span>
                </div>
                <p className="article_text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Fugit, dolorum? Voluptate tempora nobis sapiente ut est
                  exercitationem labore saepe soluta!
                  <span className="article_more">Lire la suite..</span>
                </p>
              </div>
            </div>
            <div className="article">
              <img className="article_img" src="/images/pink.jpg" alt="" />
              <div className="article_content">
                <h4 className="article_title">Article 1</h4>
                <div className="article_infos">
                  <span className="article_date">13/06/2022</span>
                  <span className="article_author">Mathieu</span>
                </div>
                <p className="article_text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Fugit, dolorum? Voluptate tempora nobis sapiente ut est
                  exercitationem labore saepe soluta!
                  <span className="article_more">Lire la suite..</span>
                </p>
              </div>
            </div>
            <div className="article">
              <img className="article_img" src="/images/pink.jpg" alt="" />
              <div className="article_content">
                <h4 className="article_title">Article 1</h4>
                <div className="article_infos">
                  <span className="article_date">13/06/2022</span>
                  <span className="article_author">Luca</span>
                </div>
                <p className="article_text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Fugit, dolorum? Voluptate tempora nobis sapiente ut est
                  exercitationem labore saepe soluta!
                  <span className="article_more">Lire la suite..</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section section--white">
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
      </section>
      <section className="section">
        <div className="container">
          <div className="cta">
            <div className="cta_text">
              <h3>
                Kodao.io vous aide à vous lancer dans le web3 dès maintenant !
              </h3>
              <p>
                Le Web3 permet de donner beaucoup plus de liberté et de pouvoir
                aux utilisateurs, créant ainsi une infinité de possibilité pour
                les organisations et leur communautés.
              </p>
              <p>
                Il est temps de construire, vendre, innover et partager !
                Lancez-vous dans le web3 dès maintenant !
              </p>
            </div>
            <div className="cta_btn">
              <a href="#contact">
                <button className="button" type="button">
                  <div className="button_effect"></div>
                  <span className="button_text">En savoir plus</span>
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
