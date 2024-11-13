Readme
====

## Vista dinamica general


![image](https://github.com/user-attachments/assets/9c44a672-90ab-4440-b5fa-6ad4798ee593)

[Microservicio de Reportes](./reportes/README.md)

[Microservicio de Estudiantes](./estudiantes/README.md)


## Patrones de microservicios utilizados

- API Gateway (Identificado como gateway en el diagrama)
- Database per Service - Los microservicios que tienen conexión a base de datos tienen un repositorio de datos dedicado según la información que procesan
- Aggregator - El microservicio de reportes unifica los datos obtenidos de los diferentes microservicios para formular y unificar una respuesta