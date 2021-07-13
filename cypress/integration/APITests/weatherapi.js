describe('check weather informaiton', ()=>{


    it('get weather ifnormation for cities', ()=>{
        //1st request: GET locations 
        cy.request({
              method: 'GET',
              url: 'https://www.metaweather.com/api/location/search/?query=San'
           
        }).then((resp)=>{
            const city = resp.body[0].title
            return city
        })
            .then((city)=>{
                //2nd request for the first location/city
                cy.request({
                    method: 'GET',
                    url: 'https://www.metaweather.com/api/location/search/?query='+city
                }).then((resp)=>{
                    expect(resp.status).to.eq(200)
                    expect(resp.body[0]).to.have.property('title', city)
                })

            })

    })


    it.only('get weather information for all cities', ()=>{
        //1st request: GET locations 
        cy.request({
              method: 'GET',
              url: 'https://www.metaweather.com/api/location/search/?query=San'
           
        }).then((resp)=>{
            const location = resp.body
            return location
        })
            .then((location)=>{

                for(let i=0; i< location.length; i++){
                //2nd request for the first location/city
                cy.request({
                    method: 'GET',
                    url: 'https://www.metaweather.com/api/location/search/?query='+location[i].title
                }).then((resp)=>{
                    expect(resp.status).to.eq(200)
                    expect(resp.body[0]).to.have.property('title', location[i].title)
                })

            }

            })

    })

    









})