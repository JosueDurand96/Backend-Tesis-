import Parent from "../model/parentModel.js"

export const create = async(req, res) => {
    try {
        
        const parentData = new Parent(req.body);
        const { number_document } = parentData;
        const parentExist = await Parent.findOne({ number_document });
        if(parentExist){
            return res.status(400).json( { message: "El usuario ya existe."} );
        }
        const savedParent = await parentData.save();
        res.status(200).json(savedParent);
    } catch (error) {
        res.status(500).json({ error: "Internal server error."});
    }
} 

export const login = async(req, res) => {
    try {
        
        const { email, password } = req.body;
        const data = await Parent.findOne({ email });

        if (email === data.email && password === data.password) {
    
            return res.status(200).json({ message: 'Usuario logueado correctamente' });
            
        } else {
            return res.status(401).json({ message: 'Au' });
        }  

    } catch (error) {

        res.status(500).json({ error: "Internal server error."});

    }
}