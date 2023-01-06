import {LoginModal} from "./login/LoginModal";
import Header from "./Header";
import * as PropTypes from "prop-types";
import {HeaderContext} from "./HeaderContext";

export function HeaderAndModals({onSearch = ({target}) => {}, children}) {

    return <>
        <HeaderContext>
            <LoginModal/>
            <Header onSearch={onSearch}>
                {children}
            </Header>
        </HeaderContext>

    </>;
}

HeaderAndModals.propTypes = {
    onSearch: PropTypes.func
};