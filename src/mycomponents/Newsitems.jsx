import React from "react";
import img from "./download.jpeg";

const Newsitems = (props) =>{

    let { title, description, imageUrl, newsUrl, author, time,mode, source} = props;
    return (
      <>
        <div className={`card  ${mode === 'light'?'text-white':'text-black'} mb-2 `  }>
          <button type="button" className="btn btn-primary position-relative" >
            {source}
          </button>
          
          {console.log(imageUrl)}
          <img
            src={!imageUrl ? img : imageUrl}
            className="card-img-top"
            alt="..."
          />
          <div className={`card-body ${mode === 'light'?"bg-dark":"bg-white"}  `}>
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text">
              <small className="text-muted">
                by {!author ? "Unknown" : author} on{" "}
                {new Date(time).toGMTString()}
              </small>
            </p>
            <a
              href={newsUrl}
              target="_blank"
              className="btn btn-sm btn-primary"
            >
              Read More
            </a>
          </div>
        </div>
      </>
    );

}

export default Newsitems;
