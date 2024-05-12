import Worker from "../model/workerModel.js"

export const create = async(req, res) => {
    try {
        const workerData = new Worker(req.body);
        const { number_document } = workerData;
        const workerExist = await Worker.findOne({ number_document });
        if(workerExist){
            return res.status(400).json( { message: "Ese trabajador ya ha sido registrado."} );
        }
        const savedWorker = await workerData.save();
        res.status(200).json(savedWorker);
    } catch (error) {
        res.status(500).json({ error: "Internal server error."});
    }
} 