const arrays = [
"Hamza",
"Okan",
"Hasan"
]

const motors = []
motors[0] = "R600";
motors[1] = "HYDUAI R499";
motors[2] = "KAWASAKI R7";
motors[3] = "MONDIAL H10";

//-----------------------------------------------------------------------------------------------

document.getElementById("example1").innerHTML = motors;  //! "example" Id'e sahip elementin texti artık dizimizin elemanlarıdır.

const student = new Array("Okan","Efe","Hamza"); //! Gibi kullanılabilir. 

//-----------------------------------------------------------------------------------------------

const mylist = ["Joe","Joseph","Tony"];

let staff1 = mylist[0];

document.getElementById("example2").innerHTML = staff1;

//-----------------------------------------------------------------------------------------------

//!| Changing an Array Element

const myarray = ["Fiat","Dogan","Kartal","Volkswagen"];
myarray[3]="Ford";
document.getElementById("example3").innerHTML= myarray[3];

//-----------------------------------------------------------------------------------------------

//! Converting an array to a string

const myarray2 = ["Nane","Şeker","Orman Meyvesi","Karadut"];
document.getElementById("example4").innerHTML = myarray2.toString();

//-----------------------------------------------------------------------------------------------

//! Array Element can be objects  ------> We can have objects in an array // We can have functions in an array.

const myarray3 = [];

myarray3[0]= Date.now;
myarray3[1]= motors;


//-----------------------------------------------------------------------------------------------

//! The Lenght Property

const meyveler = ["Portakal","Elma","Kiraz","Muz"];
let lenght = meyveler.length;
console.log(lenght);


//? Accesing the last array element.
let sonmeyve = meyveler[meyveler.length-1];

//-----------------------------------------------------------------------------------------------

//! Looping Array Element;  with "For Loops"

const newarray = ["Tommy","Micheal","Traver","Okan"];
let  Lnewarray = newarray.length;

let text = "<ul>";
for (let i = 0; i < Lnewarray; i++) {

    text += "<li>" +  newarray[i] + "</li>";

}
text += "</ul>";

document.getElementById("example5").innerHTML = text;

//-----------------------------------------------------------------------------------------------

//! Adding a new value to an array.

const array0=["Hamza","Hacı","Mustafa","Emin"];
array0.push("Bekir");  //todo ---> push metodu ile diziye değer gönderdik.


//-----------------------------------------------------------------------------------------------

// Information about arrays and objects

var fruits = ["Banana", "Orange", "Apple"];
document.getElementById("demo").innerHTML = fruits instanceof Array;  //--> //!"instanceof" ile türünün dizi olup olmadığını sorgulattık ve dizi olduğu için "true" döner.