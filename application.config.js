const Application = require('@oudy/backend/Application'),
  EntityComponent = require('@oudy/backend-component-entity'),
  MongoDB = require('@oudy/mongodb')

EntityComponent.use(Application)

const connected = Promise.all([
  MongoDB.configure(
    'mongodb://localhost:27017',
    { useNewUrlParser: true },
    'dev'
  )
])

class System {
  static beforeInitiate(application, request, response) {
    return connected.then(
      () => {

      }
    )
  }
}

module.exports = System