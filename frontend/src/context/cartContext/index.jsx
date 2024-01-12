const cart = {
    items: [],
    addToCart(item) {
        this.items.push(item)
    },
    removeFromCart(item) {
        this.items = this.items.filter(cartItem => cartItem.id !== item.id)
    },
    isInCart(item) {
        this.items.some(cartItem => cartItem.id === item.id)
    }
}

export default cart