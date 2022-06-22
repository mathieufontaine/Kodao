import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import imageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react";
import sanityClient from "../client.js";
import Cta from "./Cta";
import getYoutubeId from "get-youtube-id";

const builder = imageUrlBuilder(sanityClient);

function urlFor(source) {
  return builder.image(source);
}

const BlockRenderer = props => {
  const { style = "normal" } = props.node;

  if (/^h\d/.test(style)) {
    const level = style.replace(/[^\d]/g, "");
    return React.createElement(
      style,
      { className: `article_h${level}` },
      props.children
    );
  }

  if (style === "blockquote") {
    return <blockquote>- {props.children}</blockquote>;
  }

  // Fall back to default handling
  return BlockContent.defaultSerializers.types.block(props);
};

const serializers = {
  types: {
    block: BlockRenderer,
    youtube: ({ node }) => {
      const id = getYoutubeId(node.url);
      const url = `https://www.youtube.com/embed/${id}`;
      if (!id) {
        return <div>Missing Youtube URL</div>;
      }
      return (
        <iframe
          className="article_video"
          src={url}
          title="YouTube Preview"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullscreen
        ></iframe>
      );
    }
    // h2: ({ children }) => <h2 className="article_heading">{children}</h2>
  },
  marks: {
    highlight: ({ children }) => <mark>{children}</mark>,
    link: ({ children, mark }) =>
      mark.blank ? (
        <a href={mark.href} target="_blank" rel="noopener noreferer">
          {children}
        </a>
      ) : (
        <a href={mark.href}>{children}</a>
      ),
    internalLink: ({ children, mark }) => {
      const { slug = {} } = mark;
      const href = `/blog/${slug.current}`;
      return (
        <a href={href} target="_blank" rel="noopener noreferer">
          {children}
        </a>
      );
    }
  }
};

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
        body[]{
          ...,
          markDefs[]{
            ...,
            _type == "internalLink" => {
              "slug": @.reference->slug
            }
          }
        },
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
          <header className="hero">
            <img
              className="hero_img"
              src={urlFor(post.mainImage?.asset.url).url()}
              alt={post.title}
            />
            <div className="hero_headings">
              <div className="flex-column">
                <h1 className="hero_title">{post.title}</h1>
                <p className="hero_date">
                  Publié le {new Date(post.publishedAt).toLocaleDateString()}
                </p>
              </div>
              {/* <div className="hero_infos"> */}
              <div className="author">
                <img
                  className="author_img"
                  src={urlFor(post.authorImage).url()}
                  alt={post.title}
                />
                <p className="author_name">Par {post.authorName}</p>
              </div>
            </div>
          </header>
          {/* </se> */}
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
                  serializers={serializers}
                  // imageOptions={{ w: "auto", h: "300px", fit: "max" }}
                />
              </div>
              <div className="article_infos">
                <p className="article_date">Publié le {post.publishedAt}</p>
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
