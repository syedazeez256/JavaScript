"use strict";

const resturant = {
  name: "Classico Italian",
  location: "581 B Gulshan Ravi",
  categories: ["italian", "fast food", "chinese", "vegetarian"],
  startmenu: ["garlic", "bread", "caprese salad"],
  mainmenu: ["pizza", "pasta", "risoto"],
  timings: {
    thur: {
      open: "12",
      close: "22",
    },
    fri: {
      open: "11",
      close: "23",
    },
    sat: {
      open: "10",
      close: "24",
    },
  },
  order: function (starterindex, mainindex) {
    return [this.startmenu[starterindex], this.mainmenu[mainindex]];
  },
  orderDelievery: function name({
    startIndex = 1,
    mainIndex = 0,
    address = "Sanda",
    time = "20.00",
  }) {
    console.log(
      `Order Deliever! ${this.startmenu[startIndex]} and ${this.mainmenu[mainIndex]} will be delieverd to ${address} at ${time}`
    );
  },
  OrderPasta: function (ing1, ing2, ing3) {
    console.log(
      `First Ingredient ${ing1} Second Ingredient ${ing2} Third Ingredient ${ing3}`
    );
  },
};

const arr = [1, 2, 3];
const newArr = [7, 8, ...arr];
console.log(newArr);

const newMenu = [...resturant.mainmenu, "Cheese Burger"];
console.log(newMenu);

// Joins 2 arrays
const menu = [...resturant.startmenu, ...resturant.mainmenu];
console.log(menu);

// Iterables; : arrays , strings , maps , sets ::::: Not OBJECTS

const str = "Azeez";
const letters = [...str];
console.log(letters);
console.log(str);

// const ingredients = [
//   prompt("Lets make Pasta Ingredient 1! "),
//   prompt("Ingredient 2"),
//   prompt("Ingredient 3"),
// ];

// console.log(ingredients);
// resturant.OrderPasta(...ingredients);
const newRes = { founder: 1990, ...resturant, developed: 1890 };
console.log(newRes);
const resturantCopy = { ...resturant };
resturantCopy.name = "Haveli";
console.log(resturantCopy);
console.log(resturant);
