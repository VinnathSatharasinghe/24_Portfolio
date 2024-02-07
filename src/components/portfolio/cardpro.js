import React, { useState } from 'react'

const Cardpro = (props) => {
  const [model, setModel] = useState(false)

  const toggleModal = () => {
    setModel(!model)
  }
  return (
    <>
        <div className='box btn_shadow'>
            <div className='img'>
             <img src={props.image} onClick={toggleModal} />
            </div>

            <div className='title'>
             <h2 onClick={toggleModal}>{props.title}</h2>
              <a href="#popup" className='arrow' onClick={toggleModal}>
                <i className='fas fa-arrow-right'></i>
              </a>
            </div>

            <div className='category d_flex'>
              <span onClick={toggleModal}>{props.category}</span>  
            </div>


              
        </div>

      {model &&(
        <div className='model'>
            <div onClick={toggleModal} className='overlay'></div>
             <div className='model-content d_flex'>
                <div className='model-img left'>
                 
                </div>

                <div className='model-img'>
                <img src={props.image} />
                </div>

                

                <div className='model-text'>
                    <span>Portfolio - Design</span>
                    <h1>{props.title}</h1>
                    <p>{props.category}</p>

                    <div className='btn_gg'>
                        
                        <button className='button_shadow'>
                            View this <i className='fas fa-chevron-right'></i>
                        </button>

                        <button className='close-model button_shadow' onClick={toggleModal}>
                          <i className='fas fa-times'></i>
                        </button>
                    </div>
                </div>

             </div>

        </div>

      )}
    </>
  )
}

export default Cardpro
