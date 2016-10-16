import AbstractEndpoint from '../endpoint'

export default class EventsEndpoint extends AbstractEndpoint {
  constructor (client) {
    super(client)
    this.url = '/v1/event_details.json'
    this.cacheTime = 24 * 60 * 60
  }

  all () {
    return super.get().then(transformV1Format)
  }

  get (id) {
    return super.get(`?event_id=${id}`, true).then(json => transformV1Format(json)[0])
  }
}

function transformV1Format (json) {
  let events = json.events
  let transformed = []

  for (let id in events) {
    transformed.push({
      id: id,
      ...events[id]
    })
  }

  return transformed
}
