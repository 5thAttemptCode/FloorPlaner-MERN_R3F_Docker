import { proxy } from 'valtio'

const state = proxy({
    textures: [
        {
            url: '/textures/texture1/baseColor1.jpg',
            name: 'Oak Parquet'
        },
        {
            url: '/textures/texture2/baseColor2.jpg',
            name: 'Maple'
        },
        {
            url: '/textures/texture3/baseColor3.jpg',
            name: 'Walnut'
        },
        {
            url: '/textures/texture4/baseColor4.jpg',
            name: 'Birch Parquett'
        },
    ],
    
    texture: '/textures/texture1/baseColor1.jpg',
    wallColor: '#ffffff'
})

export { state }