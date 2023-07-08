const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.querySelector('#ingredients');
const murkup = [];

ingredients.forEach((ingredient, index) => {
  const ingredientItem = document.createElement('li');
  
  ingredientItem.textContent = ingredient;
 
  ingredientItem.classList = 'item';
  murkup.push(ingredientItem);
  return murkup;
  
});

ingredientsList.append(...murkup);
