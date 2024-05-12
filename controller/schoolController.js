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