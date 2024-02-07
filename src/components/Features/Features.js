import React from 'react'
import './Features.css'
import Card from './Card'
import data from './FeatureAPI'

// import pic1 from '../pic/b.png'
// import pic2 from '../pic/b.png'
// import pic3 from '../pic/gg1.png'
// import pic4 from '../pic/gg2.png'
// import pic5 from '../pic/gg3.png'

const Features = () => {
  return (
    <>
     <section className='features top'>
        <div className='container'>
            <div className='heading'>
                <h4>Features</h4>
                <h1>What I DO</h1>

                <div className='content grid'>
                    {data.map((val, index) => {
                        return <Card key={index} image={val.image} title={val.title} desc={val.desc} link1={val.link1} />
                    })}
                </div>
             

            </div>
        </div>
     </section>

        

        
      
    </>
  )
}

export default Features
