import React from 'react';

const InfoDisc = ({ data }) => {
  if (!data) return null; // safeguard if data is undefined

  return (
    <div
      className="brife-bio-sec case-solution"
      style={{
        width: '60%',
        margin: '0 auto',
      }}
    >
      {/* Title */}
      <h3 style={{ textAlign: 'left', margin: '25px 0' }}>{data.title || 'Title here'}</h3>

      {/* Description paragraphs */}
      {Array.isArray(data.description) &&
        data.description.map((item, index) => (
          <p className="mb-4" key={index}>
            {item}
          </p>
        ))}

        <div style={{ margin: '0 40px' , textAlign: 'left' }}>
 {/* List */}
 {Array.isArray(data.list) && data.list.length > 0 && (
        <ul
          className="case-solution-list"
          style={{
            padding: 0,
            listStyleType: 'disc',
            margin: '0 auto',
            textAlign: 'left',
            display: 'inline-block',
          }}
        >
          {data.list.map((item, index) => (
            <li key={index} style={{ marginBottom: '0.5rem' }}>
              {item}
            </li>
          ))}
        </ul>
      )}
        </div>

     
    </div>
  );
};

export default InfoDisc;
