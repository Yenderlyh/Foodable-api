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
  category: 'condiments'
},
{
  name: 'tarragon',
  category: 'condiments'
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
  name: 'chilli ',
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
  category: 'meat'
},
{
  name: 'salmon',
  category: 'meat'
},
{
  name: 'caviar',
  category: 'meat'
},
{
  name: 'sardines',
  category: 'meat'
},
{
  name: 'smoked salmon',
  category: 'meat'
},
{
  name: 'shrimp',
  category: 'meat'
},
{
  name: 'crab',
  category: 'meat'
},
{
  name: 'prawns',
  category: 'meat'
},
{
  name: 'scallop',
  category: 'meat'
},
{
  name: 'lobster',
  category: 'meat'
},
{
  name: 'oyster',
  category: 'meat'
},
{
  name: 'calamari',
  category: 'meat'
},
{
  name: 'crawfish',
  category: 'meat'
},
{
  name: 'octopus',
  category: 'meat'
},
{
  name: 'mussel',
  category: 'meat'
},
{
  name: 'clam',
  category: 'meat'
},
{
  name: 'squid',
  category: 'meat'
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
  name: 'sugar',
  category: 'condiments'
},
{
  name: 'beef stock',
  category: 'condiments'
},
{
  name: 'beef',
  category: 'meat'
},
{
  name: 'pesto',
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
  name: 'marjoram',
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
  name: 'kidney beans',
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
  category: 'fuits'
},
{
  name: 'almond',
  category: 'fuits'
},
{
  name: 'hazelnut',
  category: 'fuits'
},
{
  name: 'pistachio',
  category: 'fuits'
},
{
  name: 'chestnut',
  category: 'fuits'
},
{
  name: 'peanut',
  category: 'fuits'
},
{
  name: 'margarine',
  category: 'dairy'
},
{
  name: 'coconut milk',
  category: 'dairy'
},
{
  name: 'almond milk',
  category: 'dairy'
},
{
  name: 'soy milk',
  category: 'dairy'
},
{
  name: 'rice milk',
  category: 'dairy'
},
{
  name: 'milk',
  category: 'dairy'
},
{
  name: 'yogurt',
  category: 'dairy'
},
{
  name: ' semi-skimmed milk',
  category: 'dairy'
},
{
  name: 'condensed cream',
  category: 'dairy'
},
{
  name: 'cottage cheese',
  category: 'dairy'
},
{
  name: 'cream cheese',
  category: 'dairy'
},
{
  name: 'crème fraîche',
  category: 'dairy'
},
{
  name: 'dulce de Leche',
  category: 'dairy'
},
{
  name: 'evaporated milk',
  category: 'dairy'
},
{
  name: 'feta',
  category: 'dairy'
},
{
  name: 'graviera',
  category: 'dairy'
},
{
  name: 'parmesan',
  category: 'dairy'
},
{
  name: 'blue',
  category: 'dairy'
},
{
  name: 'brie',
  category: 'dairy'
},
{
  name: 'camembert',
  category: 'dairy'
},
{
  name: 'cheddar',
  category: 'dairy'
},
{
  name: 'gouda',
  category: 'dairy'
},
{
  name: 'gruyere',
  category: 'dairy'
},
{
  name: 'mozzarella',
  category: 'dairy'
},
{
  name: 'parmesan',
  category: 'dairy'
},
{
  name: 'pecorino',
  category: 'dairy'
},
{
  name: 'egg',
  category: 'dairy'
},
{
  name: 'butter',
  category: 'dairy'
},
{
  name: 'cinnamon',
  category: 'condiments'
},
{
  name: 'paprika',
  category: 'condiments'
},
{
  name: 'garlic powder',
  category: 'condiments'
},
{
  name: 'chili powder',
  category: 'condiments'
},
{
  name: 'cumin',
  category: 'condiments'
},
{
  name: 'cayenne',
  category: 'condiments'
},
{
  name: 'oregano',
  category: 'condiments'
},
{
  name: 'cajun',
  category: 'condiments'
},
{
  name: 'chicken stock',
  category: 'condiments'
},
{
  name: 'pepper',
  category: 'vegetables'
},
{
  name: 'tomatoe purée',
  category: 'vegetables'
},
{
  name: 'salt',
  category: 'condiments'
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
  name: 'cherry tomatoes',
  category: 'vegetables'
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