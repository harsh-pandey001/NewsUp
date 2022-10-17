import React, { Component } from "react";
import Newsitems from "./Newsitems";

export class News extends Component {
  
 constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1
    };
  }
  async componentDidMount(){
     let url = "https://newsapi.org/v2/everything?q=tesla&from=2022-09-16&sortBy=publishedAt&apiKey=72e1bc647ef84ba38af1f3c66e756550";
     let data = await fetch(url);
     let parsedData = await data.json()
     console.log(parsedData);
     this.setState({articles: parsedData.articles} )
  }
  render() {
     return (
      <div className="container my-3">
        <h1>NewsUp - Top Headlines</h1>
        <div className="row">
          {this.state.articles.map((element)=>{
            return <div className="col-md-4" key={element.url}>
            <Newsitems 
              title={element.title ? element.title:""}
              description={element.description ? element.description: ""}
              imageUrl={element.urlToImage}
              newsUrl ={element.url}/>
          </div>
      
          }
          )}
          <div className="my-2">
            <div className="container d-flex justify-content-between">
            <button type="button" class="btn btn-success" onClick={handleprevClick}>&larr; Previous</button>
            <button type="button" class="btn btn-warning" onClick={handlenextClick}>Next &rarr;</button>
            </div>
          </div>
       
        </div>
      </div>
    );
  }
}

export default News;
