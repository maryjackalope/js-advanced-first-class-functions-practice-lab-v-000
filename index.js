// Code your solution in this file!
const logDriverNames = function (array) {
  array.forEach(function(el, i, arr) {
    console.log(el.name);
  });
}
 const logDriversByHometown = function (array, hometown) {
  let new_array = array.filter(x => x.hometown == hometown);
  new_array.forEach(function(el, i, arr) {
    console.log(el.name);
  });
}
 const driversByRevenue = function (array) {
  let new_array = [...array];
    return new_array.sort(function (num1, num2) {
    return num1.revenue - num2.revenue;
  });
}
 const driversByName = function (array) {
  let new_array = [...array];
    return new_array.sort(function (num1, num2) {
    return num1.name.localeCompare(num2.name);
  });
}
const total = function (agg, el, i, arr) {
  if (i === arr.length - 1) {
    return agg.totalPrice + el.revenue;
  }
  return {
    totalPrice: agg.totalPrice + el.revenue
  };
};
 const totalRevenue = function (array) {
  return array.reduce(total, {totalPrice: 0});
};
 const averageRevenue = function (array) {
  return totalRevenue(array)/array.length;
};