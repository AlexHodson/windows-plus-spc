import React, {Component} from "react";

/**
 * @author Alex Hodson : it-alex@windows-plus.co.uk
 * @description the {@link MenuLinks} class provides the functionality for the individual menu links.
 * @see Component
 */
export class MenuLinks extends Component {
    /**
     * @description class constructor specifying the optional properties, passed through by a parent component
     * @param props the option parameters
     */
    constructor(props) {
        super(props);
        // Any number of links can be added here
        this.state = {
            links: this.props.privileges
        }
    }

    render() {
        let links = this.state.links.map((link, i) => {
                return (
                    <li key={link['columnName']} className="cursor">
                        <a>{link['columnName'].replace('_', '').replace(/([a-z])([A-Z])/g, '$1 $2')}</a>
                    </li>)
            }
        );

        return (
            <div className={this.props.menuStatus} id='menu'>
                <ul>
                    {links}
                </ul>
            </div>
        )
    }
}
