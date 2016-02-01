/* eslint-env node, mocha */
const expect = require('chai').expect
const reqMock = require('../mocks/requester.mock.js')

const module = require('../../src/endpoints/tokeninfo.js')

describe('endpoints > tokeninfo', () => {
  let endpoint
  beforeEach(() => {
    endpoint = new module(false)
    reqMock.reset()
    endpoint.requester = reqMock
  })

  it('test /v2/tokeninfo', async () => {
    expect(endpoint.isAuthenticated).to.equal(true)
    expect(endpoint.url).to.equal('/v2/tokeninfo')

    reqMock.addResponse({
      id: "017A2B0C-A6C5-CC4D-A055-680F427CE8FD",
      name: "public key",
      permissions: [
        "account",
        "characters"
      ]
    })
    let content = await endpoint.get()
    expect(content.name).to.equal('public key')
  })
})