
export default class {

    resultCountTobe(){
       return cy.get('[class="search-header"]')
    };

    resultMessage(){
        return cy.get('[class="message"]');
    }

    searchProduct(productName){
        cy.get('.search-input').type(`${productName}{enter}`,{force: true});
    }

    assertSearchResult(productName){  
        cy.get('[class="name"]').each(($item)=> {
        cy.wrap($item).contains( productName, { matchCase: false });
    })
    }
}