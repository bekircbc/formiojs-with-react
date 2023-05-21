import Formio from 'formiojs';

window.onload = function() {
    Formio.builder(document.getElementById('builder'), {}, {});
  };

  window.onload = function() {
    Formio.createForm(document.getElementById('formio'), 
    'https://examples.form.io/example');
  };

  window.onload = function() {
    Formio.createForm(document.getElementById('formio'), 
    'https://examples.form.io/wizard');
  };