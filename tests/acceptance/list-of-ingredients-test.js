import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from 'recipe-component/tests/helpers/start-app';

var application;

module('Acceptance | list of ingredients test', {
  beforeEach: function() {
    application = startApp();
  },

  afterEach: function() {
    Ember.run(application, 'destroy');
  }
});

test('visiting index lists the recipe ingredients', function(assert) {
  visit('/');

  andThen(function() {
    assert.equal(find('.recipe-ingredients').length, 13);
  });
});
