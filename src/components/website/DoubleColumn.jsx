import React from 'react';

const DoubleColumn = ({ data }) => {
  const images = data.image ? Object.values(data.image) : [];

  return (
    <div className="mx-auto" style={{ width: '70%', padding: '5%' }}>
      {/* Main image */}
      <div className="case-img mb-64">
        <img
          src={data.bigImage}
          alt="terms"
          className="img-fluid mx-auto d-block"
        />
      </div>

      {/* Title & description */}
      <div className="brife-bio-sec mb-5">
        <h3>{data.title || 'Title here'}</h3>
        {data.description?.map((item, index) => (
          <p className="mb-4" key={index}>
            {item}
          </p>
        ))}
      </div>

      {/* Image grid */}
      {images.length > 0 && (
        <div className="brife-bio-sec case-inner-img">
          <div className="row justify-content-center">
            {images.map((imgSrc, index) => (
              <div className="col-md-6 mb-4 mb-md-0" key={index}>
                <img
                  src={imgSrc}
                  alt={`image-${index}`}
                  className="img-fluid mx-auto d-block"
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default DoubleColumn;
