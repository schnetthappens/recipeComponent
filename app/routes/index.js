import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){
    return [{

      ingredients: [
        '1 pound skinless, boneless chicken breasts',
        '1 cup sliced carrots',
        '1 cup frozen green peas',
        '1/2 cup sliced celery',
        '1/3 cup butter',
        '1/3 cup chopped onion',
        '1/3 cup all-purpose flour',
        '1/2 tsp salt',
        '1/4 teaspoon black pepper',
        '1 3/4 cups chicken broth',
        '2/3 cup milk',
        '2 (9 inch) unbaked pie crusts'
      ],

      servings: 8

    }];
  }
});
