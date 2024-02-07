import React from 'react'
import './resume.css'
import Card from './recard'
import ResumeApi from './resumeapi'

const Resume = () => {
  return (
    <>
        <section className='Resume' id='resume'>
            <div className='container top'>
                <div className='heading text-center'>
                    <h4>0 YEARS OF EXPERIENCE</h4>
                    <h1>My Resume</h1>
                    
                </div>

            <div className='content_section d_flex'>
                <div className='left'>

                    <div className='heading'>
                            <h4>2000-2000</h4>
                            <h1>Job EXPERIENCE</h1>
                    </div>

                    <div className ='content'>
                        {ResumeApi.map((val,id) => {
                            if(val.category === "experience") {
                            return <Card key={id} title={val.title} year={val.year} rate={val.rate} desc={val.desc} />
                         }

                       })}
                    </div>
                </div>


                <div className='left'>
                 <div className='heading'>
                  <h4>2000-2000</h4>
                  <h1>Education Qualification</h1>
                 </div>

                 <div className ='content'>
                  {ResumeApi.map((val,id) => {
                    if(val.category === "education") {
                     return<Card key ={id} title={val.title} year={val.year} rate={val.rate} desc={val.desc} />
                    }

                    })}
                 </div>
                </div>      
                    
            </div>
          </div>
        </section>
      
    </>
  )
}

export default Resume
