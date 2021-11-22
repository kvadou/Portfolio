import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

class TabsTwo extends Component {
  render() {
    let tab1 = "Technical skills",
      tab2 = "Experience",
      tab3 = "Education & Certification";
    const { tabStyle } = this.props;
    return (
      <div>
        {/* Start Tabs Area */}
        <div className="tabs-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <Tabs>
                  <TabList className={`${tabStyle}`}>
                    <Tab>{tab1}</Tab>
                    <Tab>{tab2}</Tab>
                    <Tab>{tab3}</Tab>
                  </TabList>

                  <TabPanel>
                    <div className="single-tab-content">
                      <ul>
                        <li>
                          <a href="/service">
                            Programming Languages <span> </span>
                          </a>
                          HTML, CSS, JavaScript, Node
                        </li>
                        <li>
                          <a href="/service">
                            Libraries & Frameworks<span> </span>
                          </a>
                          React, Redux, Bootsrap, jQuery
                        </li>
                        <li>
                          <a href="/service">
                            Databases <span> </span>
                          </a>
                          MySQL, MongoDB
                        </li>
                      </ul>
                    </div>
                  </TabPanel>

                  <TabPanel>
                    <div className="single-tab-content">
                      <ul>
                        <li>
                          <a href="/service">
                            Senior Talent Acquisition Partner
                            <span> - Electric</span>
                          </a>{" "}
                          2021 - Current
                        </li>
                        <li>
                          <a href="/service">
                            Talent Advocate<span> - Nerdery</span>
                          </a>{" "}
                          2017 - 2021
                        </li>
                        <li>
                          <a href="/service">
                            Recruiting Manager
                            <span> - Robert Half Technology</span>
                          </a>{" "}
                          2014 - 2017
                        </li>
                      </ul>
                    </div>
                  </TabPanel>

                  <TabPanel>
                    <div className="single-tab-content">
                      <ul>
                        <li>
                          <a href="/service">
                            University of Minnesota - 2021
                            <span> </span>
                          </a>{" "}
                          Full Stack Web Development Certificate
                        </li>
                        <li>
                          <a href="/service">
                            Bethel University - 2005
                            <span> </span>
                          </a>{" "}
                          Business: Marketing
                        </li>
                      </ul>
                    </div>
                  </TabPanel>
                </Tabs>
              </div>
            </div>
          </div>
        </div>
        {/* End Tabs Area */}
      </div>
    );
  }
}

export default TabsTwo;
