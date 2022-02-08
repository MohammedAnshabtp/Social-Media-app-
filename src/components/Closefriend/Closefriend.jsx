import "./closefriend.css";
import {Users} from "../../dummyData";

function closefriend({user}) {
    return (
    <li className="sidebarfriend">
        <img src="/assets/person/2.jpeg" alt="" className="sidebarfriendImg" />
        <span className="sidebarfriendName">{user.username}</span>
    </li>  
    );
}

export default closefriend
