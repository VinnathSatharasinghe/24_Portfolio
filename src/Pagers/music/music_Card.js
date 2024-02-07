import React from 'react'

const music_Card = (props) => {
  return (
    <>
      <div className='box3 btn_shadow'>
        <img src={props.image} />
            <h2>{props.title}</h2>            
               <p>{props.desc}</p>

              
                <button className='btn_shadow'>
                  <a href={props.song}>{props.bname}</a>  
                </button> 
               
      </div>     
    </>
  )
}

export default music_Card


