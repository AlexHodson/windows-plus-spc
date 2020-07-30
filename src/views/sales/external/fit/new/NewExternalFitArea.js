import React from 'react'
import Table from '../../../../../components/table/Table'

/**
 * @author Alex Hodson : it-alex@windows-plus.co.uk
 * @description the {@link NewExternalFitArea} method provides the functionality and user interface for the new
 * supply and fit area. The area provides the user a table which contains all new appointment
 * @return {JSX.Element}
 * @constructor
 */
const NewExternalFitArea = () => {
	const tableHeaders = ['Sales Number', 'Customer', 'Address', 'Appt. Details', 'Products', 'Open']
	const tableRows = [{
		'Sales Number': '1234',
		'Customer': 'Joe Wilson',
		'Address': '123 Fake Close, Coventry, CV1 2AA',
		'Appt. Details': '2020-07-30 14:00:00',
		'Products': '(1) uPVC Windows'
	},
	{
		'Sales Number': '1235',
		'Customer': 'Perry Vanderbooth',
		'Address': '15 Cherry Walk Lane, Green Bay Road, Nuneaton, CV12 3GX',
		'Appt. Details': '2020-07-30 14:00:00',
		'Products': '(7) uPVC Windows, (1) Composite Single Door'
	},
	{
		'Sales Number': '1236',
		'Customer': 'Perry Vanderbooth',
		'Address': '15 Cherry Walk Lane, Green Bay Road, Nuneaton, CV12 3GX',
		'Appt. Details': '2020-07-30 14:00:00',
		'Products': '(7) uPVC Windows, (1) Composite Single Door'
	},
	{
		'Sales Number': '1237',
		'Customer': 'Perry Vanderbooth',
		'Address': '15 Cherry Walk Lane, Green Bay Road, Nuneaton, CV12 3GX',
		'Appt. Details': '2020-07-30 14:00:00',
		'Products': '(7) uPVC Windows, (1) Composite Single Door'
	},
	{
		'Sales Number': '1238',
		'Customer': 'Perry Vanderbooth',
		'Address': '15 Cherry Walk Lane, Green Bay Road, Nuneaton, CV12 3GX',
		'Appt. Details': '2020-07-30 14:00:00',
		'Products': '(7) uPVC Windows, (1) Composite Single Door'
	},
	{
		'Sales Number': '1239',
		'Customer': 'Perry Vanderbooth',
		'Address': '15 Cherry Walk Lane, Green Bay Road, Nuneaton, CV12 3GX',
		'Appt. Details': '2020-07-30 14:00:00',
		'Products': '(7) uPVC Windows, (1) Composite Single Door'
	},
	{
		'Sales Number': '1240',
		'Customer': 'Perry Vanderbooth',
		'Address': '15 Cherry Walk Lane, Green Bay Road, Nuneaton, CV12 3GX',
		'Appt. Details': '2020-07-30 14:00:00',
		'Products': '(7) uPVC Windows, (1) Composite Single Door'
	},
	{
		'Sales Number': '1241',
		'Customer': 'Perry Vanderbooth',
		'Address': '15 Cherry Walk Lane, Green Bay Road, Nuneaton, CV12 3GX',
		'Appt. Details': '2020-07-30 14:00:00',
		'Products': '(7) uPVC Windows, (1) Composite Single Door'
	},
	{
		'Sales Number': '1242',
		'Customer': 'Perry Vanderbooth',
		'Address': '15 Cherry Walk Lane, Green Bay Road, Nuneaton, CV12 3GX',
		'Appt. Details': '2020-07-30 14:00:00',
		'Products': '(7) uPVC Windows, (1) Composite Single Door'
	},
	{
		'Sales Number': '1243',
		'Customer': 'Perry Vanderbooth',
		'Address': '15 Cherry Walk Lane, Green Bay Road, Nuneaton, CV12 3GX',
		'Appt. Details': '2020-07-30 14:00:00',
		'Products': '(7) uPVC Windows, (1) Composite Single Door'
	},
	{
		'Sales Number': '1244',
		'Customer': 'Perry Vanderbooth',
		'Address': '15 Cherry Walk Lane, Green Bay Road, Nuneaton, CV12 3GX',
		'Appt. Details': '2020-07-30 14:00:00',
		'Products': '(7) uPVC Windows, (1) Composite Single Door'
	},
	{
		'Sales Number': '1245',
		'Customer': 'Perry Vanderbooth',
		'Address': '15 Cherry Walk Lane, Green Bay Road, Nuneaton, CV12 3GX',
		'Appt. Details': '2020-07-30 14:00:00',
		'Products': '(7) uPVC Windows, (1) Composite Single Door'
	},
	{
		'Sales Number': '1246',
		'Customer': 'Perry Vanderbooth',
		'Address': '15 Cherry Walk Lane, Green Bay Road, Nuneaton, CV12 3GX',
		'Appt. Details': '2020-07-30 14:00:00',
		'Products': '(7) uPVC Windows, (1) Composite Single Door'
	},
	{
		'Sales Number': '1247',
		'Customer': 'Perry Vanderbooth',
		'Address': '15 Cherry Walk Lane, Green Bay Road, Nuneaton, CV12 3GX',
		'Appt. Details': '2020-07-30 14:00:00',
		'Products': '(7) uPVC Windows, (1) Composite Single Door'
	},
	{
		'Sales Number': '1248',
		'Customer': 'Perry Vanderbooth',
		'Address': '15 Cherry Walk Lane, Green Bay Road, Nuneaton, CV12 3GX',
		'Appt. Details': '2020-07-30 14:00:00',
		'Products': '(7) uPVC Windows, (1) Composite Single Door'
	},
	{
		'Sales Number': '1249',
		'Customer': 'Perry Vanderbooth',
		'Address': '15 Cherry Walk Lane, Green Bay Road, Nuneaton, CV12 3GX',
		'Appt. Details': '2020-07-30 14:00:00',
		'Products': '(7) uPVC Windows, (1) Composite Single Door'
	},
	{
		'Sales Number': '1250',
		'Customer': 'Perry Vanderbooth',
		'Address': '15 Cherry Walk Lane, Green Bay Road, Nuneaton, CV12 3GX',
		'Appt. Details': '2020-07-30 14:00:00',
		'Products': '(7) uPVC Windows, (1) Composite Single Door'
	}]

	return (
		<>
			<h3>New External Supply Fit</h3>
			<>
				<Table tableHeaders={tableHeaders} tableRows={tableRows} />
			</>
		</>
	)
}

export default NewExternalFitArea
