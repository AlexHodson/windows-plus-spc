import { useState } from 'react'

/**
 * @author Alex Hodson : it-alex@windows-plus.co.uk
 * @description the {@link useHandleForm} hook provides the functionality for handling different form events
 * @param initialState the initial state value
 * @param afterSubmit a callback method for when the form is submitted
 * @return {{handleSubmit: handleSubmit, handleChange: handleChange, state: unknown}}
 */
const useHandleForm = (initialState, afterSubmit) => {
	/**
	 * @description the form entry state member and a setter method
	 */
	const [state, setState] = useState(initialState)

	/**
	 * @author Alex Hodson : it-alex@windows-plus.co.uk
	 * @description sets the value of the form field state when the user enters information into the entry node
	 * @param event the element calling the method
	 */
	const handleChange = event => {
		setState(event.target.value)
	}

	/**
	 * @author Alex Hodson : it-alex@windows-plus.co.uk
	 * @description prevents the page from reloading when a form is submitted and the defined callback is called
	 * @param event the element calling the method
	 */
	const handleSubmit = event => {
		event.preventDefault()

		afterSubmit(state)
	}

	return {
		state, handleChange, handleSubmit
	}
}

export default useHandleForm
