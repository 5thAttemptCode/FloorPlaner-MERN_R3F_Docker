import React from 'react'
import "./style.css"
import H2 from '../../components/subHeaderH2'
import LinkButton from '../../components/linkButton'


export default function Home() {
  return (
    <section>
      <div className="container">
        <div className='box upper'>
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

        <div className='box lower'>
          <h1>DEFINING</h1>
          <h1>&#169;FLOORS&nbsp;&nbsp;&nbsp;&nbsp;</h1>
        </div>
      </div>
    </section>
  )
}
