export const addItemToCart = (cartItems,cartItemToAdd) => {
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToAdd.id
    )

    //if Cart item does exist, cart item will add 1 on to the value of quantity
    if(existingCartItem) {
        return cartItems.map(cartItem =>
               cartItem.id ===cartItemToAdd.id 
               ? {...cartItem, quantity: cartItem.quantity + 1 } 
               : cartItem
            )
    }

    //if Cart item does not exist, cart item will add 1
    return [...cartItems, {...cartItemToAdd, quantity: 1}]
}