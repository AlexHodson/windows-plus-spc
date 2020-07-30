import React from 'react'
import { FaSignOutAlt } from 'react-icons/fa'
import useMenu from '../../hooks/menu/useMenu'

import '../../style/menu.css'

import MenuLinks from './MenuLink'

/**
 * @author Alex Hodson : it-alex@windows-plus.co.uk
 * @description the {@link Menu} method provides the functionality and main user interface for the user's main
 * navigation menu. The method utilises the {@link MenuLinks} method to build the individual section links
 * @param setUserDetails a state setter which updates the logged in user details
 * @param privileges the privileges associated with the logged in user
 * @param loadArea the parent method which loads the selected area into the parent component
 * @return {JSX.Element} the user interface which is ported into another component interface
 * @constructor
 */
export default function Menu({ setUserDetails, privileges, loadArea }) {
	/**
	 * @description the hook members exported by the {@link useMenu} hook
	 */
	const { open, handleLogOut, handleMenuToggle, handleLinkClick } = useMenu(false, setUserDetails, loadArea)

	/**
	 * @description the class name which is added to the user interface elements
	 * @type {string}
	 */
	const menuStatus = open ? 'isopen' : ''

	return (
		<div>
			<div className={`menubar ${menuStatus}`}>
				<div className={`menuWrap ${menuStatus}`}>
					<div className="mainMenuArea">
						<MenuLinks
							privileges={privileges}
							menuStatus={menuStatus}
							handleLinkClick={handleLinkClick}
						/>
						<div className="hambclicker" onClick={handleMenuToggle} />
						<div id="hambmenu" className={menuStatus}>
							<span />
							<span />
							<span />
							<span />
						</div>
					</div>
					<div className="actionMenuArea">
						<ul>
							<li
								className={`cursor ${open ? 'text-left p-3' : 'text-center'}`}
								onClick={handleLogOut}
							>
								<p className={`d-flex align-items-center 
									${open ? 'justify-content-around' : 'justify-content-center'}`}
								>
									{open && <>Log Out</>}
									<FaSignOutAlt />
								</p>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	)
}
