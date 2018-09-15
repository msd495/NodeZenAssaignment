let request = require('request');

let base_url = "http://localhost:3000/api/v1/getPdf/Arjun";
let server = require('../../index');
// let route = require('../../route');
// let pdfDown = require('../../controller/pdfDownload');

describe("PDF DOWNLOAD", () => {
    // let server;
    // beforeAll(() => {
    //     server = require('../../index');
    // });
    // afterAll(() => {
    //     server.close();
    // });

    describe("GET /",()=>{
        it("Returns Status code 200",(done)=>{
            request.get(base_url+"",(error,response,body)=>{
                expect(response.statusCode).toBe(200);
                done();
            });
        });
    });

})