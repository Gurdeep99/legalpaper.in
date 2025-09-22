import React from 'react';
import './style.css';

const MarqueeStrip = ({ data }) => {
  if (!data?.items?.length) return null;

  // Duplicate items to make the scroll seamless
  const logos = [...data.items, ...data.items, ...data.items, ...data.items];

  return (
    <>
      {data.type === 1 ? <div className="marquee-container">
        <h3 className="marquee-title">{data.title}</h3>
        <div className="marquee-track">
          {logos.map((item, index) => (
            <img
              key={index}
              src={item.image}
              alt="logo"
              className="marquee-logo"
            />
          ))}
        </div>
      </div> : data.type == 2 ? <section className="brand-section pb-140 bg-light-white">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="call-us">
                <hr className="hr" />
              </div>
            </div>
            <div className="col-sm-12">
              <div className="brand-slider owl-carousel owl-theme">
                {data.items.map((item, index) => (
                  <div key={index} className="item">
                    <div className="brand-item">
                      <img src={item.image} alt="brand" width={100} height={60}/>
                    </div>

                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section> : null}
    </>
  );
};

export default MarqueeStrip;
