var orderCount = 0
function getSubTotal(itemCount){
  return itemCount * 7.5;
}
function getTax(){
  return getSubTotal(orderCount) * 0.06;  
}
function getTotal(){
  return getSubTotal(orderCount) + getTax();
}
function takeOrder(topping,crustType) {
  orderCount = orderCount + 1;
  console.log("Order: " + crustType + " crust pizza topped with " + topping);
}

takeOrder("bacon", "thin");
takeOrder("beef", "big");
takeOrder("chiken", "double");
console.log(getSubTotal(orderCount))
console.log(getTotal())