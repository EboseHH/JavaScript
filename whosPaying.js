// function lunch takes in an argument which is an array of names
function lunch(names) {
    //select a random name from the array
    const randomName = Math.floor(Math.random() * names.length);
    return names[randomName];
  }
  
  
  // Test for the code
  const names = ["Etin", "Ebose", "Jim", "Gabriel", "Oyemwen", "Jenny", "Max", "Sola"];
  
  console.log("Who pays for lunch today? 😉, it is going to be, " + lunch(names));