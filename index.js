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
