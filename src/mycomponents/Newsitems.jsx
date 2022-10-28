import React from "react";
import img from "./download.jpeg";

const Newsitems = (props) =>{

    let { title, description, imageUrl, newsUrl, author, time, source} = props;
    return (
      <>
        <div className="card">
          <button type="button" className="btn btn-primary position-relative" >
            {source}
          </button>
          <img
            src={!imageUrl ? img : imageUrl}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
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
