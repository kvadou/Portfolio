import React, { Component } from "react";
import { FaGithubAlt } from "react-icons/fa";

const PortfolioListContent = [
  {
    image: "image-1",
    title: "Matcht",
    url: "https://matcht1.herokuapp.com/",
    git: "https://github.com/kvadou/Matcht",
  },
  {
    image: "image-2",
    title: "Yoke",
    url: "https://yokee.herokuapp.com/",
    git: "https://github.com/kvadou/Yoke2",
  },
  {
    image: "image-3",
    title: "Budget Tracker",
    url: "https://budget-tr4cker.herokuapp.com/",
    git: "https://github.com/kvadou/Budget-Tracker",
  },
  {
    image: "image-4",
    title: "Workout Tracker",
    url: "https://w0rk0ut-tracker.herokuapp.com/",
    git: "https://github.com/kvadou/workout-tracker",
  },
  {
    image: "image-5",
    title: "Eat-Da-Burger",
    url: "https://eat-da-b0rger.herokuapp.com/",
    git: "https://github.com/kvadou/burger",
  },
  {
    image: "image-6",
    title: "Note Taker",
    url: "https://n0te-taker.herokuapp.com/",
    git: "https://github.com/kvadou/Note-Taker",
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
                  <h4>
                    <a
                      href={value.git}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {value.title}
                    </a>
                  </h4>
                  <div className="git-button">
                    <h2>
                      <a
                        href={value.git}
                        target="_blank"
                        rel="noopener noreferrer"
                        hover={false}
                        banner={true}
                      >
                        <FaGithubAlt />
                      </a>
                    </h2>
                  </div>
                  <div className="portfolio-button">
                    <a
                      className="rn-btn"
                      href={value.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Site
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
