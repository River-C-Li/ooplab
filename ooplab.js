//ooplab part-1
// const adventurer = {
//     name: "Robin",
//     health: 10,
//     inventory: ["sword", "potion", "artifact"],
//     companion: {
//         name: "Leo",
//         type: "Cat",
//         subcompanion: {
//             name: "Frank",
//             type: "Flea",
//             belongings: ["hat", "sunglasses"]           
//         }
//     },
//     diceroll (mod = 0) {
//         const result = Math.floor(Math.random() * 20) + 1 + mod;
//         console.log(`${this.name} rolled a ${result}.`)
//         }
//     }
    // console.log(adventurer.diceroll())

    //part-2
    class Character {
      constructor (name) {
          this.name = name;
          this.health = 100;
          this.inventory = [];
          this.diceroll (mod = 0) {
            const result = Math.floor(Math.random() * 20) + 1 + mod;
            console.log(`${this.name} rolled a ${result}.`)
            }
        }
      }
      
// const robin = new Character("Robin");
// robin.inventory = ["sword", "potion", "artifact"];
// robin.companion = new Character("Leo");
// robin.companion.type = "Cat";
// robin.companion.companion = new Character("Frank");
// robin.companion.companion.type = "Flea";
// robin.companion.companion.inventory = ["small hat", "sunglasses"];


//part-3
class Adventurer extends Character {
    constructor (name, role, health) {
       
      super(name);
      this.role = role;
      this.health=health;
      this.inventory.push("bedroll", "50 gold coins");
    }

    scout () {
      console.log(`${this.name} is scouting ahead...`);
      super.roll();
    }
  }
  const robin = new Adventurer("Robin","captain","100");

  class companion  extends Character {
    constructor (type, name, belongings) {
      super(type);
      this.name = name;
      this.belongings=belongings;
    }
    scout () {
      console.log(`${this.name} is scouting ahead...`);
      super.roll();
    }
  }
 const Leo= new companion("cat","Leo","hat")


//  part 4
class Character {
    static health = 100;
    constructor (name) {
       
        this.name = name;
        this.inventory = [];
        this.diceroll (mod = 0) {
          const result = Math.floor(Math.random() * 20) + 1 + mod;
          console.log(`${this.name} rolled a ${result}.`)
          }
      }
    }


class Adventurer extends Character {
    static role =["Fighter", "Healer", "Wizard" ]
    constructor (name, role, health) {      
      super(name, role );
      
      this.health=health;
      this.inventory.push("bedroll", "50 gold coins");
    }
    scout () {
      console.log(`${this.name} is scouting ahead...`);
      super.roll();
    }
  }

//   part-5
class AdventurerFactory {  
    constructor (role) {
      this.role = role;
      this.adventurers = [];
    }
    generate (name) {
      const newAdventurer = new Adventurer(name, this.role);
      this.adventurers.push(newAdventurer);
    }
    findByIndex (index) {
      return this.adventurers[index];
    }
    findByName (name) {
      return this.adventurers.find((a) => a.name === name);
    }
  }
  
  const healers = new AdventurerFactory("Healer");
  const robin = healers.generate("Robin");

  //part-6
  


