
describe('My First Test', function () {
        it('Gets, types and asserts', function(){
            cy.visit('https://bili-and-sheep.github.io/CrashTest/')

            cy.get('#burger').click()

            cy.contains('counter').click()

            cy.url()
                .should('include', '/others/counter/')

            cy.contains('-').dblclick()
            .pause()
            cy.contains('+').click()
        })
})