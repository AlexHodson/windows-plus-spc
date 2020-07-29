import { useState } from 'react'

/**
 * @author Alex Hodson : it-alex@windows-plus.co.uk
 * @description the {@link useMenu} hook provides the functionality for handling the functionality for the main menus
 * navigation
 * @param initialState the initial state of the menu
 * @param setUserDetails the setter method for the logged in user details
 * @return {{setOpen: Dispatch<React.SetStateAction<unknown>>, handleMenuToggle: handleMenuToggle, open: unknown,
 * handleLogOut: handleLogOut}}
 */
const useMenu = (initialState, setUserDetails) => {
	/**
	 * @description the menu state member which represents whether the menu is open and the setter method
	 */
	const [open, setOpen] = useState(initialState)

	/**
	 * @author Alex Hodson : it-alex@windows-plus.co.uk
	 * @description handles the action for when the user intends to log out of the system. The method calls the
	 * setter method for the user details and clears the contents
	 */
	const handleLogOut = () => {
		setUserDetails([], false)
	}

	/**
	 * @description toggles the open state of the main navigation. When the state is `true`, the main navigation bar
	 * is fully extended.
	 * @param event the click event
	 */
	const handleMenuToggle = event => {
		event.stopPropagation()
		setOpen(! open)
	}

	return {
		open, setOpen, handleLogOut, handleMenuToggle
	}
}

export default useMenu
