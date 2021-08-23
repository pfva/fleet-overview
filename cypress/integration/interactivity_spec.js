describe('Page interactivity works as expected', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('switches to an input field when clicking on a piece of vehicle data', () => {
    cy.get('[data-testid="VehicleTableCell-text"]').first().click();
    cy.get('[data-testid="VehicleTableCell-input"]').should('have.value', 'v1');
  });

  it('saves the input value on pressing enter', () => {
    cy.contains('AB23').click();
    cy.get('[data-testid="VehicleTableCell-input"]')
      .should('have.value', 'AB23')
      .clear()
      .type('YYY333{enter}');
    cy.contains('YYY333');
  });

  it('clears the input value on pressing escape', () => {
    cy.contains('AB23').click();
    cy.get('[data-testid="VehicleTableCell-input"]')
      .should('have.value', 'AB23')
      .type('YYY333{esc}');
    cy.contains('AB23');
  });

  it('toggles the status from active to inactive on click', () => {
    cy.get('[data-testid="VehicleTableRow"]')
      .first()
      .children('[data-testid="VehicleStatus-on"]')
      .click();

    cy.get('[data-testid="VehicleTableRow"]')
      .first()
      .children('[data-testid="VehicleStatus-on"]')
      .should('not.exist');

    cy.get('[data-testid="VehicleTableRow"]')
      .first()
      .children('[data-testid="VehicleStatus-off"]')
      .should('exist');
  });

  it('switches to display equipment checkboxes when clicking on a piece of equipment data', () => {
    cy.get('[data-testid="VehicleEquipments-wrapper"]').first().click();
    cy.get('[data-testid="VehicleEquipments-checkbox-wrapper"]').should(
      'exist'
    );
  });

  it('toggles the presence of a piece of equipment on click', () => {
    cy.get('[data-testid="VehicleEquipments-wrapper"]').first().click();
    cy.get('[data-testid="VehicleEquipments-checkbox-wrapper"]').should(
      'exist'
    );
    cy.get(
      '[data-testid="VehicleEquipments-checkbox-wrapper"] input[data-equipment-id]'
    )
      .first()
      .should('be.checked')
      .click()
      .should('not.be.checked');
  });
});
