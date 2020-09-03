// Rest Parameter : Merepresentasikan argument pada function dengan jumlah yang tidak terbatas menjadi sebuah array
console.log("Rest Parameter : Merepresentasikan argument pada function dengan jumlah yang tidak terbatas menjadi sebuah array");
console.log("\n");


// Opening
console.log("Opening");
// - Rest = Sisa
console.log("- Rest = Sisa");
console.log("\n");


// Get Arguments
console.log("Get Argument");
// - With Rest Parameter (No need additional functions)
console.log("- With Rest Parameter (No need additional functions)");
// --> Get All
console.log("--> Get All");

function getArgAll(...arg) {
    return arg;
}
console.log(getArgAll("Jays", "Rahman", "Elfaiz"));
// --> Get With Front
//  - Hanya bisa digunakan di akhir argument
console.log("--> Get With Front");

function getArgWf(a, b, ...arg) {
    return arg;
}
console.log(getArgWf("Javascript", "Is", "My", "Favorite", "Programming", "Language"));

// - With arguments
console.log("- With arguments (Need additional functions)");
// --> With Array.from()
console.log("--> With Array.from()");

function getArgsAf() {
    return Array.from(arguments);
}
console.log(getArgsAf("Yea", "I", "Just", "Learn", "SASS"));
// --> With Spread Operator
console.log("--> With Spread Operator");

function getArgsSo() {
    return [...arguments];
}
console.log(getArgsSo("I", "Recently", "Know", "a", "Preprocessor"));
console.log('\n');

// Add up arguments
console.log("Add up arguments");
// - For Of
console.log("- For Of");

function sumForOf(...args) {
    let forOf = 0;
    for (const iterator of args) {
        forOf += iterator;
    }
    return forOf;
}
console.log(sumForOf(6, 5, 9, 2, 4));
// - Reduce
console.log("- Reduce");

function sumReduce(...args) {
    return args.reduce((a, b) => a + b);
}
console.log(sumReduce(76, 4, 12, 6, 9));
console.log("\n");

// Other Use
console.log("Other Use");
// - Array destructuring
console.log("- Array destructuring");
const osAd = ["Code", "Till", "Die"];
const [head, ...body] = osAd;
console.log(head);
// - Object destructuring
console.log("- Object destructuring");
const osDs = {
    header: "Code",
    content1: "Till",
    content2: "Die"
};
const {
    header,
    ...content
} = osDs;
console.log(content);
// - Filtering
console.log("- Filtering");

function osF(...content) {
    const osFType = ["string", "boolean", "number"];
    return content.filter(e => typeof e == osFType[0]);
}
console.log(osF("I", 7, "Love", true, "U", 9, 3, 2, false));