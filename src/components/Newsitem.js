import React, { Component } from "react";

export class Newsitem extends Component {
  timediff = (date)=>{
   
        var ndate = new Date(date);
        var currentTime = new Date();
        var timeDifference = currentTime-ndate;
        var timeDifferenceInHours = timeDifference / (1000 * 60 * 60);
        return Math.ceil(timeDifferenceInHours);
  }
  render() {
    let { title, description, imageurl, newsurl, author, date,source } = this.props;
    return (
      <div>
        <div className="card my-3">
          <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{zIndex:"1",left:"90%"}}>
            {source}
          </span>
          <img src={imageurl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title.slice(0, 45)}...</h5>
            <p className="card-text">{description.slice(0, 88)}...</p>
            <p className="card-text">
              <small className="text-body-secondary">
                By {author ? author : "Unknown"}, {this.timediff(date)} hours ago
              </small>
            </p>
            <a
              href={newsurl}
              target="_blank"
              rel="noreferrer"
              className="btn btn-sm btn-dark"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Newsitem;
