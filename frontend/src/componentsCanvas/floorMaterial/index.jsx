import { proxy } from 'valtio'

const state = proxy({
    colors: ['#ff0000', '#00ff00', '#0000ff'],
    color: '#0000ff'
})

export { state }