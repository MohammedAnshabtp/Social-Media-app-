import { Bookmarks, Group, HelpOutline, PlayCircleFilledWhiteOutlined, RssFeed, School, WorkOutline, Event } from "@material-ui/icons";
import "./sidebar.css"
import { Users } from "../../dummyData";
import Closefriend from "../Closefriend/Closefriend";

function sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <ul className="sidebarlist">
                    <li className="sidebarlistitem">
                    <RssFeed className="sidebarIcon"/>
                    <span className="sidebarlistitemText">Feed</span>
                    </li>
                    <li className="sidebarlistitem">
                    <School className="sidebarIcon"/>
                    <span className="sidebarlistitemText">Education</span>
                    </li>
                    <li className="sidebarlistitem">
                    <PlayCircleFilledWhiteOutlined className="sidebarIcon"/>
                    <span className="sidebarlistitemText">Video</span>
                    </li>
                    <li className="sidebarlistitem">
                    <Group className="sidebarIcon"/>
                    <span className="sidebarlistitemText">Group</span>
                    </li>
                    <li className="sidebarlistitem">
                    <Bookmarks className="sidebarIcon"/>
                    <span className="sidebarlistitemText">Bookmark</span>
                    </li>
                    <li className="sidebarlistitem">
                    <HelpOutline className="sidebarIcon"/>
                    <span className="sidebarlistitemText">Questions</span>
                    </li>
                    <li className="sidebarlistitem">
                    <WorkOutline className="sidebarIcon"/>
                    <span className="sidebarlistitemText">Jobs</span>
                    </li>
                    <li className="sidebarlistitem">
                    <Event className="sidebarIcon"/>
                    <span className="sidebarlistitemText">Event</span>
                    </li>
                </ul>
                <button className="sidebarButton">Show More</button>
                <hr className="sidebarHr"/>
                <ul className="sidebarfriendlist">
                    {Users.map((u) =>( <Closefriend key={u.id} user={u}/>))}                  
                </ul>
            </div>   
        </div>
    )
}

export default sidebar
