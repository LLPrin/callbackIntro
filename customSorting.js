var students = [
  { id: 1, name: "bruce",    age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex",     age: 22 },
  { id: 4, name: "alex",     age: 30 }
];
//sort so that:
//1. list is in alphabetical order
//2. if same name, older student goes first

//taking students, sorting, passing through name & age into function
students.sort(function (first, second) {
  //1. list is in alphabetical order
  // if first name belongs above second name, put it there
  if (first.name > second.name) {
    //ascending student position in list because (>)
    return 1;
  }
  //2. if same name, older student goes first
  else if (first.age < second.age) {
    //descending students position in list because (<)
    return 1;
  }
});

console.log(students);


