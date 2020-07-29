import { useState } from 'react'

/**
 * @author Alex Hodson : it-alex@windows-plus.co.uk
 * @description the {@link useLoader} hook provides the functionality for controlling the loaders display functionality
 * @param initialState the initial state of the loader
 * @return {{setShowLoader: Dispatch<React.SetStateAction<unknown>>, showLoader: unknown}}
 */
const useLoader = initialState => {
	/**
	 * @description the state member which indicates whether the loaded should be displayed and the setter method
	 */
	const [showLoader, setShowLoader] = useState(initialState)

	return {
		showLoader, setShowLoader
	}
}
export default useLoader
