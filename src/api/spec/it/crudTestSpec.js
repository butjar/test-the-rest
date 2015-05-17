var request = require('sync-request');

var ApplicationProperties = require('../../setup/applicationProperties');  

describe('A Campaign', function() {

  var createCampaignResponse;
  var createCampaignResponseBody;
  var payload = { type: 'foo', title: 'bar'};
  var requestPath = ['http://', ApplicationProperties.testHost, ':', ApplicationProperties.testPort, '/api/campaign'].join('');

  beforeAll(function() {
    var options = { 
      json: payload
    };

    createCampaignResponse = request('POST', requestPath, options);
    createCampaignResponseBody = JSON.parse(createCampaignResponse.getBody('UTF-8'));
  });

  afterAll(function() {

  });

  it('has been created with the correct type', function() {
    expect(createCampaignResponseBody.type).toEqual(payload.type);
  });

  it('has been created with the correct title', function() {
    expect(createCampaignResponseBody.title).toEqual(payload.title);
  });

  it('is included in the GET /campagin response', function() {
    var getAllCampaignsResponseBody = JSON.parse(request('GET', requestPath, {}).getBody('UTF-8'));
    for(var i in getAllCampaignsResponseBody){
      if(getAllCampaignsResponseBody[i].id === createCampaignResponse.id){
        expect(getAllCampaignsResponseBody[i]).toEqual(createCampaignResponse);
      }
    }
  });

  it('detail can be found in GET /campaign/:id', function() {
    var getCampaignDetailResponseBody = JSON.parse(request('GET', [requestPath, '/', createCampaignResponseBody.id].join(''), {}).getBody('UTF-8'));
    expect(getCampaignDetailResponseBody).toEqual(createCampaignResponseBody);
  });

  it('is updated with DELETE /campaign/:id', function() {
    var updatePayload = { type: 'baz', title: 'qux' };
    var updateCampaignResponseBody = JSON.parse(request('PUT', [requestPath, '/', createCampaignResponseBody.id].join(''), {json: updatePayload}).getBody('UTF-8')); 
    expect({ type: updateCampaignResponseBody.type, title: updateCampaignResponseBody.title}).toEqual(updatePayload);
  });
  
  it('is deleted with DELETE /campaign/:id', function() {
    var deleteCampaignResponseBody = JSON.parse(request('DELETE', [requestPath, '/', createCampaignResponseBody.id].join(''), {}).getBody('UTF-8'));
    var getCampaignDetailResponseBody = JSON.parse(request('GET', [requestPath, '/', createCampaignResponseBody.id].join(''), {}).getBody('UTF-8'));
    expect(getCampaignDetailResponseBody).toEqual(null);
  });

});
