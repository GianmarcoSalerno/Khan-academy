//fields
var array = ["dog", "cat", "rabbit","bear", "tiger"];

//iterate through arra values
var i = 0;
while (i < array.length){
    fill(51, 240, 73);
    text(array[i], 20, i*50 + 10, 10, 10);
    i++;
}
