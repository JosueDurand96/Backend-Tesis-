import School from "../model/schoolModel.js"

export const create = async(req, res) => {
    try {
        const schoolData = new School(req.body);
        const { name } = schoolData;
        const parentExist = await School.findOne({ name });
        if(parentExist){
            return res.status(400).json( { message: "School already exists."} );
        }
        const savedParent = await schoolData.save();
        res.status(200).json(savedParent);
    } catch (error) {
        res.status(500).json({ error: "Internal server error."});
    }
} 

export const fetch = async(req, res) => {
    try {
        const school = await School.find();
        if(school.length === 0) {
          return res.status(404).json({ error: "Colegio no encontrado!" });
        }
        res.status(200).json(school);
    } catch(error){
        res.status(500).json({ error: "Internal Server error." });
    }

};

export const update = async(req, res) => {
    try {
        const id = req.params.id;
        const schoolExist = await School.findOne({ _id: id});

        if(!schoolExist) {
          return res.status(404).json({ error: "Colegio no actualizado!" });
        }
        const updateSchool = await School.findByIdAndUpdate(id, req.body, {new: true})
        res.status(200).json(updateSchool);
    } catch (error) {
        res.status(500).json({ error: "Internal Server error." });
    }
}

export const deleteSchool = async(req, res) => {
    try {
        const id = req.params.id;
        const schoolExist = await School.findOne({ _id: id});
        if(!schoolExist) {
            return res.status(404).json({ error: "Colegio no actualizado!" });
        }
        await School.findByIdAndDelete(id);
        res.status(201).json({ message: "Colegio eliminado correctamente"});

    } catch (error) {
        res.status(500).json({ error: "Internal Server error." });
    }
}