import React from 'react'
import Header from '../../components/Head/Header'

import Card from './music_Card'
import data from './music_API'

const music = () => {
  return (
    <div>
      <Header/>
  
      <section className='features top'>
        <div className='container'>
            <div className='heading'>
                <h4>Music</h4>
                <h1>What I DO</h1>

                <div className='content grid'>
                    {data.map((val, index) => {
                        return <Card key={index} image={val.image} title={val.title} desc={val.desc} bname={val.bname} song={val.song} />
                    })}
                </div>
             

            </div>
        </div>
     </section>

  
    </div>
  )
}

export default music