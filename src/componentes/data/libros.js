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