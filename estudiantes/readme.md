**Microservicio de Estudiantes**
Este microservicio está consultar datos de estudiantes, y crear nuevos estudiantes.
Para poder hacerlo, debe tener conexión a los demás microservicios del sistema


**Rutas**
Obtiene el listado de estudiantes. 
Puede filtrar por cualquiera de los atributos de la entidad student.
Puede establecer un atributo de ordenamiento, y la direccion (ASC | DESC)

**Path GET /students/**

**Params** 
id : int (opcional)
first_name : string (opcional)
last_name : string (opcional)
age : int (opcional)
gender : string (M | F) (opcional)
document_number : string (opcional)
city_of_residence : string (opcional)
university_book_number : string (opcional)
sort_by : string (opcional)
order : string (ASC | DESC) (opcional)

**Response**

[
    {
        "id": int,
        "first_name": string,
        "last_name": string,
        "age": int,
        "gender": string (M | F),
        "document_number": string,
        "city_of_residence": string,
        "university_book_number": string
    }
]

Persitir un nuevo estudiante

**Path POST /students/**

**Body Params**

{
    "first_name": string,
    "last_name":string,
    "age":int,
    "gender":string (M | F),
    "document_number":string,
    "city_of_residence":string,
    "university_book_number":int
}

**Response**

{  
    "id":int,
    "first_name": string,
    "last_name":string,
    "age":int,
    "gender":string (M | F),
    "document_number":string,
    "city_of_residence":string,
    "university_book_number":int
}
