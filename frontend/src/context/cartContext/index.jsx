const cart = {
    items: [],
    addToCart(texture) {
        const { id, name, price } = texture;
        this.items.push({id, name, price})
    },
    removeFromCart(id) {
        this.items = this.items.filter(cartItem => cartItem.id !== id)
    },
    isInCart(id) {
        return this.items.some(cartItem => cartItem.id === id)
    }
}

export default cart