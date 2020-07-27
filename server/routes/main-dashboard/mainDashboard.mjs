import express from 'express'
import sql from "mssql";
import { generateCall } from '../../util/ConnectionProperty.mjs'

const router = express.Router();

/**
 * @description using the given data and the {@code generateCall} method, retrieves the user's account privileges
 * which are linked to the given username
 * @param name the user name of the logged in staff member
 * @return {Promise<void>} a promise containing the account privileges
 */
const getAccountPrivileges = name => {
    const parameters = [
        {
            'name': 'accountType',
            'type': sql.VarChar(50),
            'value': name
        }
    ]

    return generateCall('Users_getPermissions', parameters)
}

/**
 * @description handles a GET request made from the client when the user's account privileges need to be retrieved
 */
router.get('/privileges/:name', async (req, res, next) => {
    const name = req.params.name;
    const results = await getAccountPrivileges(name)
    res.send(results.recordset)
})

export default router;
