import React from 'react'

const Strip = ({data}) => {
  return (
    <div style={{backgroundColor: data.strip.background, padding: '70px'}}    >
       
            <div style={{display: 'flex', justifyContent: 'space-between', width: '70%', margin: 'auto'}}>
                {data.strip.data.map((item, index) => (
                <div key={index} style={{display: 'flex', flexDirection: 'column'}}>
                    <h3 style={{color: '#fff'}}>{item.title}</h3>
                    <p style={{color: '#fff'}}>{item.description}</p>
                </div>
                ))}
            </div>
    </div>
  )
}

export default Strip