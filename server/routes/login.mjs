import express from 'express'
import sql from "mssql";
import { generateCall } from '../util/ConnectionProperty.mjs'

const router = express.Router();

/**
 * @description using the given data and the {@code generateCall} method, retrieves the staff member details which
 * are linked to the given password
 * @param password the password entered by the user
 * @return {Promise<*>} a promise which contains any staff member details in the database
 */
const getAccountType = (password) => {
    const parameters = [
        {
            'name': 'codeEntered',
            'type': sql.VarChar(50),
            'value': password
        }
    ]

    return generateCall('login_getAccountType', parameters)
}

/**
 * @description handles a post request made from the client when the user attempts to log in
 */
router.post('/', async (req, res, next) => {
    const password = req.body.password
    const results = await getAccountType(password)
    res.send(results.recordset)
})

export default router;
