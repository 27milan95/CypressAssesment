

import DealerPage from "../../pageObjects/DealerPage";

describe('Search Dealer Functionality', () => {
  
  const dealerPage = new DealerPage();


  beforeEach(()=> {

    cy.visit('/');
    cy.get('#onetrust-accept-btn-handler').click();
  });


  it('Validate user can search dealer by cityName', () => {

    const CityName = 'Guelph'
    dealerPage.searchWhereToBuyTab(CityName);
    dealerPage.assertLocationResult(CityName);
  })

  it('Validate Search incorrect location ', () => {

    const CityName = 'Jaimin'
   
    dealerPage.searchWhereToBuyTab(CityName);
    dealerPage.resultCountTobe().contains('0')
  })
})