

class Controller {
  static async run(application, request, response, route, payload) {
    return {
      hello: 'world'
    }
  }
}

Controller.route = {
  url: /^\/$/
}

module.exports = Controller