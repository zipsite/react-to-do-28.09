import { Link } from "react-router-dom"
export default function Menu() {
    return (
        <div className="menu">
            <ul>
                <Link className="link" to="/">Home</Link>
                <Link className="link" to="/users">Пользователи</Link>
                <Link className="link" to="/groups">Группы</Link>
            </ul>
        </div>
    )
}