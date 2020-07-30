import express from 'express'
import sql from 'mssql'
import { generateCall } from '../../../../util/ConnectionProperty.mjs'

const router = express.Router()

/**
 * @description using the given data and the {@code generateCall} method, retrieves the new fit jobs for the given
 * staff member and type
 * @param type the job type to be retrieved
 * @param staffID th staff member's identifier
 * @return {Promise<*>} a promise which contains the new supply fit jobs
 */
const retrieveNewFitJobs = (type, staffID) => {
	const typeLength = 15

	const parameters = [{
		'name': 'staffID',
		'type': sql.Int,
		'value': staffID
	},
	{
		'name': 'type',
		'type': sql.VarChar(typeLength),
		'value': type
	}]

	return generateCall('SPF_retrieveNewAppointments', parameters)
}

/**
 * @description handles a GET request made from the client when the user's new supply fit jobs need to be retrieved
 */
router.get('/:type/:staffID', async (req, res) => {
	const { type, staffID } = req.params
	const results = await retrieveNewFitJobs(type, staffID)
	res.send(results.recordset)
})

export default router
