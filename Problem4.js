/**
 *  Shopping Bill Calculator
 *  function name: calcBill(prices, items)
 * Statement: Calculate total bill amount and count how many times each item appears
 *
 * Test Case 1:
 *  Input:
 *   prices =  {rice: 70, oil: 180, egg: 12, sugar: 90};
 *   items = ["egg", "egg", "rice", "oil", "egg", "sugar"];
 *
 *  Output:
 *   {
 *     total: 376,
 *     itemCount: {egg: 3, rice: 1, oil: 1, sugar: 1}
 *    }
 */

function calcBill(prices, items) {
  let total = 0;
  for (let item in prices) {
    let price = prices[item];
    total = total + price;
  }

  let itemCount = {};
  for(let item of items){
    if(itemCount.hasOwnProperty(item)){
        itemCount[item]++
    }else{
        itemCount[item] = 1;
    }
  }

  return {
    total,
    itemCount,
  };
}

let output = calcBill({ rice: 70, oil: 180, egg: 12, sugar: 90 }, [
  "egg",
  "egg",
  "rice",
  "oil",
  "egg",
  "sugar",
]);

console.log(output);
