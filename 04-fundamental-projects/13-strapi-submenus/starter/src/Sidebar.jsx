import { FaTimes } from "react-icons/fa"
import sublinks from './data'
import { useGlobalContext } from "./Context.jsx"

const Sidebar = () => {
    const [isSidebarOpen, closeSidebar] = useGlobalContext()
    return (
        <aside className="sidebar">
            <div className="sidebar-container">
                <button className="close-btn">
                    <FaTimes />
                </button>
                <div className="sidebar-links">
                    {sublinks.map((item) => {
                        const { id } = item;
                        console.log(item);
                        <p key={id}>page</p>
                    })}
                </div>
            </div>
        </aside>
    )
}

export default Sidebar