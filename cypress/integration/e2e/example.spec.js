import ExamplePage from '../../pages/example.pages';
import helper from '../../src/reusablefunctions'

describe('Example',()=> {
    const examplePage = new ExamplePage();

    it('saasas', ()=> {
        examplePage.navigateTo('https://www.google.com')
        .clickOnBtn('.bnt');
        helper.checkTextExist();
    });
});