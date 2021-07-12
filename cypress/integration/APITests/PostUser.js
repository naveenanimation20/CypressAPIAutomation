/// <reference types="Cypress" />

const dataJson = require('../../fixtures/createuser')

describe('post user request', () => {
let accessToken = '007526d9efdbc07e084ff7a6d4cfcc90588fbe20641c00faebf45a7f3b2eaf33'
let randomText = ""
let testEmail = ""

    it('create user test', () => {

        var pattern = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
        for (var i = 0; i < 10; i++)
        randomText+=pattern.charAt(Math.floor(Math.random() * pattern.length));
        testEmail = randomText + '@gmail.com'

        cy.fixture('createuser').then((payload) =>{


        cy.request({
            method: 'POST',
            url: 'https://gorest.co.in/public/v1/users',
            headers: {
                'Authorization': 'Bearer ' + accessToken
            },
            body: {
                "name": payload.name,
                "gender": payload.gender,
                "email": testEmail,
                "status":payload.status
            }

        }).then((res)=>{
            cy.log(JSON.stringify(res))
            expect(res.status).to.eq(201)
            expect(res.body.data).has.property('email', testEmail)
            expect(res.body.data).has.property('name',payload.name)
            expect(res.body.data).has.property('status',payload.status)
            expect(res.body.data).has.property('gender',payload.gender)
            
        })




    })

})

})