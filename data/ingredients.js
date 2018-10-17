'use strict';

const ingredients = [{
  name: 'onion',
  category: 'vegetables'
},
{
  name: 'garlic',
  category: 'vegetables'
},
{
  name: 'cucumber',
  category: 'vegetables'
},
{
  name: 'tomato',
  category: 'vegetables'
},
{
  name: 'potato',
  category: 'vegetables'
},
{
  name: 'carrot',
  category: 'vegetables'
},
{
  name: 'basil',
  category: 'vegetables'
},
{
  name: 'parsley',
  category: 'vegetables'
},
{
  name: 'bell pepper',
  category: 'vegetables'
},
{
  name: 'Peppercorns',
  category: 'spices'
},
{
  name: 'broccoli',
  category: 'vegetables'
},
{
  name: 'linguine',
  category: 'pasta'
},
{
  name: 'corn',
  category: 'vegetables'
},
{
  name: 'spinach',
  category: 'vegetables'
},
{
  name: 'mushroom',
  category: 'vegetables'
},
{
  name: 'green beans',
  category: 'vegetables'
},
{
  name: 'ginger',
  category: 'vegetables'
},
{
  name: 'chili pepper',
  category: 'vegetables'
},
{
  name: 'celery',
  category: 'vegetables'
},
{
  name: 'rosemary',
  category: 'vegetables'
},
{
  name: 'sweet potato',
  category: 'vegetables'
},
{
  name: 'pickle',
  category: 'vegetables'
},
{
  name: 'avocado',
  category: 'vegetables'
},
{
  name: 'zucchini',
  category: 'vegetables'
},
{
  name: 'cilantro',
  category: 'vegetables'
},
{
  name: 'olives',
  category: 'vegetables'
},
{
  name: 'asparagus',
  category: 'vegetables'
},
{
  name: 'cabbage',
  category: 'vegetables'
},
{
  name: 'onion',
  category: 'vegetables'
},
{
  name: 'cauliflower',
  category: 'vegetables'
},
{
  name: 'kale',
  category: 'vegetables'
},
{
  name: 'pumpkin',
  category: 'vegetables'
},
{
  name: 'mint',
  category: 'vegetables'
},
{
  name: 'scallion',
  category: 'vegetables'
},
{
  name: 'shallot',
  category: 'vegetables'
},
{
  name: 'eggplant',
  category: 'vegetables'
},
{
  name: 'beet',
  category: 'vegetables'
},
{
  name: 'caper',
  category: 'vegetables'
},
{
  name: 'artichoke',
  category: 'vegetables'
},
{
  name: 'chia seeds',
  category: 'vegetables'
},
{
  name: 'chayote',
  category: 'vegetables'
},
{
  name: 'chicken breasts',
  category: 'meat'
},
{
  name: 'bacon',
  category: 'meat'
},
{
  name: 'sausage',
  category: 'meat'
},
{
  name: 'chicken thighs',
  category: 'meat'
},
{
  name: 'pork',
  category: 'meat'
},
{
  name: 'pork ribs',
  category: 'meat'
},
{
  name: 'steak',
  category: 'meat'
},
{
  name: 'turkey',
  category: 'meat'
},
{
  name: 'pepperoni',
  category: 'meat'
},
{
  name: 'salami',
  category: 'meat'
},
{
  name: 'chorizo',
  category: 'meat'
},
{
  name: 'chicken legs',
  category: 'meat'
},
{
  name: 'lamb',
  category: 'meat'
},
{
  name: 'pancetta',
  category: 'meat'
},
{
  name: 'prosciutto',
  category: 'meat'
},
{
  name: 'duck',
  category: 'meat'
},
{
  name: 'beef liver',
  category: 'meat'
},
{
  name: 'pastrami',
  category: 'meat'
},
{
  name: 'hen',
  category: 'meat'
},
{
  name: 'snail',
  category: 'meat'
},
{
  name: 'foie gras',
  category: 'meat'
},
{
  name: 'tuna',
  category: 'fish'
},
{
  name: 'salmon',
  category: 'fish'
},
{
  name: 'caviar',
  category: 'fish'
},
{
  name: 'sardines',
  category: 'fish'
},
{
  name: 'smoked salmon',
  category: 'fish'
},
{
  name: 'shrimp',
  category: 'seafood'
},
{
  name: 'crab',
  category: 'seafood'
},
{
  name: 'prawns',
  category: 'seafood'
},
{
  name: 'scallop',
  category: 'seafood'
},
{
  name: 'lobster',
  category: 'seafood'
},
{
  name: 'oyster',
  category: 'seafood'
},
{
  name: 'calamari',
  category: 'seafood'
},
{
  name: 'crawfish',
  category: 'seafood'
},
{
  name: 'octopus',
  category: 'seafood'
},
{
  name: 'mussel',
  category: 'seafood'
},
{
  name: 'clam',
  category: 'seafood'
},
{
  name: 'squid',
  category: 'seafood'
},
{
  name: 'olive oil',
  category: 'oil'
},
{
  name: 'canola oil',
  category: 'oil'
},
{
  name: 'coconut oil',
  category: 'oil'
},
{
  name: 'avocado oil',
  category: 'oil'
},
{
  name: 'vegetable oil',
  category: 'oil'
},
{
  name: 'corn oil',
  category: 'oil'
},
{
  name: 'almond oil',
  category: 'oil'
},
{
  name: 'cooking spray',
  category: 'oil'
},
{
  name: 'sesame oil',
  category: 'oil'
},
{
  name: 'sunflower oil',
  category: 'oil'
},
{
  name: 'mayonnaise',
  category: 'condiments'
},
{
  name: 'vinegar',
  category: 'condiments'
},
{
  name: 'soy sauce',
  category: 'condiments'
},
{
  name: 'ketchup',
  category: 'condiments'
},
{
  name: 'mustard',
  category: 'condiments'
},
{
  name: 'barbecue sauce',
  category: 'meat'
},
{
  name: 'wine vinegar',
  category: 'condiments'
},
{
  name: 'apple cider vinegar',
  category: 'condiments'
},
{
  name: 'ranch dressing',
  category: 'condiments'
},
{
  name: 'teriyaki',
  category: 'condiments'
},
{
  name: 'oyster sauce',
  category: 'condiments'
},
{
  name: 'tabasco',
  category: 'condiments'
},
{
  name: 'tahini',
  category: 'condiments'
},
{
  name: 'honey mustard',
  category: 'condiments'
},
{
  name: 'sour sauce',
  category: 'condiments'
},
{
  name: 'peas',
  category: 'legumes'
},
{
  name: 'black',
  category: 'legumes'
},
{
  name: 'green beans',
  category: 'legumes'
},
{
  name: 'red beans',
  category: 'legumes'
},
{
  name: 'soy beans',
  category: 'legumes'
},
{
  name: 'peanut butter',
  category: 'nuts'
},
{
  name: 'almond',
  category: 'nuts'
},
{
  name: 'hazelnut',
  category: 'nuts'
},
{
  name: 'pistachio',
  category: 'nuts'
},
{
  name: 'chestnut',
  category: 'nuts'
},
{
  name: 'peanut',
  category: 'nuts'
},
{
  name: 'margarine',
  category: 'dairy products'
},
{
  name: 'coconut milk',
  category: 'dairy products'
},
{
  name: 'almond milk',
  category: 'dairy products'
},
{
  name: 'soy milk',
  category: 'dairy products'
},
{
  name: 'rice milk',
  category: 'dairy products'
},
{
  name: 'milk',
  category: 'dairy products'
},
{
  name: 'yogurt',
  category: 'dairy products'
},
{
  name: 'condensed cream',
  category: 'dairy products'
},
{
  name: 'cottage cheese',
  category: 'dairy products'
},
{
  name: 'cream cheese',
  category: 'dairy products'
},
{
  name: 'crème fraîche',
  category: 'dairy products'
},
{
  name: 'dulce de Leche',
  category: 'dairy products'
},
{
  name: 'evaporated milk',
  category: 'dairy products'
},
{
  name: 'feta',
  category: 'dairy products'
},
{
  name: 'graviera',
  category: 'dairy products'
},
{
  name: 'parmesan',
  category: 'dairy products'
},
{
  name: 'blue',
  category: 'dairy products'
},
{
  name: 'brie',
  category: 'dairy products'
},
{
  name: 'camembert',
  category: 'dairy products'
},
{
  name: 'cheddar',
  category: 'dairy products'
},
{
  name: 'gouda',
  category: 'dairy products'
},
{
  name: 'gruyere',
  category: 'dairy products'
},
{
  name: 'mozzarella',
  category: 'dairy products'
},
{
  name: 'parmesan',
  category: 'dairy products'
},
{
  name: 'pecorino',
  category: 'dairy products'
},
{
  name: 'egg',
  category: 'dairy products'
},
{
  name: 'butter',
  category: 'dairy products'
},
{
  name: 'cinnamon',
  category: 'spices'
},
{
  name: 'paprika',
  category: 'spices'
},
{
  name: 'garlic powder',
  category: 'spices'
},
{
  name: 'chili powder',
  category: 'spices'
},
{
  name: 'cumin',
  category: 'spices'
},
{
  name: 'cayenne',
  category: 'spices'
},
{
  name: 'oregano',
  category: 'spices'
},
{
  name: 'pepper',
  category: 'vegetables'
},
{
  name: 'salt',
  category: 'spices'
},
{
  name: 'lemon',
  category: 'fruits'
},
{
  name: 'apple',
  category: 'fruits'
},
{
  name: 'banana',
  category: 'fruits'
},
{
  name: 'lime',
  category: 'fruits'
},
{
  name: 'strawberry',
  category: 'fruits'
},
{
  name: 'orange',
  category: 'fruits'
},
{
  name: 'coconut',
  category: 'fruits'
},
{
  name: 'grape',
  category: 'fruits'
},
{
  name: 'peach',
  category: 'fruits'
},
{
  name: 'pineapple',
  category: 'fruits'
},
{
  name: 'blueberry',
  category: 'fruits'
},
{
  name: 'blackberry',
  category: 'fruits'
},
{
  name: 'raisin',
  category: 'fruits'
},
{
  name: 'cherry',
  category: 'fruits'
},
{
  name: 'kiwi',
  category: 'fruits'
},
{
  name: 'grapefruit',
  category: 'fruits'
},
{
  name: 'mandarin',
  category: 'fruits'
},
{
  name: 'watermelon',
  category: 'fruits'
},
{
  name: 'mango',
  category: 'fruits'
},
{
  name: 'pear',
  category: 'fruits'
},
{
  name: 'nectarine',
  category: 'fruits'
},
{
  name: 'guava',
  category: 'fruits'
},
{
  name: 'rice',
  category: 'grains'
},
{
  name: 'cereals',
  category: 'grains'
},
];

module.exports = ingredients;