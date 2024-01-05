import { proxy } from 'valtio'

const state = proxy({
    textures: [
        {url: '/textures/texture1/baseColor1.jpg'},
        {url: '/textures/texture2/baseColor2.jpg'},
        {url: '/textures/texture3/baseColor3.jpg'}
    ],
    
    texture: '/textures/texture1/baseColor1.jpg'
})

export { state }