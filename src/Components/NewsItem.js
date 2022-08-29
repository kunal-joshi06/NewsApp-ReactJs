import React from "react";

const NewsItem =(props)=> {
  
    let { title, description, imageUrl, url, author, date, source } =
      props;
    return (
      <div className="my-3 mx-4 newsCard">
        <div className="card" style={{ width: "18rem" }}>
          <img src={imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <span className="badge rounded-pill bg-success">{source}</span>
            <p className="card-text">{description}</p>
            <p className="card-text">
              <small className="text-muted">
                By: {author ? author : "Unknown"} on{" "}
                {new Date(date).toGMTString()}
              </small>
            </p>
            <a
              href={url}
              target="_blank noreferrer"
              className="btn btn-sm categoryBtn"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  
}

export default NewsItem;
