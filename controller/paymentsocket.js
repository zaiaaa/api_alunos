const Socket = require("../model/paymentsocket");

class SessionController {
  left(message){
    return Socket.left(message)
  }
  
  onPaymentApproved(message) {
    return Socket.onPaymentApproved(message)
  }
}

module.exports = new SessionController();
