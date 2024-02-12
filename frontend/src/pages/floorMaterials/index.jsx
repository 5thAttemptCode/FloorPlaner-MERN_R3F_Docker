import React from 'react'
import './style.css'
import { useSnapshot } from 'valtio'
import { state } from '../../componentsCanvas/floorMaterial'
import H2 from '../../components/subHeaderH2'
import H3 from '../../components/subHeaderH3'
import H4 from '../../components/subHeaderH4'
import ShoppingEllipse from '../../components/shoppingEllipse'
import Description from '../../components/descriptionPtag'
import Container from '../../components/container'
import Box from '../../components/box'
import HeaderContainer from '../../components/headerContainer'


export default function FloorMaterials() {

  const snap = useSnapshot(state)

  return (
    <section className='floor-materials'>
      <HeaderContainer>
        <H2 color="--darkColor" text="Select the finest floor materials" />
        <H3 text="Each package contains 1m² of floor material" />
      </HeaderContainer>
      {snap.textures.map((floor, index) => (
        <Container key={floor.id}>
          <img src={floor.url} alt="" />
          <Box>
            <H3 text={floor.name} />
            <H4 text={`$${floor.price} per m²`} />
            <Description description={floor.description} />
            <ShoppingEllipse floor={floor} />
          </Box>
        </Container>
      ))}
    </section>
  )
}

