// object property shorthand


const name="Andrew"
const userAge=28
const user={
  name,
  age:userAge,
  location:"Madrid"
}
console.log(user)
const product={
  label:'Red notebook',
  price:3,
  stock:201,
  salePrice:undefined
}
const {label:productLabel,price,stock,salePrice,rating=5}=product