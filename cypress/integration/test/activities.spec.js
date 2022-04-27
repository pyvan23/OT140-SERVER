const url = 'http://localhost:3000/activities';
const id = 1;
const noId = 99999;

const activity = {
    name: 'TEST Name',
    content: 'TEST Content'
}

describe('Endpoint /activities', () => {

    it('Get all activities', () => {
        cy.request('GET', url)
            .should((response) => {
                expect('Content-Type', /json/)
                expect(response.status).to.eq(200)
                expect(response.body).to.deep.equal(response.body)
            });
    });

    it('Get an activity by Id', () => {
        cy.request(`${url}/${id}`)
            .should((response) => {
                expect(response.status).to.eq(201)
                expect(response.body).to.deep.equal(response.body)
                expect(response.body).to.have.property('data')
                expect(response.body).to.have.property('message')
            });
    });

    it('Get an activity by wrong Id', () => {
        cy.request({
            url: `${url}/${noId}`,
            failOnStatusCode: false
        }).should((response) => {
            expect(response.status).to.eq(404)
            expect(response.body).to.not.be.null
        });
    });

    it('Post a new activity', () => {
        cy.request({
                method: 'POST',
                url,
                body: activity
            }).should((response) => {
                expect(response.status).to.eq(200)
                expect(response.body).to.deep.equal(response.body)
            })
            .its('body')
    });

    it('Update an activity by Id', () => {
        cy.request({
                method: 'PUT',
                url: `${url}/${id}`,
                body: activity
            })
            .should((response) => {
                expect(response.status).to.eq(201)
                expect(response.body).to.deep.equal(response.body)
            });
    });

    it('Update an activity by wrong Id', () => {
        cy.request({
                method: 'PUT',
                url: `${url}/${noId}`,
                body: activity,
                failOnStatusCode: false
            })
            .should((response) => {
                expect(response.status).to.eq(404)
                expect(response.body).to.not.be.null
            });
    });

    it('Delete an activity by Id', () => {
        cy.request({
                method: 'DELETE',
                url: `${url}/${id}`,
            })
            .should((response) => {
                expect(response.status).to.eq(200)
                expect(response.body).to.deep.equal(response.body)
                expect(response.body).to.have.property('message')
            });
    });

    it('Delete an activity by wrong Id', () => {
        cy.request({
                method: 'DELETE',
                url: `${url}/${noId}`,
                failOnStatusCode: false
            })
            .should((response) => {
                expect(response.status).to.eq(404)
                expect(response.body).to.not.be.null
            });
    });
});