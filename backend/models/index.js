import Product from "./product.js"
import CartItem from "./cartItem.js"


Product.hasOne(CartItem)
CartItem.belongsTo(Product)


export {Product, CartItem}