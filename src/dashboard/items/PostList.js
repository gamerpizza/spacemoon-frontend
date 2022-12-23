import "./PostList.css"
import * as PropTypes from "prop-types";
import {Post} from "./Post";

export function PostList({items = {}, filterString = "", userToken= "", userName=""}) {
    const hide = items === {} || items === null || items === undefined
    return <ul className="Items PostList">
        {!hide?Object.entries(items)
            .filter(filterByString)
            .sort(CompareByDateDescending)
            .map(([k, item]) => {
                return <Post item={item} key={item.id} userToken={userToken} userName={userName}/>
            }):<></>
        }
    </ul>;

    function filterByString([k, item]) {
        return item.author.toLowerCase().includes(filterString.toLowerCase())
            || item.caption.toLowerCase().includes(filterString.toLowerCase())
    }

    function CompareByDateDescending([k1, item1], [k2, item2]) {
        let createdA = Date.parse(item1.created);
        let createdB = Date.parse(item2.created);
        if (createdA > createdB) return -1
        if (createdA < createdB) return 1
        return 0
    }

}

PostList.propTypes = {
    items: PropTypes.shape({}),
    filterString: PropTypes.string,
};






