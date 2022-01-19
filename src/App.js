import Users from "./components/Users/Users";
import UserDetails from "./Components/UserDetails/UserDetails";
import Posts from "src/components/Posts/Posts";
import css from './App.module.css';
import {useState} from "react";

const App = () => {
    const [user, setUser] = useState(null);
    const [userId, setUserId] = useState(null);

    const getUser = (user) => {
        setUser(user)
        setUserId(null)
    }

    const getUserId = (id) => {
        setUserId(id)
    }

    return (
        <div>
            <div className={css.wrap}>
                <Users getUser={getUser}/>
                {user && <UserDetails user={user} getUserId={getUserId}/>}
            </div>
            {userId && <Posts userId={userId}/>}
        </div>
    );
};

export default App;