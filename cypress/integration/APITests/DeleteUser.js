/// <reference types="Cypress" />
const dataJson = require('../../fixtures/createuser')

describe('Delete user request', () => {
 let accessToken = '007526d9efdbc07e084ff7a6d4cfcc90588fbe20641c00faebf45a7f3b2eaf33'
let randomText = ""
let testEmail = ""
    it.only('create user test', () => {
            //1. create user (POST)
            cy.request({
                method: 'POST',
                url: 'https://gorest.co.in/public/v1/users',
                headers: {
                    'Authorization': 'Bearer ' + accessToken
                },
                body: {
                    "name":"Test Automation Cypress User",
                    "gender":"male",
                    "email": "naveenCypressuser@gmail.com",
                    "status":"active"
                  }
   
            }).then((res)=>{
                cy.log(JSON.stringify(res))
                expect(res.status).to.eq(201)
                expect(res.body.data).has.property('email', 'naveenCypressuser@gmail.com')
                expect(res.body.data).has.property('name','Test Automation Cypress User')
            }).then((res) =>{
                   const userId = res.body.data.id 
                    cy.log("user id is: " + userId)
                    //2. delete user (DELETE)
                    cy.request({
                        method: 'DELETE',
                        url: 'https://gorest.co.in/public/v1/users/'+userId,
                        headers: {
                            'Authorization': 'Bearer ' + accessToken
                        }
                    }).then((res)=>{
                        expect(res.status).to.eq(204)
                    })
            })
            
        
        
    })
})