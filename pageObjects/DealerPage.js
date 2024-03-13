export default class {

    resultCountTobe(){
        return cy.get('[class="d-block"]')
     };
 
    searchWhereToBuyTab(cityName){
        cy.get('[title="Where to Buy"]').first().click();
        cy.intercept('**/_search').as('waitForMe');
        cy.wait('@waitForMe', { timeout: 20000 }).then(() => {
        cy.get('.mapboxgl-ctrl-geocoder--input').click();
        cy.get('.mapboxgl-ctrl-geocoder--input').type(`${cityName}{enter}`,{force: true});
      });  
    }

    assertLocationResult(cityName){  
        cy.get('[class="address"]').each(($item)=> {     
        cy.wrap($item).contains( cityName, { matchCase: false });
    })
}
}