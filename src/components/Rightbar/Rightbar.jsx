import "./rightbar.css";
import {Users} from"../../dummyData";
import Online from "../Online/Online";
import Closefriend from "../Closefriend/Closefriend";


export default function rightbar({profile}) {
    const HomeRightbar = () => {
        return (
            <>
             <div className="birthdayContainer">
                    <img src="/assets/gift.png" alt="" className="birthdayImg" />
                    <span className="birthdayText"><b>Moosa</b> and <b>3 other friends</b> have a birthday today
                    </span>
                </div>
                <img src="assets/ad.png" alt="" className="rightbarAd" />
                 <h4 className="rightbarTitle">Online Friends</h4>
                 <ul className="sidebarfriendlist">
                    {Users.map((u) =>( <Online key={u.id} user={u}/>))}                  
                </ul>     
            </>
        );
    };
    const ProfileRightbar = () =>{
        return (
        <>
        <h4 className="rightbarTitle">User information</h4>
        <div className="rightbarInfo">
            <div className="rightbarInfoItem">
                <span className="rightbarInfoKey">City:</span>
                <span className="rightbarInfoValue">Dubai</span>
            </div>
            <div className="rightbarInfoItem">
                <span className="rightbarInfoKey">City:</span>
                <span className="rightbarInfoValue">Dubai</span>
            </div>
            <div className="rightbarInfoItem">
                <span className="rightbarInfoKey">From:</span>
                <span className="rightbarInfoValue">Madrid</span>
            </div>
            <div className="rightbarInfoItem">
                <span className="rightbarInfoKey">Relationship:</span>
                <span className="rightbarInfoValue">Single</span>
            </div>
        </div>
        <h4 className="rightbarTitle">User Friends</h4>
        <div className="rightbarFollowings">
            <div className="rightbarFollowing">
                <img src="assets/person/1.jpeg" alt="" className="rightbarFollowingImg" />
                <span className="rightbarFollowingName">Anshab</span>
            </div>
            <div className="rightbarFollowing">
                <img src="assets/person/2.jpeg" alt="" className="rightbarFollowingImg" />
                <span className="rightbarFollowingName">Anshab</span>
            </div>
            <div className="rightbarFollowing">
                <img src="assets/person/3.jpeg" alt="" className="rightbarFollowingImg" />
                <span className="rightbarFollowingName">Anshab</span>
            </div>
        </div>
        </>
            )
    }
    return (
        <div className="rightbar">
            <div className ="rightWrapper"> 
                { profile ? <ProfileRightbar/> : <HomeRightbar/>}             
            </div>                 
        </div>
    );
}

