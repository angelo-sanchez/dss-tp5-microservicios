# Microservicio de Reportes

Este microservicio está orientado a emitir los reportes de carreras

Para poder hacerlo, debe tener conexión a los demás microservicios del sistema

- Microservicio de estudiantes
- Microservicio de carreras
- Microservicio de matriculas

Este microservicio consultará información de los demás microservicios para luego generar el reporte solicitado con la información obtenida

## Tecnologías

Este microservicio está desarrollado con express y nodejs, no tiene base de datos asociada, los datos se obtienen por REST API desde los microservicios citados

## Arquitectura interna

Presenta una arquitectura de 3 Capas

- Routes: Es la capa de cara al cliente, se encarga de recibir y responder las solicitudes.
- Controllers: Es la capa intermedia, que se encarga de procesar los datos solicitados a la capa inferior.
- Repositories: Es la capa inferior, esta capa se encarga de buscar los datos en los microservicios externos (o mocks) y devolverlos a la capa intermedia.

## Rutas

1.  Reporta las carreras con al menos un inscripto, ordenadas por orden alfabético.

    **Path** `/reports/careers`

    **Params** `N/A`

    **Response**

    ```json
    [
      {
        "career": string,
        "enrolledCount": number,
      },
    ];
    ```

1.  Reporte completo de carreras, con información de cantidad de inscriptos y egresados por año.

    **Path** `/reports/careers-full`

    **Params** `N/A`

    **Response**

    ```json
    [
      {
        "career": string,
        "report": [
          {
            "year": number,
            "enrolledCount": number,
            "graduatedCount": number,
          },
        ],
      },
    ];
    ```
