import {PostList} from "./PostList";

export function Items({filterString = "", user = {name: "", token: ""}, items = {}, onDelete = () =>{}}) {
    let sortedFilteredItems = Object.entries(items).filter(filterByString).sort(CompareByDateDescending)

    return <main className="Main">
        <PostList items={sortedFilteredItems} user={user} onDelete={onDelete}/>
    </main>;

    function filterByString([k, item]) {
        return item.author.toLowerCase().includes(filterString.toLowerCase())
            || item.caption.toLowerCase().includes(filterString.toLowerCase())
    }
    function CompareByDateDescending([k1, item1 = {created:""}], [k2, item2= {created:""}]) {
        let createdA = Date.parse(item1.created);
        let createdB = Date.parse(item2.created);
        if (createdA > createdB) return -1
        if (createdA < createdB) return 1
        return 0
    }
}



