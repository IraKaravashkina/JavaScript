let array =[1,2,3,4,5,6,7,8,9,10];

for (let x = 0; x < array.length; x++) {
    let rowData = array[x];
    let newArray = [];
for (let y = 0; y < array.length; y++) {
    newArray.push(array[y] * array[x])
}
    console.log(newArray);
}