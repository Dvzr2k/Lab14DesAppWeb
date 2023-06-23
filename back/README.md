# Endpoints

## Cintas

- http://localhost:5000/api/cinta/ GET (obtiene todas las cintas)
- http://localhost:5000/api/cinta/ POST (guarda una cinta)

### Estructura

```json
{
    "pelicula": "6495bb11901da15ceab9d501",
}
```

## Fichas de prestamo

- http://localhost:5000/api/ficha/ GET (obtiene todas las fichas de préstamo realizadas)
- http://localhost:5000/api/ficha/ POST (guarda una ficha) 
- http://localhost:5000/api/ficha/ PUT (cambia el estado "entregado" de la ficha a true y el estado de la cinta tambien )

### Estructura

```json
{
    "cinta": "6495bb11901da15ceab9d501",
    "socio": "6495a74de2ddf1a1e94fb31f",
    "fecha": "por defecto el plazo es de una semana", 
}
```

## Ficha Pelicula

- http://localhost:5000/api/pelicula/ GET (obtiene todas las peliculas)
- http://localhost:5000/api/pelicula/ POST (guarda otra pelicula)

### Estructura

```json
{
    "nonmbre": "Creed III",
    "director": "Michael B. Jordan",
    "reparto": ["Michaeñ B. Jordan", "Jonathan Majors", "Tessa Thompson", "José Benavidez Jr.", "Mila Davis-kent", "Florian Munteanu"],
    "genero": "Accion",
    "urlImage": "https://i.ytimg.com/vi/5THg1cCVTSM/maxresdefault.jpg"
}
```


## Socio

- http://localhost:5000/api/socio/ GET (obtiene los socios)
- http://localhost:5000/api/socio/ POST (guarda un socio)

### Estructura

```json

{
    "nombre": "jhon",
    "direccion": "jhon@test.com",
    "telefono": "987 654 321",
    "actoresFavoritos": ["Scarlet Johannson", "Chris Evans", "Tobey Maguire"],
    "generosFavoritos": ["Terror", "Ciencia Ficcion", "Superheores"],
    "directoresFavoritos": ["James Gunn", "James Cameron", "Sam Raimi"]
}

```