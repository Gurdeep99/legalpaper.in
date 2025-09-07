import React from 'react';

const MarqueStrip = () => {
  return (
    <div 
      style={{ 
        background: '#0a377f', 
        padding: '20px', 
        overflow: 'hidden',
        whiteSpace: 'nowrap', // Prevents wrapping of the images
      }}
    >
        <div style={{display: 'flex', justifyContent: 'center', width: '100%'}}>
            <h3 style={{color: '#fff', fontSize: '35px'}}>Trusted By over Million Users</h3>
        </div>
        <div 
          style={{ 
            display: 'flex', 
            paddingTop: "30px",
            paddingBottom: "30px",
            animation: 'scroll 20s linear infinite', // Inline animation
          }}
        >
            {/* Render images twice to create the seamless loop */}
            {Array.from({ length: 10 }).map((_, index) => (
                <img 
                    key={index}
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png" 
                    width={100} 
                    alt="hero-img" 
                    style={{
                      marginRight: '20px',
                      filter: 'grayscale(100%)', // Apply grey tint
                      transition: 'filter 0.3s ease', // Smooth transition for hover effect
                    }}
                />
            ))}
            {Array.from({ length: 10 }).map((_, index) => (
                <img 
                    key={`duplicate-${index}`}
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png" 
                    width={100} 
                    alt="hero-img" 
                    style={{
                      marginRight: '20px',
                      filter: 'grayscale(100%)', // Apply grey tint
                      transition: 'filter 0.3s ease', // Smooth transition for hover effect
                    }}
                />
            ))}
            {Array.from({ length: 10 }).map((_, index) => (
                <img 
                    key={`duplicate-${index}`}
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png" 
                    width={100} 
                    alt="hero-img" 
                    style={{
                      marginRight: '20px',
                      filter: 'grayscale(100%)', // Apply grey tint
                      transition: 'filter 0.3s ease', // Smooth transition for hover effect
                    }}
                />
            ))}
        </div>

        {/* Inline CSS for the animation and hover effect */}
        <style jsx>{`
          @keyframes scroll {
            0% {
              transform: translateX(0); /* Start from left side */
            }
            100% {
              transform: translateX(-100%); /* End on the left after scrolling all images */
            }
          }

          /* Remove the grey tint when hovered over */
          img:hover {
            filter: grayscale(0); /* Remove grey tint on hover */
          }
        `}</style>
    </div>
  );
}

export default MarqueStrip;
