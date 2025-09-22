"use client";
import React, { useState } from 'react';

const History = ({ data: dataMap }) => {
  const { title, tabs, body, bottom } = dataMap;
  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
      <section className="history-section">
        <div className="section-overlay ptb-140">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <h3 className="sec-title text-center mb-64 mt-text-white">{title}</h3>
              </div>

              <div className="col-sm-12">
                <div className="history-tab">
                  {/* Tabs */}
                  <nav>
                    <div className="nav nav-tabs d-flex justify-content-center flex-wrap" role="tablist">
                      {tabs.map((tab, index) => (
                        <button
                          key={tab}
                          className={`nav-link ${activeTab === index ? 'active' : ''}`}
                          type="button"
                          onClick={() => setActiveTab(index)}
                        >
                          {tab}
                        </button>
                      ))}
                    </div>
                  </nav>

                  {/* Tab Content */}
                  <div className="tab-content mt-bg-light-white">
                    {tabs.map((tab, index) => {
                      const tabData = body[tab];
                      return (
                        <div
                          key={tab}
                          className={`tab-pane fade ${activeTab === index ? 'show active' : ''}`}
                        >
                          <div className="row">
                            <div className="col-xl-6">
                              <div className="history-tab-details">
                                <div className="history-tab-img">
                                  {tabData.image && <img src={tabData.image} alt={tabData.title || tab} />}
                                </div>
                              </div>
                            </div>
                            <div className="col-xl-6">
                              <div className="history-tab-details">
                                <div className="history-tab-content">
                                  <h3>{tabData.title || 'Title here'}</h3>
                                  <p>{tabData.description || 'Description here'}</p>
                                  {tabData.button?.link && (
                                    <a href={tabData.button.link} className="read-more-btn">
                                      {tabData.button.text || 'Read More'}{' '}
                                      {tabData.button.icon && <i className={tabData.button.icon}></i>}
                                    </a>
                                  )}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Call-to-Action */}
      {bottom && (
        <section className="history-call bg-dark-white">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="call-us">
                  <p className="text-center">
                    {bottom.title}{' '}
                    {bottom.button?.link && (
                      <a href={bottom.button.link}>
                        {bottom.button.text}{' '}
                        {bottom.button.icon && <i className={bottom.button.icon}></i>}
                      </a>
                    )}
                  </p>
                  <hr className="hr" />
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default History;
