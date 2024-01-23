const Socket = require("../model/paymentsocket");

class SessionController {
  onPaymentApproved(message) {
    return Socket.onPaymentApproved(message)
  }
}

module.exports = new SessionController();
