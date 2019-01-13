const {
  $type
} = Entity = require('@oudy/entity-mongodb')

class User extends Entity {

}

User[$type] = {
  id: String,
  name: String,
  email: String,
  age: Number
}

module.exports = User