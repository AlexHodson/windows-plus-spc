import React from 'react'

/**
 * @author Alex Hodson : it-alex@windows-plus.co.uk
 * @description the {@link MenuLinks} method provides the functionality and user interface for the navigation links
 * which allow the user to navigate to different sections of the system
 * @param privileges the privileges associated with the logged in user
 * @param menuStatus whether the menu is currently open
 * @param handleLinkClick a parent method which will run when a navigation link is clicked
 * @return {JSX.Element} the user interface which is ported int another component interface
 * @constructor
 */
export default function MenuLinks({ privileges, menuStatus, handleLinkClick }) {
	/**
	 * @description an array which contains the user interface nodes for the navigation links
	 */
	const links = privileges.map(link => (
		<li key={link.columnName} className="cursor" onClick={() => handleLinkClick(link.columnName)}>
			<p>{link.columnName.replace('_', '').replace(/(?<lower>[a-z])(?<upper>[A-Z])/g, '$1 $2')}</p>
		</li>
	))

	return (
		<div className={menuStatus} id="menu">
			<ul>
				{links}
			</ul>
		</div>
	)
}
