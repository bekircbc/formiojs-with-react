import {Formio} from 'formiojs';

let formio = new Formio('https://examples.form.io/example');

export const formioComponent = formio.loadForm((form) => {
  console.log(form);
  formio.saveSubmission({data: {
    firstName: 'Joe',
    lastName: 'Smith',
    email: 'joe@example.com'
  }}).then((submission) => {
    console.log(submission);
  });
});
