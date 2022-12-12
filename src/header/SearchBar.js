import {Component} from "react";

export class SearchBar extends Component {
    render() {
        return <span className="Search"><input type="text" className="SearchBar" placeholder="Search Products"/></span>;
    }
}