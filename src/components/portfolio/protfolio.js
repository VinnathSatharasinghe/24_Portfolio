import React from 'react'
import './portfoli.css'
import Card from './cardpro'
import protfolio_data from './prof_API'
import Navbar1 from "../Head/Header3.jsx";

const protfolio = () => {
  return (
    <>
        <section className='portfolio top' id='portfolio'>
        <Navbar1/>
            <div className='container'>
                <div className='heading text-center'>
                    <h4>Come and Check out My Portfolio</h4>
                     <h1>My Protfolio</h1>
                </div>

                <div className='content grid'>
                    {protfolio_data.map((val, index) => {
                        return <Card key={index} image={val.image} category={val.category} title={val.title} />
                    })}
                    
                </div>
            </div>
        </section>
      
    </>
  )
}

export default protfolio
