const librosArray = []
let key = 0

export const agregarLibro = (libro) => {
    let libroJson = libro
    key++
    libroJson.key = key
    librosArray.push(libroJson)

    console.log("Data libro", librosArray)
}

export const listarLibros = () => {
    return librosArray 
}

export const obtenerLibroKey = (clave) => {
    const objLibro = librosArray.find(libro => { return libro.key === clave })
    return objLibro
}

export const editarLibro = (dataLibro) => {
    librosArray.forEach(libro => {
        if (dataLibro.key === libro.key) {
            libro.categoria = dataLibro.categoriaE
            libro.titulo = dataLibro.tituloE
            libro.autor = dataLibro.autorE
        }
    })
    return librosArray
}



