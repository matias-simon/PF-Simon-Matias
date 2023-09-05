export function simpleCart(cartList) {
  const simplifiedItems = []
  cartList.map(item => {
      const { id, marca, modelo, precio, count } = { ...item }
      const simpleItem = { id, marca: marca, modelo:modelo, precio, count }
      simplifiedItems.push(simpleItem)
  })
  return simplifiedItems
}