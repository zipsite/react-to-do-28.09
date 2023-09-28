import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router"

export default function User() {
    const [users, setUsers] = useState([])

    const params = useParams()

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then((res) => {
                setUsers(res.data);
            })
            .catch((e) => {
                console.log('Ошибка', e.message);
            })
    }, []);


    return (
        <div>
            <h1>Пользователь с id {params.id}</h1>
            <div className="userlist">
                {
                    users.map((el, id) => {
                        if (el.id == params.id) {
                            console.log(el)
                            return (
                                <div className="item">
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
                        }
                    })
                }
            </div>
        </div>
    )
}