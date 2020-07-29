import React, {Component} from "react";
import {FaSignOutAlt} from 'react-icons/fa';

import {MenuLinks} from "./MenuLink";
import './menu.css'

/**
 * @author Alex Hodson : it-alex@windows-plus.co.uk
 * @description the {@link Menu} class provides the functionality for the main menu navigation. The class allows the
 * user to enlarge and shrink the main navigation bar
 * @see Comment
 * @see MenuLinks
 */
export class Menu extends Component {
    /**
     * @description class constructor specifying the optional properties passed through by parent components
     * @param props the optional parameters
     */
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        }

        this.props = props

        this.menuToggle = this.menuToggle.bind(this);
        this.handleDocumentClick = this.handleDocumentClick.bind(this);
        this.handleLogOutClick = this.handleLogOutClick.bind(this);
    }

    handleDocumentClick(e) {
    }

    /**
     * @description handles the click event for when the user clicks the 'log out' button. The method will call the
     * parent property {@link onLoginAction}
     * @param e the click event
     */
    handleLogOutClick(e) {
        this.props.setLogin([], false)
    }

    /**
     * @description toggles the open state of the main navigation. When the state is `true`, the main navigation bar
     * is fully extended.
     * @param e the click event
     */
    menuToggle(e) {
        e.stopPropagation();
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        let menuStatus = this.state.isOpen ? 'isopen' : '';

        return (
            <div ref="root">
                <div className={`menubar ${menuStatus}`}>
                    <div className={"mainMenuArea"}>
                        <MenuLinks privileges={this.props.privileges} menuStatus={menuStatus}/>
                        <div className="hambclicker" onClick={this.menuToggle}></div>
                        <div id="hambmenu" className={menuStatus}><span></span><span></span><span></span><span></span>
                        </div>
                    </div>
                    <div className={"actionMenuArea"}>
                        <ul>
                            <li className={`cursor ${this.state.isOpen ? 'text-left p-3' : 'text-center'}`}
                                onClick={this.handleLogOutClick}>
                                {this.state.isOpen ? <a className="pr-3">Log Out</a> :
                                    null} <FaSignOutAlt/>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
