Microservicio de Estudiantes
==============

Este microservicio sirve para consultar datos de estudiantes, y crear nuevos estudiantes.

Depende de el microservicio de matriculados, para poder obtener los estudiantes de una determinada carrera. (parametro carreer_id)

# Tecnologias y setup

El microservicio se encuentra implementado en nodejs, con expressjs. La base de datos que utiliza es una base de datos postgres, cuyos datos de acceso se encuentran en el archivo .env

El script con el schema necesario para correr el microservicio se encuentra en [schema](./schema.sql).
Tambien ver las variables de ambiente en .env para la conexion a la DB (DB_NAME, DB_HOST, DB_USER, DB_PASSWORD, DB_PORT)

Una ves corriendo la Base de datos, el servidor node se levanta con node app.js

# Arquitectura interna

El microservicio esta implementado con una arquitectura por capas, siendo estas 

- Routers
- Controllers
- Services
- Repositories.

En el caso del repositorio de enrollments (matriculados), los datos los obtiene mediante mocks, o llamando al microservicio de matriculados (no implementado) en funcion de una variable de entorno.

# Rutas
1. Obtiene el listado de estudiantes. 
Puede filtrar por cualquiera de los atributos de la entidad student.
Puede establecer un atributo de ordenamiento, y la direccion (ASC | DESC)

***Path GET /students/***

***Query Params***
* id : int (opcional)
* first_name : string (opcional)
* last_name : string (opcional)
* age : int (opcional)
* gender : string (M | F) (opcional)
* document_number : string (opcional)
* city_of_residence : string (opcional)
* university_book_number : string (opcional)
* carreer_id : string (opcional)
* sort_by : string (opcional)
* order : string (ASC | DESC) (opcional)

***Response***
 ```json
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
 ```

2. Persitir un nuevo estudiante

***Path POST /students/***

***Body Params***
 ```json
{
    "first_name": string,
    "last_name":string,
    "age":int,
    "gender":string (M | F),
    "document_number":string,
    "city_of_residence":string,
    "university_book_number":int
}
 ```
***Response***
 ```json
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
 ```
