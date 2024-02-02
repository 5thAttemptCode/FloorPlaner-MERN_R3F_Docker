import { proxy } from 'valtio'

const state = proxy({
    textures: [
        {
            id: 23411,
            url: '/textures/texture1/baseColor1.jpg',
            name: 'VICTORIAN OAK PARQUET',
            price: 23,
            description: `When buying new oak parquet flooring, one can easily be confused by the different types available. From natural oak parquet effect laminate flooring, to oak industrial parquet, to solid wood oak parquet flooring. Which one is the best? Well, first of all, natural oak parquet effect laminate flooring is an engineered oak parquet flooring, meaning it is not made of 100 % wood, and therefore functions differently and is not as valuable.`
        },
        {
            id: 69421,
            url: '/textures/texture2/baseColor2.jpg',
            name: 'CANADIAN MAPLE TILES',
            price: 21,
            description: `The Maple 3 Strip delivers a wood floor with a hint of the days of traditional parquet in an engineered format with a Clic fitting system, Maple is both durable and enhanced by its exotic grain and character with colour and grade variance. With a hint of parquet strip floor the plank is a contempory hardwood floor but in the not so common species which is light but warm and looks great in rooms that need to be bright and clean.`
        },
        {
            id: 98572,
            url: '/textures/texture3/baseColor3.jpg',
            name: 'CALIFORNIA WALNUT PLANKS',
            price: 17,
            description: `Walnut flooring is a beautiful wood due to its warm, rich tones. It is highly insect repellant, moisture resistant, easy to clean and install. But there are some cons too. Placing in a small room walnut flooring could enclose the space and make it seem even smaller. Moreover, maintenance of keeping the floor clean will be an everyday chore. Walnut is not known for its density, so scratches may appear very fast.`
        },
        {
            id: 24546,
            url: '/textures/texture4/baseColor4.jpg',
            name: 'BALTIC BIRCH PARQUET',
            price: 23,
            description: `Birch is a common tree throughout Europe's forests. In Sweden, where we source most of our birch wood, it’s the most common deciduous tree, growing throughout the whole country. While there are several species of birch tree, their characteristics remain similar so there is usually no distinction made between their wood.`
        },
    ],
    
    texture: '/textures/texture1/baseColor1.jpg',
    wallColor: '#ffffff',
})

export { state }