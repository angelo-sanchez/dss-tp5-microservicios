Readme
====

## Vista dinamica general


![image](https://github.com/user-attachments/assets/8cd84675-31be-4025-bdf8-124c965d7201)



[Microservicio de Reportes](./reportes/README.md)

[Microservicio de Estudiantes](./estudiantes/README.md)


## Patrones de microservicios utilizados

- API Gateway (Identificado como gateway en el diagrama)
- Database per Service - Los microservicios que tienen conexión a base de datos tienen un repositorio de datos dedicado según la información que procesan
- Aggregator - El microservicio de reportes unifica los datos obtenidos de los diferentes microservicios para formular y unificar una respuesta
