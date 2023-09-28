import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { Outlet } from "react-router";

export default function Users() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(data => {
                setUsers(data.data)
            })
            .catch(e => {
                console.log('Ошибка', e.message);
            })
    }, [])

    return (
        <div>
            <h1>Пользователи</h1>
            <div className="userlist">
                {
                    users.length > 0
                        ? users.map((el, id) => {
                            return (
                                <div className="item" key={id}>
                                    <div className="parameter">
                                        <p>Имя:</p>
                                        <p>{el.name}</p>
                                    </div>
                                    <div className="parameter">
                                        <p>Zip код:</p>
                                        <p>{el.address.zipcode}</p>
                                    </div>
                                    <div className="parameter">
                                        <p>Почта</p>
                                        <p>{el.email}</p>
                                    </div>
                                    <div className="parameter">
                                        <p>Телефон:</p>
                                        <p>{el.phone}</p>
                                    </div>
                                </div>
                            )

                        })
                        : "Пользователей нет"
                }
            </div>
        </div>
    )
}