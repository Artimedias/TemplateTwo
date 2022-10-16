export default class user {
    constructor(age, sex) {
      this.age = age;
      this.sex = sex;
    }

checktype() {
    let returnArray = [this.age, this.sex];
    return returnArray;
}

ageConvert() {
  let planets = [4.16, 1.62, 1, .53, .084, .034, .012, .006]
  let newAge = [];

  for(let i = 0; i < 8; i++)
  {
    newAge.push((planets[i] * this.age).toFixed(2))
  }

  return newAge;
}

lifeLeft() {
let planets = [4.16, 1.62, 1, .53, .084, .034, .012, .006]
let lifeMale = [316.57, 123.28, 76.1, 40.33, 6.39, 2.58, 0.91, 0.45];
let lifeFemale = [337.37, 131.38, 81.1, 42.98, 6.81, 2.75, 0.97, 0.48];
let lifeleft = [];


 if(this.sex === "male")
 {
  for(let i = 0; i < 8; i++)
  {
    lifeleft.push(((planets[i] * this.age) - lifeMale[i]).toFixed(2))

    if(lifeleft[i] < 0)
    {
      lifeleft[i] = (lifeleft[i] * -1)
    }

    else
    {
      lifeleft[i] = (lifeleft[i] * 1)
    }
  }
 }
 else
 {
  for(let i = 0; i < 8; i++)
  {
    lifeleft.push(((planets[i] * this.age) - lifeFemale[i]).toFixed(2))

    if(lifeleft[i] < 0)
    {
      lifeleft[i] = (lifeleft[i] * -1)
    }
    else
    {
      lifeleft[i] = (lifeleft[i] * 1)
    }

  }
 }
 return lifeleft;
}
}

//Mercury = 4.16, Venus = 1.62, Mars = .53, Jupiter = .084, Saturn = .034, Uranus = .012, Neptune = .006