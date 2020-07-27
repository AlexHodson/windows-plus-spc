'use strict';

import sql from "mssql";

/**
 * @description an {@link Object} containing the connection details for the database
 * @type {{server: string, password: string, database: string, port: number, user: string}}
 */
const config = {
    user: 'Kestrel',
    password: 'BirdieLover7*',
    server: 'DBaseServer1',
    port: 49272,
    database: 'Vulture'
}

/**
 * @description makes a connection to the database and executes a stored procedure using the given name and
 * dynamically binds the parameters given
 * @param name the stored procedure name
 * @param parameters the parameters to be bound
 * @return {Promise<any>} a promise containing the stored procedure results
 */
const connect = async (name, parameters) => {
    const connection = await sql.connect(config);

    const request = await connection.request()
    parameters.forEach(param => {
        request.input(param.name, param.type, param.value)
    })

    return await request.execute(name)
}

/**
 * @description makes to stored procedure call using the given procedure name and parameters
 * @param name the stored procedure name
 * @param parameters the stored procedure parameters
 * @return {Promise<*>} a promise containing the stored procedure results
 */
export const generateCall = async (name, parameters) => {
    return await connect(name, parameters)
}
