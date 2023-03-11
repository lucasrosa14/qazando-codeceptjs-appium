const { I } = inject();

Given('I see the email field', () => {
  I.waitForElement('~email', 10) 
});

Given('I fill email', () => {
  I.fillField('~email', 'teste@teste.com')
});

Given('I fill password', () => {
  I.fillField('~senha', secret('123456'))
});

When('I tap on Entrar', () => {
  I.tap('~entrar');
});

Then('I see the Salvar button', () => {
  I.waitForElement('~salvar', 5) 
  I.seeElement('~salvar')
});


