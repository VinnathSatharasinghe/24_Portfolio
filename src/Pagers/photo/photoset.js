import React from 'react'
import Header from '../../components/Head/Header'
import './photoset.css'
import Card from './photoset_Card'
import data from './photosrt_API'

const photoset = () => {
  return (
    <div>
        <Header/>

        <section className='features top'>
        <div className='container'>
            <div className='heading'>
                <h4>Pictuers</h4>
                <h1>What I DO</h1>

                <div className='content grid'>
                    {data.map((val, index) => {
                        return <Card key={index} image={val.image} bname={val.bname} song={val.pic} />
                    })}
                </div>
             

            </div>
        </div>
     </section>
      
    </div>
  )
}

export default photoset
