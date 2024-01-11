import { proxy } from 'valtio'

const state = proxy({
    floorInfo: [
        {
            infoImage: '/floor-info/img1.png',
            title: 'THICKNESS',
            description: '8mm thick boards offers fantastic stability and durability. Offering the ability to withstand everyday living in your home, this thickness of laminate can give you that added piece of mind whilst maintaining the perfect look for your home.'
        },
        {
            infoImage: '/floor-info/img2.png',
            title: 'UNDERFLOOR HEATING',
            description: 'Underfloor heating provides households with an energy efficient solution to warming rooms, and this flooring is compatible with both electric and water-based systems!'
        },
        {
            infoImage: '/floor-info/img3.png',
            title: 'GUARD & RESISTANCY',
            description: 'Prepared for any situation: our floors are scratch resistant, protected against any kind of stains, and resistant to water, which makes the perfect solution to any floor related problem.'
        },
    ],
})

export { state }
