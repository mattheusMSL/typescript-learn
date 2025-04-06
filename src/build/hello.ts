//  function greet(person: string, date : Date): any{
//  console.log(`hello ${person}, today is ${date.toDateString()}!`);
// }
// greet("Maddison", new Date());


const nomes: string[] = [
  "Alice",
  "Bob",
  "Eve"
];

nomes.forEach((nome) =>{console.log(nome.toUpperCase());})

type Person = {
  firstName: String,
  secondName: String,
  parents: string[] | number[],
  age: number,
  schoolGrade ?: {
    kidenGarden: boolean,
    middleSchool: boolean,
    highSchool: boolean,
    college: boolean
  }
}

const pedro : Person = {
  firstName : "Pedro",
  secondName : "Targaryan",
  parents : ["Fátima Timeline", "Will targarayn"],
  age: 22,
  schoolGrade: {
    kidenGarden: false,
    middleSchool: false,
    highSchool: false,
    college: true,
  }
}

let passToArr = Object.entries(pedro);
passToArr.map((pedro) => {
  console.log(pedro)
})

let maria: Person = {
   firstName: "Maria",
   secondName: "idk",
   parents: ["Pedro Targaryan"],
   age: 20,
   schoolGrade: {
    kidenGarden: false,
    middleSchool: false,
    highSchool: true,
    college: false
   }
}

if(pedro.firstName !== "pedro" || "Pedro"){
  console.log("That's not Pedro but is", maria.firstName, maria);
} else{
  console.log(pedro);
}

console.log(pedro)
 const transToArr = Object.entries(pedro);
 transToArr.map((pedro) => {
   console.log(pedro);
})



