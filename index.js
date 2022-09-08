// array of food, prices, and a random index procedure that will be used to access respective array indices from both randomMeal and randomPrice arrays

const randomMeal = ['Pizza', 'a B.L.T. Sandwhich', 'Caesar Salad', 'Nasi Goreng'];
const randomPrice = [10, 8, 6, 5];
const randomIndex = Math.floor(Math.random() * 4);

// menu object with private meal and price variables which are changed via setters and getters

const menu = {
  _meal: '',
  _price: 0,
  set mealCheck(mealToCheck){
    if (typeof mealToCheck === 'string'){
      this._meal = mealToCheck;
    }
  }, 
  set priceCheck(priceToCheck){
    if (typeof priceToCheck === 'number'){
      this._price = priceToCheck;
    }
  },
  get todaysSpecial(){
    if (this._meal && this._price){
      return `Today's Special is ${this._meal} for $${this._price}!`;
    } else {
      return 'Meal or price was not set correctly!';
    }
  }
};

// accessing randomized meal and price by using the randomized index we generated earlier and assigning them by setter functions

menu.mealCheck = randomMeal[randomIndex];
menu.priceCheck = randomPrice[randomIndex];

// getter function call to return the day's special

console.log(menu.todaysSpecial)

