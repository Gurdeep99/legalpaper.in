import React from 'react'

const TitleArea = ({ data }) => {
    if (!data) {
        console.warn('TitleArea: missing data');
        return null; // skip rendering if data is missing
      }
    return (
        <>
            <section className="page-title-area">
                <div className="section-overlay">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="page-title-wrappper text-center">
                                    <h2 className="page-title">{data.title}</h2>
                                    <ul className="breadcrumb-menu">
                                        <li className="breadcrumb-menu-item">
                                            <a href={"/"}>Home</a>
                                        </li>
                                        <li className="breadcrumb-menu-item">
                                            <a href={data.link}>{data.title}</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default TitleArea