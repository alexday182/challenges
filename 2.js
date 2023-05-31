/*
Given an array of integers, 
return a new array such that each element at index i of the 
new array is the product of all the numbers in the original array except the one at i.

For example, if our input was [1, 2, 3, 4, 5], 
the expected output would be [120, 60, 40, 30, 24]. 
If our input was [3, 2, 1], the expected output would be [2, 3, 6].
*/

const arr = [1,2,3,4,5]
const prod = arr.reduce((x, y) => x * y)
let newArr = [];

for(let i=0;i<arr.length;i++){
    newArr.push(prod/arr[i]);
}
console.log(newArr)

/*
Follow-up: what if you can't use division?
*/
const arr2 = [3, 2, 1]
let prodArr=[];
for(let i=0;i<arr2.length;i++){
  const copy = arr2.map((x) => x);
  copy.splice(i,1)
  prodArr.push(copy.reduce((x,z)=>x*z))
}
console.log(prodArr)