// Spread Operator //
// --------------- //

// Array
const arr1 = ["Call", "Me", "Senorita"];
const arr2 = ["I", "Am", "Just", "Kidding"];

// Opening
console.log('Opening');
// - Memecah Array
console.log('- Memecah Array');
const arr = ["Jays", "Rahman", "Elfaiz"];
console.log(...arr);
// - Memecah String
console.log('- Memecah String');
const string = "Jays";
console.log(...string);
// - Memecah Array lalu string
console.log('- Memecah Array lalu string');
const arrStr = ["I", "Love", "You", "So", "Much"];
console.log(...arrStr[3]);
// End of Opening
console.log('\n');

// When we use spread operator?
console.log('When we use spread operator?');
// - Grouping An Arrays
console.log('- Grouping An Arrays');
// --> Without Spread Operator (It just make two different array include in new array)
console.log('--> Without Spread Operator');
const groupArr1 = [arr1, arr2];
console.log(groupArr1);
// --> With Spread Operator (We Can Flecsibelly Add String in)
console.log('--> With Spread Operator');
const groupArr2 = [...arr1, 'String', ...arr2];
console.log(groupArr2);
// --> With Concat Function (We Can't Flecsibelly Add String in)
console.log('--> With Concat Function');
const groupArr3 = arr1.concat(arr2);
console.log(groupArr3);
// - Copying An Array
console.log('- Copying An Arrays');
// --> Wrong way to copying (If we use this, when we change the value of index in array 2 it will change the array 1 value index too, so its not copy, array 2 just refrence to array 1)
console.log('--> Wrong way to copying');
const copyArr1 = arr1;
copyArr1[0] = 'Tell';
console.log(arr1);
// --> The Right Way (So, this is what can be said to copy an array, it can't change in array 1)
console.log('--> The Right Way');
const copyArr2 = [...arr1];
copyArr2[0] = 'Just Call';
console.log(arr1);
// - Get data from HTML and put it in array
console.log('- Get data from HTML and put it in array');
const getArr = document.querySelectorAll('li');
// --> For (Without Spread)
console.log('--> For (Without Spread)');
putArr1 = [];
for (let i = 0; i < getArr.length; i++) {
    putArr1.push(getArr[i].textContent);
}
console.log(putArr1);
// --> Map (With Spread)
console.log('--> Map With Spread');
putArr2 = [...getArr];
console.log(putArr2.map(e => e.textContent));
// - Make hover animation
console.log('- Make hover animation');
const hoverAnim = document.querySelector('h2');
const hoverAnimArr = [...hoverAnim.textContent].map(e => `<span>${e}</span>`).join('');
console.log(hoverAnimArr);
hoverAnim.innerHTML = hoverAnimArr;