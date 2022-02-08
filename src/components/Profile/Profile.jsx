import "./profile.css";
import Topbar from "../Topbar/Topbar";
import Sidebar from "../Sidebar/Sidebar";
import Rightbar from "../Rightbar/Rightbar";
import Feed from "../Feed/feed";

function Profile() {
    return (
        <>
        <Topbar/>
        <div className="profile">
        <Sidebar/> 
            <div className="profileRightTop">
                <div className="profileCover"> 
                    <img className="profileCoverImg" src="assets/post/3.jpeg" alt="" />
                    <img src="assets/person/3.jpeg" alt="" className="profileUserImg" />
                </div>
                <div className="profileInfo">
                    <h4 className="profileInfoName">Anshab</h4>
                    <span className="profileInfoDesc">Hello my friends!</span>
                </div>
            </div>
            <div className="profileRightBottom">
                <Feed/>
                <Rightbar profile/>
            </div>
        </div>
        </>
    );
}

export default Profile
