/** ######################### String Methods - lastIndexOf(SearchValue,start) #########################
 * * The lastIndexOf() method returns the index (position) of the last occurrence of a specified value in a string.
 * 
 * * The lastIndexOf() method searches the string from the end to the beginning.
 * 
 * * The lastIndexOf() method returns the index from the beginning (position 0).
 * 
 * * The lastIndexOf() method returns -1 if the value is not found.
 * 
 * * The lastIndexOf() method is case sensitive.
 */


let str = "Hello planet earth, you are a great planet."
console.log(str.lastIndexOf("planet"));
console.log(str.lastIndexOf("Planet"));

console.log(str.lastIndexOf("planet",20)); // Search for the last occurrence of "planet", starting at position 20