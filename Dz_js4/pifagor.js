var table = new Array(10);

for(var i = 0; i < table.lenght; i++) {
    table[i] = new Array(10);
}

for(var row = 0; row < table.length; row++) {
    var str = '';

    for(var col = 0; col < table[row].length; col++) {
        table[row][col] = (row+1)*(col+1);
        str += table[row][col] + '  ';
    }
    console.log(str + '\n');
    str = '';
}