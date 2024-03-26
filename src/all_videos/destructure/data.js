const animals = [
    { name: "cat", sound: "meow",
      feedingrequirements: {
        food: "cat food",
        water: "2 litres"
      } },
    { name: "dog", sound: "woof" }
  ];
  function useAnimals(animal){
    return[
      animal.name,
      function(){
        console.log(animal.sound)
      }
    ]

  }
  export default animals;
  export {useAnimals};