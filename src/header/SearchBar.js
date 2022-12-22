import * as PropTypes from "prop-types";

export function SearchBar({onChange}) {
    return <span className="Search">
        <input type="text" className="SearchBar" placeholder="Search Products"
                                           onChange={onChange}/>
    </span>;
}

SearchBar.propTypes = {onChange: PropTypes.any};

