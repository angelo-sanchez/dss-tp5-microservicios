# Microservicio de Reportes

Este microservicio está orientado a emitir los reportes de carreras

Para poder hacerlo, debe tener conexión a los demás microservicios del sistema

- Microservicio de estudiantes
- Microservicio de carreras
- Microservicio de matriculas

Este microservicio consultará información de los demás microservicios para luego generar el reporte solicitado con la información obtenida

## Rutas

1.  Reporta las carreras con al menos un inscripto, ordenadas por orden alfabético.

    **Path** `/careers`

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

    **Path** `/careers/full`

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
