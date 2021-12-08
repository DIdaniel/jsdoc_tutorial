// https://www.youtube.com/watch?v=lTCadytiCNs // 38:05

// @ts-check

/**
 * Pet name
 * @type {string}
 */
const petName = "Ruby";

/**
 * @type {number}
 */
const myNumber = 123;

/**
 * My Array
 * @type {Array<number>}
 */
const myArr = [10, 20, 30];

/**
 * Pet Object
 * @type {{id: number, name: string, age: number | string}}
 */
const pet = {
  id: 1,
  name: "coco",
  age: 2,
};

/**
 *  Calculate pet age
 * @param {number} current - current year
 * @param {number} yearOfBirth - the day pet was born
 * @returns {string} pet age
 */
const calculatePetAge = (current, yearOfBirth) => {
  return `${current - yearOfBirth}`;
};

console.log(calculatePetAge(2021, 2019));

//////////////////////////////////////////
/**
 * @typedef {Object} Dog
 * @property {number} id
 * @property {string} name
 * @property {number | string} age
 * @property {boolean} isMale -gender
 */

/**
 * @type {Dog}
 */
const dog = {
  id: 1,
  name: "Bean",
  age: 2,
  isMale: true,
};
////////////////////////////////////////////

/**
 * Class to create a new pet owner
 */
class Owner {
  /**
   *
   * @param {Object} ownerDetail
   */
  constructor(ownerDetail) {
    /**
     * @property {string} name pet owner name
     */
    this.name = ownerDetail.name;
    /**
     * @property {number} age pet owner age
     */
    this.age = ownerDetail.age;
  }

  /**
   * @property {Function} printOwner print out owner information
   * @return {void}
   */
  printOwner() {
    console.log(`Owner's name is ${this.name} and her age is ${this.age}`);
  }
}

const owner1 = new Owner({
  name: "Kelly",
  age: 18,
});

owner1.printOwner();

//////////////
