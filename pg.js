const { Pool } = require("pg")

const pool = new Pool({
	host: "localhost",
	user: "postgres",
	password: "math",
	database: "sample_app",
	port: 5432,
})

const fetchAll = async (SQL, ...params) => {

	const client = await pool.connect()

	try {

		const { rows } = await client.query(SQL, params)

		return rows
	}
	catch(err) {
		console.error(err)
	}
	finally {
		client.release()
	}
}

module.exports.fetchAll = fetchAll
