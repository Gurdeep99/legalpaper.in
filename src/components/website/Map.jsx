import React from 'react'

const Map = ({data}) => {
    return (
        <section className="contact-map-section">
            <div className="container-fluid px-0">
                <div className="row">
                    <div className="col">
                        <div className="contact-map-location">
                            <iframe
                                src={data.map}
                                width="100%"
                                height={650}
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Map