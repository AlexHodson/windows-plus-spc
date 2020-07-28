import React, {Component} from "react";
import './loader.css'

export default class Loader extends Component {
    render() {
        return (
            <div className="d-flex flex-row w-100 h-100 justify-content-center align-items-center">
                <div id="loaderContainer">
                    <div id="sc1"></div>
                    <div id="sc2"></div>
                    <div id="sc3"></div>
                    <div id="sc4"></div>
                    <div id="sc5"></div>
                </div>
            </div>
        );
    }
}
