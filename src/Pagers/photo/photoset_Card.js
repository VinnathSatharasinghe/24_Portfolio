import React from 'react'

const photoset_Card = (props) => {
  return (
    <div>
        <div className='box4 btn_shadow'>
           <img src={props.image} />
            <h2>{props.title}</h2>            
               <p>{props.desc}</p>
      
                <button className=' btext btn_shadow'>
                  <a href={props.pic}>{props.bname}</a>  
                </button> 
               
        </div> 
    </div>
  )
}

export default photoset_Card
