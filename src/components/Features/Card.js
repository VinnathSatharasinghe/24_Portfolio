import React from 'react'
import {Link} from 'react-router-dom'

const card = (props) => {
  return (
    <>
    
    <div className='box2 btn_shadow'>
        <img src={props.image} />
            <h2>{props.title}</h2>            
               <p>{props.desc}</p>

              
                <button className='btn_shadow'>
                  <Link to ={props.link1}>Click</Link>    
                </button> 
               
                      
                {/* <li> <Link to ="/mu">kkk</Link> </li>        */}
                       {/* <i className='fas fa-arrow-right'></i> */}
    </div>     


    </>
  )
}

export default card
