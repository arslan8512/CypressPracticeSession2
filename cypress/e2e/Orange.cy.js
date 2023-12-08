describe ("Implmenting the custom commands ",()=>{
beforeEach("launch Orange HRM", () => { 
  cy.login()
  cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index");
  });

  it("Add admin in admin tab", () => {
    //cy.get(':nth-child(1) > .oxd-main-menu-item').click()
    //cy.get('.orangehrm-header-container > .oxd-button').click()
    cy.AddAdmin()
    
    });
    it("Test visit URL with session", ()=> {

    });
})