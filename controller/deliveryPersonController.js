import DeliveryPerson from "../model/deliveryPersonModel.js"

export const create = async(req, res) => {
    try {
        
        const deliveryPersonData = new DeliveryPerson(req.body);
        const { number_document } = deliveryPersonData;
        const deliveryPersonExist = await DeliveryPerson.findOne({ number_document });
        if(deliveryPersonExist){
            return res.status(400).json( { message: "El usuario ya existe."} );
        }
        const savedParent = await deliveryPersonData.save();
        res.status(200).json(savedParent);
    } catch (error) {
        res.status(500).json({ error: "Internal server error."});
    }
} 

export const fetch = async(req, res) => {
    try {
        const deliveryPerson = await DeliveryPerson.find();
        if(deliveryPerson.length === 0) {
          return res.status(404).json({ error: "Apoderado no encontrado!" });
        }
        res.status(200).json({ data: deliveryPerson});
    } catch(error){
        res.status(500).json({ error: "Internal Server error." });
    }
}

export const update = async(req, res) => {
    try {
        const id = req.params.id;
        const deliveryPersonExist = await DeliveryPerson.findOne({ _id: id});

        if(!deliveryPersonExist) {
          return res.status(404).json({ error: "Apoderado no encontrado!" });
        }
        const updateDeliveryPerson = await DeliveryPerson.findByIdAndUpdate(id, req.body, {new: true})
        res.status(201).json({ message: "Los datos han sido actualizado correctamente.", updateDeliveryPerson});
    } catch (error) {
        res.status(500).json({ error: "Internal Server error." });
    }
}

export const deleteDeliveryPerson = async(req, res) => {
    try {
        const id = req.params.id;
        const deliveryPersonExist = await DeliveryPerson.findOne({ _id: id});
        if(!deliveryPersonExist) {
            return res.status(404).json({ error: "El apoderado no ha sido eliminado!" });
        }
        await DeliveryPerson.findByIdAndDelete(id);
        res.status(201).json({ message: "Apoderado eliminado correctamente!"});

    } catch (error) {
        res.status(500).json({ error: "Internal Server error." });
    }
}