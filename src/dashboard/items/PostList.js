import "./PostList.css"
import * as PropTypes from "prop-types";
import {Post} from "./Post";

export function PostList({items = [["",{author: "", caption: "", id: "", likes: []}]],
                             user = {token:"", name:""}, onDelete}) {
    const hide = items === {} || items === null || items === undefined
    return <ul className="Items PostList">
        {!hide?items.map(([k, item]) => {
                return <Post item={item} key={item.id} userToken={user.token} userName={user.name} onDelete={onDelete}/>
            }):<></>
        }
    </ul>;
}



PostList.propTypes = {
    items: PropTypes.array,
};






