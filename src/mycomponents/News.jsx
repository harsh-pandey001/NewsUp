import React, { Component } from "react";
import Newsitems from "./Newsitems";

export class News extends Component {
  render() {
    return (
      <div className="container my-3">
        <h2>NewsMonkey - Top Headlines</h2>
        <div className="row">
          <div className="col-md-4">
            <Newsitems title="myTitle" description="mydesc" />
          </div>
          <div className="col-md-4">
            <Newsitems title="myTitle" description="mydesc" />
          </div>
          <div className="col-md-4">
            <Newsitems title="myTitle" description="mydesc" />
          </div>
          
          
         
        </div>
       
      </div>
    );
  }
}

export default News;
