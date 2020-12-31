import "./index.css";

import {useSelector} from 'react-redux';

const Home = () => {
    const loggedInUser = useSelector(state => {
        return state.session.user;
    } )

    return(
        <div>
            <div id="home-page-container">

            </div>
            {loggedInUser && <h3>Welcome {loggedInUser.username}!</h3>}
        </div>
    )
}

export default Home