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


export default function Home() {

  const snap = useSnapshot(state)
  return (
    <section className='home'>
      <div className="container">
        <video src="/video.mp4" autoPlay loop />
        <div className='home-box upper'>
          <H2 text="DIGITAL" /> 
          <H2 text="PLANING" /> 
          <p>We created the SOLUTION for your floor build. We all been there;  chose 
            a floor design for our new home, and when applied  you don't like it!
            That's why we created the digital floor planner.
          </p>
          <div className="cta">
            <LinkButton background="--accentColor" color="--lightColor" to="/configurator">Configurate your floor</LinkButton>
            <LinkButton background="--darkColor" color="--lightColor" to="/register">Create Account</LinkButton>
          </div>
        </div>
        <div className='home-box lower'>
          <h1>DEFINING</h1>
          <h1>&#169;FLOORS&nbsp;&nbsp;&nbsp;&nbsp;</h1>
        </div>
      </div>

      <H2 color="--darkColor" text="A CLOSER LOOK" />    
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
