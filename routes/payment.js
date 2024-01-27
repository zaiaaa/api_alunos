const { default: axios } = require('axios')
const { Router, response } = require('express')
const router = Router()
const {MercadoPagoConfig, Payment} = require('mercadopago')
const controller = require("../controller/paymentsocket")
const { socket } = require('../model/paymentsocket')

router.post('/pagar', (req, res) =>{
    
    
    const client = new MercadoPagoConfig({ accessToken: process.env.ACCESS_TOKEN_MP });
    const payment = new Payment(client);
    
    const user = req.body
    console.log(user)
    const name = user.name.split(" ")
    
    payment.create({ body: {
        transaction_amount: 0.01,
        description: 'Troca de salas',
        payment_method_id: 'pix',
        payer: {
            "email": user.email,
            "first_name": name[0],
            "last_name": name[name.length -1],
            "identification": {
                "type": "CPF",
                "number": user.cpf
            }
        },
        notification_url: "https://eohifq4ml7lbinz.m.pipedream.net"
    } })
    .then(resp => {
        res.status(201).json(resp)
        console.log('Aguardando pagamento, QRCODE -> ', resp.point_of_interaction.transaction_data.qr_code)
        getStatusPayment(req, res, resp.id)
    }
    ).catch(console.log);
})

const getStatusPayment = (req, res, id) => {
    console.log(`https://api.mercadopago.com/v1/payments/${id}`)
    
    axios.get(`https://api.mercadopago.com/v1/payments/${id}`,{
        headers:{
            'Authorization': `Bearer ${process.env.ACCESS_TOKEN_MP}`
        }
    }).then(response => {
            try{
                if(response.data.status === "approved"){
                    controller.onPaymentApproved("PAGO")
                }else if(response.data.status === "cancelled"){
                    return
                }
                else{
                    setTimeout(() => getStatusPayment(req, res, id), 2000);
                }
            }catch(e){
                console.log(e)
            }
        }
    )
}   

router.put('/cancelar/:id_payment', (req, res) => {
    const {id_payment} = req.params
    const status = req.body
    console.log("cancelou")
    axios.put(`https://api.mercadopago.com/v1/payments/${id_payment}`, status, {
        headers:{
            'Authorization': `Bearer ${process.env.ACCESS_TOKEN_MP}`
        }
    })

    controller.left("SAIU")
})


module.exports = {router}