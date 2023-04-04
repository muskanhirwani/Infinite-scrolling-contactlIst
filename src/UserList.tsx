import { useState } from 'react';
import { users } from './users';
import { LoginForm } from './LoginForm';
import InfiniteScroll from 'react-infinite-scroll-component';


const UserList = () => {
    const [userList, setUserList] = useState(users.slice(0, 20));
    const [hasMore, setHasMore] = useState(true);

    //   const [error, setError] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    //   const istory = history();
    const handleLogin = (username: string, password: string) => {
        // Replace with actual authentication logic
        if (username === 'foo' && password === 'bar') {
            setIsLoggedIn(true);
        } else {
            alert('Invalid username or password');
        }
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
    };

    const loadMore = () => {
        setTimeout(() => {
            const nextUsers = users.slice(userList.length, userList.length + 20);
            setUserList([...userList, ...nextUsers]);
            if (userList.length >= users.length) {
                setHasMore(false);
            }
        }, 1000);
    };

    return (

        <InfiniteScroll
            dataLength={userList.length}
            next={loadMore}
            hasMore={hasMore}
            loader={<h4>Loading...</h4>}
            endMessage={<h4>No more users</h4>}
        >
            {!isLoggedIn && <LoginForm onLogin={handleLogin} />}
            {isLoggedIn && (
                <div style={{ display: 'grid' }}>
                    {userList.map((user) => (
                        <div key={user.id} style={{ border: '1px solid black', padding: '1rem' }}>
                            <img src={user.photo} alt={user.name} style={{ maxWidth: '100%' }} />
                            <p>{user.name}</p>
                        </div>
                    ))}
                    <div><button onClick={handleLogout}>Logout</button></div>

                </div>

            )}
        </InfiniteScroll>
    )
}


export default UserList;
function setIsLoggedIn(arg0: boolean) {
    throw new Error('Function not implemented.');
}

