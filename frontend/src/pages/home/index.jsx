import React from 'react'
import "./style.css"
import LinkButton from '../../components/linkButton'
import { useSnapshot } from 'valtio'
import { state } from '../../components/floorInfo'
import Container from '../../components/container'
import Box from '../../components/box'
import H2 from '../../components/subHeaderH2'
import H3 from '../../components/subHeaderH3'
import Description from '../../components/descriptionPtag'
import HeaderContainer from '../../components/headerContainer'


export default function Home() {

  const snap = useSnapshot(state)

  return (
    <section className='home'>
      <div className="container">
        {/* muted is crucial for autoplay */}
        <video src="/video.mp4" muted autoPlay loop playsInline /> 
        <div className='home-box upper'>
          <H2 text="DIGITAL" /> 
          <H2 text="PLANING" /> 
          <p>We created the SOLUTION for your floor build. We all been there;  chose 
            a floor design for our new home, and when applied  you don't like it!
            That's why we created the digital floor planner.
          </p>
          <div className="cta">
            <LinkButton background="--accentColor" color="--white" to="/configurator">Configurate your floor</LinkButton>
            <LinkButton background="--black" color="--white" to="/register">Create Account</LinkButton>
          </div>
        </div>
        <div className='home-box lower'>
          <h1>DEFINING</h1>
          <h1>&#169;FLOORS</h1>
        </div>
      </div>

      <HeaderContainer>
        <H2 color="--darkColor" text="A CLOSER LOOK" /> 
        <H3 text="Take a closer look at our materials and understand, why we are the best" />   
      </HeaderContainer>
      {snap.floorInfo.map((floor, index) => (
        <Container key={index}>
          <div className="img">
            <img src={floor.infoImage} />
          </div>
          <Box>
            <H3 text={floor.title}/>
            <Description description={floor.description} />
          </Box>
        </Container>
      ))}
    </section>
  )
}
