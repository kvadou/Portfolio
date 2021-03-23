import React, { Component } from "react";

const PortfolioListContent = [
  {
    image: "image-1",
    category: "Development",
    title: "Matcht",
  },
  {
    image: "image-2",
    category: "Development",
    title: "Yoke",
  },
  {
    image: "image-3",
    category: "Development",
    title: "Budget Tracker",
  },
  {
    image: "image-4",
    category: "Development",
    title: "Workout Tracker",
  },
  {
    image: "image-5",
    category: "Development",
    title: "Eat-Da-Burger",
  },
  {
    image: "image-6",
    category: "Development",
    title: "Note Taker",
  },
];

class PortfolioList extends Component {
  render() {
    const { column, styevariation } = this.props;
    const list = PortfolioListContent.slice(0, this.props.item);
    return (
      <React.Fragment>
        {list.map((value, index) => (
          <div className={`${column}`} key={index}>
            <div className={`portfolio ${styevariation}`}>
              <div className="thumbnail-inner">
                <div className={`thumbnail ${value.image}`}></div>
                <div className={`bg-blr-image ${value.image}`}></div>
              </div>
              <div className="content">
                <div className="inner">
                  <p>{value.category}</p>
                  <h4>
                    <a href="/portfolio-details">{value.title}</a>
                  </h4>
                  <div className="portfolio-button">
                    <a className="rn-btn" href="https://github.com/kvadou">
                      View Details
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </React.Fragment>
    );
  }
}
export default PortfolioList;
