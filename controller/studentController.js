import Student from "../model/studentModel.js"

export const create = async(req, res) => {
    try {
        
        const studentData = new Student(req.body);
        const { number_document } = studentData;
        const studentExist = await Student.findOne({ number_document });
        if(studentExist){
            return res.status(400).json( { message: "El usuario ya existe."} );
        }
        const savedParent = await studentData.save();
        res.status(200).json(savedParent);

    } catch (error) {
        res.status(500).json({ error: "Internal server error."});
    }
} 