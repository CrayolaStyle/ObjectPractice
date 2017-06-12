

var me = {
  name: "Andrew Beaulieu",
  height: "5'9",
  dob: "04/20/1985",
  gender: "male",
  hair: "brown",
  familyMembers: [
    {
      relation: "Mother",
      name: "Deb",
      age: 62,
      gender: "female"
    },
    {
      relation: "Father",
      name: "Ron",
      age: 59,
      gender: "male"
    },
    {
      relation: "Sister",
      name: "L",
      age: 27,
      gender: "female"
    },
    {
      relation: "Girl",
      name: "La",
      age: 30,
      gender: "female"
    },
  ]
}

//Question 1 List the names of all your family members
// fam is an array of objects

var fam = me.familyMembers
for (var i = 0; i < fam.length; i++) {
  console.log(fam[i].name)
}

//Question 2 Get the oldest member of the family using a loop

// return the largest number in the array
// This is the sample array I used
var array = [1,4,3,7,10,15,2]
var compare = 0

for (var i = 0; i < array.length; i++) {
  console.log('this is array[i]',array[i])
  console.log('this is compare at start', compare);
  if (array[i] > compare) {
    compare = array[i]
    console.log('this is compare now', compare);

  }
}
// This is the answer to number 2
var age = 0
var person = []
console.log("My oldest family member is:")
for (j = 0; j < fam.length; j++) {
  checkAge = fam[j].age
  if (checkAge > age) {
    person = fam[j]
    age = fam[j].age
  }
}
console.log(person.name)
console.log("And their age is: ", person.age)

//Question 3 Only show the women in the family using a conditonal
// Example I provided about == v ===
console.log('' == '0');
console.log(0 == '0' );
console.log(0 === '0');
console.log(false == 'false');
console.log(false == '0');

// Answer to number 3

console.log("My female family members:")
for (i = 0; i < fam.length; i++) {
  console.log(fam[i]);
  if (fam[i].gender === "female") {
    console.log(fam[i].name)
  }
}

// Question 4 Change your last name

console.log(me.name)
me.name = 'James Schultz'
console.log(me.name)
me.gender = 'cheese'
console.log(me.gender);

// Question 5 Add a family member

var newPerson = {relation: "pet",
name: "jake",
age: 100000,
gender: "the dog"}


fam.push(newPerson)
  console.log(me);
