const {
  $type
} = Entity = require('@oudy/entity-mongodb')

class Session extends Entity {

}

Session[$type] = {
  id: String,
  ip: String,
  lastTimeSeen: Number,
  data: Object
}

module.exports = Session