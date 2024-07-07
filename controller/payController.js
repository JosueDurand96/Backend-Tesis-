import Pay from "../model/paymentModel.js"

export const create = async(req, res) => {
    try {
        const payData = new Pay(req.body);
        const savedPay = await payData.save();
        res.status(200).json({ mesagge: "Pago exitoso."});
    } catch (error) {
        res.status(500).json({ error: "Internal server error."});
    }
} 

export const fetch = async(req, res) => {
    try {
        const pay = await Pay.find();
        if(pay.length === 0) {
          return res.status(404).json({ error: "Pago no encontrada!" });
        }
        res.status(200).json({ data: pay});
    } catch(error){
        res.status(500).json({ error: "Internal Server error." });
    }
}