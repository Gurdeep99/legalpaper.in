import React from 'react'

const Hero = ({ data = {} }) => {
  if (!data) {
    console.warn('Hero: missing data');
    return null; // skip rendering if data is missing
  }

  return (
    <section
      className="hero-section bg-black"
      style={{
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${data?.background})`,
      }}
    >
      <div className="section-overlay pt-240 pb-140">
        <div className="container">
          <div className="row">
            {/* hero image */}
            <div className="col-lg-5">
              <div className="hero-img">
              <img src={data?.image} alt="hero-img" width={500} height={500} />
              </div>
            </div>

            {/* hero content */}
            <div className="col-lg-6 offset-lg-1 order-first order-lg-1">
              <div className="hero-content">
                {data.subTitle && (
                  <span className="hero-tagline">{data.subTitle}</span>
                )}
                {data.title && (
                  <h1 className="hero-title tx-white">{data.title}</h1>
                )}
                {data.description && <p>{data.description}</p>}

                {data.button?.text && (
                  <a href={data.button.link} className="mt-btn">
                    {data.button.text}
                    {data.button.icon && <i className={data.button.icon} />}
                  </a>
                )}

                {/* site info */}
                {data.siteInfo?.length > 0 && (
                  <ul className="hero-site-info">
                    {data.siteInfo.map((info, idx) => (
                      <li
                        key={idx}
                        className={`hero-single-site-info site-info${idx + 1}`}
                      >
                        <h3 className="tx-white">{info.value}</h3>
                        <span>{info.title}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
