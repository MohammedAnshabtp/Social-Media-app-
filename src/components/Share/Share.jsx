import "./share.css";
import { EmojiEmotions, Label, PermMedia, Room } from "@material-ui/icons";

function Share() {
    return (
        <div className="share">
            <div className="shareWrapper">
                <div className="shareTop">
                    <img src="/assets/person/1.jpeg" alt="" className="shareProfileImg" />
                    <input placeholder="Whats in Your Mind Anshab?" className="shareInput" />
                </div>
                <hr className="shareHr" />
                <div className="shareBottom">
                    <div className="shareOption">
                        <div className="shareOptions">
                            <PermMedia htmlColor="tomato" className="shareIcon"/>
                            <span className="shareOptionText">Photo or Video</span>
                        </div>
                        <div className="shareOptions">
                            <Label htmlColor="blue" className="shareIcon"/>
                            <span className="shareOptionText">Tag</span>
                        </div>
                        <div className="shareOptions">
                            <Room htmlColor="green" className="shareIcon"/>
                            <span className="shareOptionText">Location</span>
                        </div>
                        <div className="shareOptions">
                            <EmojiEmotions htmlColor="goldenrod" className="shareIcon"/>
                            <span className="shareOptionText">Feeling</span>
                        </div>
                    </div>   
                <button className="shareButton">Share</button>    
                </div>
            </div>
        </div>
    )
}

export default Share
