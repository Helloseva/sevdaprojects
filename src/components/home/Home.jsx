import React from 'react'
import './home.css';
import Data from './Data';
import mp4 from '../../assets/constalation.mp4';
import ResourcesDisplay from '../resources/ResourcesDisplay'; 



const Home = () => {
  return (
    <section className='home_section' >
    <div className='home_bg'>
                <video autoPlay loop muted className='home_bg mp4'>
                  <source src={mp4} type='video/mp4' />
                </video>
                </div>
        <div className='home_container container grid'  id='home'>
            <div className='home_content grid'>
                
            
                <Data />
            </div>

            
        </div>
        <ResourcesDisplay /> {/* Display the ResourcesDisplay component here */}
    </section>
  )
}

export default Home