import React, { createContext, useState } from 'react'

/**
 * @description an empty context member
 * @type {React.Context<(function(...[*]=))[]>}
 */
export const Context = createContext([() => {}])

/**
 * @author Alex Hodson : it-alex@windows-plus.co.uk
 * @description the provider method which provides the context members that can be used by other components
 * @param props the properties which are based on creation
 * @return {JSX.Element} the context provider which allows other components to access it's members
 * @constructor
 */
export const Provider = props => {
	// Initial values are obtained from the props
	const { value, children } = props

	// Use State to keep the values
	const [userDetails, setUserDetails] = useState(value)

	// Make the context object:
	const usersContext = { userDetails, setUserDetails }

	// Pass the value in provider and return
	return <Context.Provider value={usersContext}>{children}</Context.Provider>
}
