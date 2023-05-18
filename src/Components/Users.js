import axios from "axios";
import { useState, useEffect} from "react";
import User from "./User.js";

const API = process.env.REACT_APP_API_URL;

export default function Users(){
    const [users, setUsers] = useState([]);
    useEffect(() => {
        axios.get(`${API}/fitness`).then((res) => {
            setUsers(res.data)
        }).catch((e) => {
            console.warn("catch", e)
        })
        }, []);
    return (
        <div>
            <section>
                <div className="m-4 grid grid-cols-3 gap-4">
                    {users.map((user) => {
                        return <User key={user.id} user={user} />
                    })}
                </div>
            </section>
        </div>
    )
}