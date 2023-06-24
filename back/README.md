# Endpoints

## Cintas

- http://localhost:5000/api/cinta/ GET (obtiene 3 cosas, as cintas totales, las cintas prestadas y las cintas no prestadas)
- http://localhost:5000/api/cinta/ POST (guarda una cinta)

### Estructura

```json
{
    "pelicula": "6495bb11901da15ceab9d501",
}
```

## Fichas

### Prestamo

- http://localhost:5000/api/ficha/prestamo GET (obtiene todas las fichas de préstamo realizadas)
- http://localhost:5000/api/ficha/prestamo POST (guarda una ficha) 
- http://localhost:5000/api/ficha/prestamo PUT (cambia el estado "entregado" de la ficha a true y el estado de la cinta tambien )

### Estructura

```json
{
    "cinta": "6495bb11901da15ceab9d501",
    "socio": "6495a74de2ddf1a1e94fb31f",
    "fecha": "por defecto el plazo es de una semana", 
}
```

### Espera

- http://localhost:5000/api/ficha/espera GET (obtiene todas las fichas de préstamo realizadas)

### Estructura

```json
{
    "cinta": "6495c25b581aa9ddb7ccef6c",
    "socioSolicitante": "6495bdb245bd419f237e4aa2",
    "socioRetrasado": "6495a74de2ddf1a1e94fb31f",
    "diasDeRetardo": 2
}
```


## Ficha Pelicula

- http://localhost:5000/api/pelicula/ GET (obtiene todas las peliculas)
- http://localhost:5000/api/pelicula/ POST (guarda otra pelicula)

### Estructura

```json
{
    "nombre": "Creed III",
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

## PDF

- http://localhost:5000/api/pdf/ GET (obtiene los pdf)

