import React, { useEffect, useState } from "react";
import Newsitems from "./Newsitems";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  let mystyled = {
    color : props.mode === 'dark'?'white':'#183148',
    backgroundColor: props.mode === 'dark'?'#183148':'white'
   }  

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const updated = async () => {
    props.setProgress(0);

    // let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    let url = `http://localhost:8000/api/news/`;
    let data = await fetch(url);
    props.setProgress(30);
    let parsedData = await data.json();
    console.log(parsedData);
    // props.setProgress(70);
    // setArticles(parsedData.articles);
    setArticles(parsedData);
    // setTotalResults(parsedData.totalResults);
    // setLoading(false);
    // props.setProgress(100);
  };

  useEffect(() => {
    document.title = `${capitalizeFirstLetter(props.category)} - NewsUp`;
    updated();
    // eslint-disable-next-line
  }, []);

  const fetchMoreData = async () => {
    // this.setState({ page: page + 1 });
    // let url = `https://newsapi.org/v2/top-headlines?country=${
    //   props.country
    // }&category=${props.category}&apiKey=${props.apiKey}&page=${
    //   page + 1
    // }&pageSize=${props.pageSize}`;
    let url = `http://localhost:8000/api/news/`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    // setArticles(articles.concat(parsedData.articles));
    // setPage(page + 1);
    // setTotalResults(parsedData.totalResults);
  };

  return (
    <>
      {/* <h1
        className={`text-center text-${props.mode === 'light'?'dark':'light'}`}
        style={{margin: "40px 0px", marginTop: "90px"} }
      >
        NewsUp - Top {capitalizeFirstLetter(props.category)} Headlines
      </h1> */}
      {/* {loading && <Spinner />}
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={
          page + 1 > Math.ceil(totalResults / props.pageSize) ? "" : <Spinner />
        }
      > */}
        <div className="container" style={mystyled}>
          <div className="row">
            {articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <Newsitems
                    title={element.title ? element.title : ""}
                    description={element.description ? element.description : ""}
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                    author={element.author}
                    time={element.publishedAt}
                    source={element.source.name}
                  />
                </div>
              );
            })}
          </div>
        </div>
      {/* </InfiniteScroll> */}
      {/* <div className="my-2">
          <div className="container d-flex justify-content-between">
            <button
              disabled={page <= 1}
              type="button"
              className="btn btn-success"
              onClick={this.handlePrevClick}
            >
              &larr; Previous
            </button>
            <button
              disabled={
                page + 1 >
                Math.ceil(totalResults / props.pageSize)
              }
              type="button"
              className="btn btn-warning"
              onClick={this.handleNextClick}
            >
              Next &rarr;
            </button>
          </div>
        </div> */}
    </>
  );
};
News.defaultProps = {
  country: "in",
  category: "general",
  pageSize: 6,
};

News.propTypes = {
  country: PropTypes.string,
  category: PropTypes.string,
  pageSize: PropTypes.number,
};

export default News;
