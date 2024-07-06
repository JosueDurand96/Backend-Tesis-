import Movie from "../model/movieModel.js"

export const create = async(req, res) => {
    try {
        const movieData = new Movie(req.body);
        const { name } = movieData;
        const movieExist = await Movie.findOne({ name });
        if(movieExist){
            return res.status(400).json( { message: "La pelicula ya existe!"} );
        }
        const savedMovie = await movieData.save();
        res.status(200).json(savedMovie);
    } catch (error) {
        res.status(500).json({ error: "Internal server error."});
    }
} 

export const fetch = async(req, res) => {
    try {
        const movie = await Movie.find();
        if(movie.length === 0) {
          return res.status(404).json({ error: "Pelicula no encontrado!" });
        }
        res.status(200).json({ data: movie});
    } catch(error){
        res.status(500).json({ error: "Internal Server error." });
    }
}