import Image from 'next/image'
import React from 'react'

const Hero = ({data}) => {

  return (
    <section className="hero-section bg-black" style={{ backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat',  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${data.hero.background})`}}>
      <div className="section-overlay pt-240 pb-140">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="hero-img">
                <Image src={data.hero.image} width={500} height={500} alt="hero-img" />
              </div>
            </div>
            <div className="col-lg-6 offset-lg-1 order-first order-lg-1">
              <div className="hero-content">
                <span className="hero-tagline">
                  {data.hero.subTitle}
                </span>
                <h1 className="hero-title tx-white">
                  {data.hero.title}
                </h1>
                <p>
                  {data.hero.description}
                </p>
                <a href={data.hero.button.link} className="mt-btn">
                  {data.hero.button.text}
                  <i className={data.hero.button.icon} />
                </a>
                <ul className="hero-site-info">
                  <li className="hero-single-site-info site-info1">
                    <h3 className="tx-white">{data.hero.siteInfo[0].value}</h3>
                    <span>{data.hero.siteInfo[0].title}</span>
                  </li>
                  <li className="hero-single-site-info site-info3" />
                  <li className="hero-single-site-info site-info2">
                    <h3 className="tx-white">{data.hero.siteInfo[1].value}</h3>
                    <span>{data.hero.siteInfo[1].title}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero