import searchPage from "../../pageObjects/searchPage";

describe('search box functionality', () => {

  const SearchPage = new searchPage();

  beforeEach(()=> {

    cy.visit('/');
    cy.get('#onetrust-accept-btn-handler').click();
  });

  it('Validate user can search the product ', () => {

    const productName = 'bathtub'

    SearchPage.searchProduct(productName);
    SearchPage.assertSearchResult(productName);
  })

  it('Validate Search Result Not Found ', () => {

    const productName = 'milan'
   
    SearchPage.searchProduct(productName);
    SearchPage.resultCountTobe().contains('0')
    SearchPage.resultMessage().contains(`No search results for '${productName}'`);
  })
})