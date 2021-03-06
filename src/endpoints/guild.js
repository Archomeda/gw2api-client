import AbstractEndpoint from '../endpoint'

export default class GuildEndpoint extends AbstractEndpoint {
  constructor (client, id) {
    super(client)
    this.id = id
    this.url = '/v2/guild'
    this.isAuthenticated = true
    this.isOptionallyAuthenticated = true
    this.cacheTime = 60 * 60
  }

  get (id) {
    return super.get(`/${id}`, true)
  }

  permissions () {
    return new PermissionsEndpoint(this)
  }

  search (name) {
    return new SearchEndpoint(this, name)
  }

  upgrades () {
    if (this.id === undefined) {
      return new AllUpgradesEndpoint(this)
    }

    return new UpgradesEndpoint(this, this.id)
  }

  log () {
    return new LogEndpoint(this, this.id)
  }

  members () {
    return new MembersEndpoint(this, this.id)
  }

  ranks () {
    return new RanksEndpoint(this, this.id)
  }

  stash () {
    return new StashEndpoint(this, this.id)
  }

  teams () {
    return new TeamsEndpoint(this, this.id)
  }

  treasury () {
    return new TreasuryEndpoint(this, this.id)
  }
}

class PermissionsEndpoint extends AbstractEndpoint {
  constructor (client) {
    super(client)
    this.url = '/v2/guild/permissions'
    this.isPaginated = true
    this.isBulk = true
    this.isLocalized = true
    this.cacheTime = 24 * 60 * 60
  }
}

class SearchEndpoint extends AbstractEndpoint {
  constructor (client) {
    super(client)
    this.url = '/v2/guild/search'
    this.cacheTime = 60 * 60
  }

  name (name) {
    return super.get(`?name=${encodeURIComponent(name)}`, true)
      .then(result => result[0])
  }
}

class AllUpgradesEndpoint extends AbstractEndpoint {
  constructor (client) {
    super(client)
    this.url = '/v2/guild/upgrades'
    this.isPaginated = true
    this.isBulk = true
    this.isLocalized = true
    this.cacheTime = 24 * 60 * 60
  }
}

class LogEndpoint extends AbstractEndpoint {
  constructor (client, id) {
    super(client)
    this.url = `/v2/guild/${encodeURIComponent(id)}/log`
    this.isAuthenticated = true
    this.cacheTime = 5 * 60
  }
}

class MembersEndpoint extends AbstractEndpoint {
  constructor (client, id) {
    super(client)
    this.url = `/v2/guild/${encodeURIComponent(id)}/members`
    this.isAuthenticated = true
    this.cacheTime = 5 * 60
  }
}

class RanksEndpoint extends AbstractEndpoint {
  constructor (client, id) {
    super(client)
    this.url = `/v2/guild/${encodeURIComponent(id)}/ranks`
    this.isAuthenticated = true
    this.cacheTime = 5 * 60
  }
}

class StashEndpoint extends AbstractEndpoint {
  constructor (client, id) {
    super(client)
    this.url = `/v2/guild/${encodeURIComponent(id)}/stash`
    this.isAuthenticated = true
    this.cacheTime = 5 * 60
  }
}

class TeamsEndpoint extends AbstractEndpoint {
  constructor (client, id) {
    super(client)
    this.url = `/v2/guild/${encodeURIComponent(id)}/teams`
    this.isAuthenticated = true
    this.cacheTime = 5 * 60
  }
}

class TreasuryEndpoint extends AbstractEndpoint {
  constructor (client, id) {
    super(client)
    this.url = `/v2/guild/${encodeURIComponent(id)}/treasury`
    this.isAuthenticated = true
    this.cacheTime = 5 * 60
  }
}

class UpgradesEndpoint extends AbstractEndpoint {
  constructor (client, id) {
    super(client)
    this.url = `/v2/guild/${encodeURIComponent(id)}/upgrades`
    this.isAuthenticated = true
    this.cacheTime = 5 * 60
  }
}
