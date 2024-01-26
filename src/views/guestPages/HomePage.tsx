import { useState } from 'react'
import '../../Styles/guestPages/HomePage.css'
import { Link } from 'react-router-dom'

function HomePage() {
  const [ activeSlide, setActiveSlide ] = useState(0)
  const handleSlideChange = (index: number) => {
    setActiveSlide(index)
  }

  const videoSlider = [
    1,
    2,
    3,
    4
  ]

  const slideContent = [
    {
      resouce: 1,
      title: 'Service 1',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam quod neque explicabo nisi praesentium facilis, repellendus maxime iste dignissimos, unde repellat repudiandae eos illo enim fugit odio aspernatur magnam minus.'
    },
    {
      resouce: 2,
      title: 'Service 2',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam quod neque explicabo nisi praesentium facilis, repellendus maxime iste dignissimos, unde repellat repudiandae eos illo enim fugit odio aspernatur magnam minus.'
    },
    {
      resouce: 3,
      title: 'Service 3',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam quod neque explicabo nisi praesentium facilis, repellendus maxime iste dignissimos, unde repellat repudiandae eos illo enim fugit odio aspernatur magnam minus.'
    },
    {
      resouce: 4,
      title: 'Service 4',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam quod neque explicabo nisi praesentium facilis, repellendus maxime iste dignissimos, unde repellat repudiandae eos illo enim fugit odio aspernatur magnam minus.'
    }
  ]

  return (
    <div className='text-color'>
      <header>
        <a href="#" className="logo">Odonto</a>
        <div className="navbar-btn"></div>
        <div className="menu">
          <div className="menu-items">
            <a href="#">Home</a>
            <a href="#">Nosotros</a>
            <Link to='/login'>Login</Link>
          </div>
        </div>
      </header>

      <section className="home">
        {
          videoSlider.map((videoSrc, index) => (
            <video key={index} className={`video-slide ${index === activeSlide ? 'active' : ''}`} src={`/vid/vid${videoSrc}.mp4`} autoPlay muted loop />
          ))
        }

        {
          slideContent.map((content, index) => (
            <div key={index} className={`content ${index === activeSlide ? 'active' : ''}`}>
              <h1>{content.title}</h1>
              <p>{content.description}</p>
              <a href="#">Read more</a>
            </div>
          ))
        }
        <div className='slider-navigation'>
          {
            videoSlider.map((index) => (
              <div key={index} className={`nav-btn ${index-1 === activeSlide ? 'active' : ''}`} onClick={() => {handleSlideChange(index-1)}} />
            ))
          }
        </div>
      </section>
    </div>
  )
}

export default HomePage