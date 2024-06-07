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

export const fetch = async(req, res) => {
    try {
        const worker = await Worker.find();
        if(worker.length === 0) {
          return res.status(404).json({ error: "Trabajador no encontrado!" });
        }
        res.status(200).json({ data: worker});
    } catch(error){
        res.status(500).json({ error: "Internal Server error." });
    }
}

export const update = async(req, res) => {
    try {
        const id = req.params.id;
        const workerExist = await Worker.findOne({ _id: id});

        if(!workerExist) {
          return res.status(404).json({ error: "Trabajador no encontrado!" });
        }
        const updateWorker = await Worker.findByIdAndUpdate(id, req.body, {new: true})
        res.status(201).json({ message: "Los datos han sido actualizado correctamente.", updateWorker});
    } catch (error) {
        res.status(500).json({ error: "Internal Server error." });
    }
}

export const deleteWorker = async(req, res) => {
    try {
        const id = req.params.id;
        const workerExist = await Worker.findOne({ _id: id});
        if(!workerExist) {
            return res.status(404).json({ error: "El trabajador no ha sido eliminado!" });
        }
        await Worker.findByIdAndDelete(id);
        res.status(201).json({ message: "Trabajador eliminado correctamente!"});

    } catch (error) {
        res.status(500).json({ error: "Internal Server error." });
    }
}