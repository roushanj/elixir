const chai = require('chai');
const chaiHttp = require('chai-http');

chai.use(chaiHttp);

let should = chai.should();

describe('for main route', function(){

	it('first test', function () {
	  
	  chai.request('http://localhost:4000')
    	  .get('/');
    	   	
    	 
	}).then(done, done);
});