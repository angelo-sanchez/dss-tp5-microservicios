

const pool = require("../config/db/database");


// filters es un map de columna:valor (nombreCol:valorFiltro) por el cual filtrara. Si hay mas de uno, lo hara como AND.

// sort_by es la columna por la cual ordenar.

// order es la orientacion del orden (ASC | DESC)


const getStudentsFilteredAndOrderer = async (filters, sort_by, order) => {

    var conditions = [];
    var values = [];

    Object.keys(filters).forEach((key) => {
        if (filters[key]) {
          conditions.push(`${key} = $${values.length + 1}`);
          values.push(filters[key]);
        }
      });

    const whereClause = conditions.length ? `WHERE ${conditions.join(" AND ")}` : "";
    const orderClause = `ORDER BY ${sort_by} ${order.toUpperCase() === "DESC" ? "DESC" : "ASC"}`;

    const query = `
        SELECT * FROM "TP2".students
        ${whereClause}
        ${orderClause}
    `;
    const result = await pool.query(query, values);

    return result.rows;

}


/// Values es un array con first_name, last_name, age, gender, document_number, city_of_residence, university_book_number EN ORDEN.

const persistStudent = async (values) => {
        const query = `
            INSERT INTO "TP2".students (
                first_name, last_name, age, gender, document_number, city_of_residence, university_book_number
            ) VALUES ($1, $2, $3, $4, $5, $6, $7)
            RETURNING *;
        `;

        const result = await pool.query(query, values);

        return result.rows[0];

    }

module.exports = {
    getStudentsFilteredAndOrderer,
    persistStudent
};