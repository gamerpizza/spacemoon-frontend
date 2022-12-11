function SideMenu() {
    return <aside className="Aside">
        <p>Side Menu</p>
    </aside>;
}

function Items() {
    return <main className="Main">
        <ul className="Items">
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
            <li>Item 4</li>
            <li>Item 5</li>
        </ul>
    </main>;
}

function Dashboard() {
    return <div className="Dashboard">
        <SideMenu/>
        <Items/>
    </div>;
}

export default Dashboard;