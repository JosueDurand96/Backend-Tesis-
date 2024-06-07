import Student from "../model/studentModel.js"

export const create = async(req, res) => {
    try {
        
        const studentData = new Student(req.body);
        const { number_document } = studentData;
        const studentExist = await Student.findOne({ number_document });
        if(studentExist){
            return res.status(400).json( { message: "El estudiante ya existe."} );
        }
        const savedParent = await studentData.save();
        res.status(200).json(savedParent);

    } catch (error) {
        res.status(500).json({ error: "Internal server error."});
    }
} 

export const fetch = async(req, res) => {
    try {
        const student = await Student.find();
        if(student.length === 0) {
          return res.status(404).json({ error: "Estudiante no encontrado!" });
        }
        res.status(200).json({ data: student});
    } catch(error){
        res.status(500).json({ error: "Internal Server error." });
    }

};

export const update = async(req, res) => {
    try {
        const id = req.params.id;
        const studentExist = await Student.findOne({ _id: id});

        if(!studentExist) {
          return res.status(404).json({ error: "No se encontra colegio con ese ID!" });
        }
        const updateStudent = await Student.findByIdAndUpdate(id, req.body, {new: true})
        res.status(201).json({ message: "Los datos del estudiante ha sido actualizado correctamente!", updateStudent});
    } catch (error) {
        res.status(500).json({ error: "Internal Server error." });
    }
}

export const deleteStudent = async(req, res) => {
    try {
        const id = req.params.id;
        const studentExist = await Student.findOne({ _id: id});
        if(!studentExist) {
            return res.status(404).json({ error: "No se encontra alumno con ese ID!" });
        }
        await Student.findByIdAndDelete(id);
        res.status(201).json({ message: "Estudiante eliminado correctamente!"});

    } catch (error) {
        res.status(500).json({ error: "Internal Server error." });
    }
}