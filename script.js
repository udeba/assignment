const  = 4;
/*Mario's compartment does not change*/
const preditionofFather = Number(prompt("Insert Predition"));
/*father's prediction is changing.*/
const text1 = "Yes, you found your son.";
const text2 = "Your son is in a compartment with a larger number.";
const text3 = "Your son is in a compartment with a smaller number.";
/*According to your father's guess, what is written on the console changes*/
if (preditionofFather == mariosCompartmen) {
  console.log(text1);
} else if (preditionofFather < mariosCompartmen) {
  console.log(text2);
} else {
  console.log(text3);
}
