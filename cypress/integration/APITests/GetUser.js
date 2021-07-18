/// <reference types="Cypress" />
const dataJson = require('../../fixtures/example')
describe('api test cases',() => {
    var payload = ""
    let accesstoken= 'f6d5f728817405850f2f6aff23f8693a6352ca375383a2529e7150a74a9a8de6'
    it('get user', () => {        
        cy.request({
            method : 'GET',
            url : 'https://gorest.co.in/public-api/users/123/posts',
            headers: {
                'Authorization': 'Bearer '+accesstoken,
              }
        }).then((res)=>{
            expect(res.status).to.eq(200)
            expect(res.body.meta.pagination).has.property('limit',20)
            expect(res.body).has.to.deep.equal({
                "code": 200,
                "meta": {
                    "pagination": {
                        "total": 0,
                        "pages": 0,
                        "page": 1,
                        "limit": 20
                    }
                },
                "data": []
                })
        })
    })

    it('get user by id', () => {
        cy.request({
            method : 'GET',
            url : 'https://gorest.co.in/public-api/users/2',
            headers: {
                'authorization': 'Bearer '+accesstoken,
              }
        }).then((res)=>{
            expect(res.status).to.eq(200)
            expect(res.body.data.name).to.eq('Aatreya Khanna')
        })    
    })  
})