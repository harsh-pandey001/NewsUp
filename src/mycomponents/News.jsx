import React, { Component } from "react";
import Newsitems from "./Newsitems";
import Spinner from "./Spinner";


export class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }
  async componentDidMount() {
    let url =
      `https://newsapi.org/v2/everything?domains=wsj.com&apiKey=72e1bc647ef84ba38af1f3c66e756550&page=1&pageSize=${this.props.pageSize}`;
      this.setState({loading:true});
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading : false

    });
  }

  handlePrevClick = async () => {
    console.log("previous called");
    let url = `https://newsapi.org/v2/everything?domains=wsj.com&apiKey=72e1bc647ef84ba38af1f3c66e756550&page=${
      this.state.page - 1
    }&pageSize=${this.props.pageSize}`;
    this.setState({loading:true});
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles,
      loading : false
    });
  };
  handleNextClick = async () => {
    console.log("Next called");
    if (!this.state.page + 1 > Math.ceil(this.state.totalResults /this.props.pageSize)) {
      let url = `https://newsapi.org/v2/everything?domains=wsj.com&apiKey=72e1bc647ef84ba38af1f3c66e756550&page=${
        this.state.page + 1
      }&pageSize=${this.props.pageSize}`;
      this.setState({loading:true});
      let data = await fetch(url);
      let parsedData = await data.json();
      this.setState({
        page: this.state.page + 1,
        articles: parsedData.articles,
        loading : false
      });
    }

  };
  render() {
    return (
      <div className="container my-3">
        <h1 className="text-center my-3">NewsUp - Top Headlines</h1>
        {this.state.loading && <Spinner/>}
        <div className="row">
          {!this.state.loading && this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <Newsitems
                  title={element.title ? element.title : ""}
                  description={element.description ? element.description : ""}
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                />
              </div>
            );
          })}
          <div className="my-2">
            <div className="container d-flex justify-content-between">
              <button
                disabled={this.state.page <= 1}
                type="button"
                className="btn btn-success"
                onClick={this.handlePrevClick}
              >
                &larr; Previous
              </button>
              <button
              disabled ={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)}
                type="button"
                className="btn btn-warning"
                onClick={this.handleNextClick}
              >
                Next &rarr;
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default News;
