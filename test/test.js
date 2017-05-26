let chai = require('chai');
let server = require('../server');

describe('Data', function() {
  it('should list ALL students on /studentss GET', function(done) {
    chai.request(server)
        .get('/students')
         .end(function(err, res){
            res.should.have.status(200);
            done();
        });
});
});
