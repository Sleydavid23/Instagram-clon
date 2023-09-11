import React from 'react';
import test_pp_icon from "./photos/pefil.jpg";

function AvatarArea() {
    return (
        <div>
            <div className="avatar-area-main-box">
                <img className="profile_photo_small" src={test_pp_icon} alt="logo"/>
                <div className="avatar-name">
                    <div id="linked-username">Sley David Murillo Peña</div>
                    <div style={{color: "#8e8e8e"}}>@Sley_david17</div>
                </div>
                <div className="profile-switch-and-follow-button">Seguir</div>
            </div>
            <div style={{margin: "12px 0 12px", display: "flex"}}>
                <div style={{color: "#8e8e8e"}}>Suggestions for you</div>
                <div style={{marginLeft: "120px"}}>See All</div>
            </div>
            <div className="avatar-area-suggestions">
                <img className="profile_photo_small" src={test_pp_icon} alt="logo"/>
                <div className="avatar-name">
                    <div id="linked-username">Ana zemoga</div>
                    <div style={{color: "#8e8e8e"}}>@Anaz</div>
                </div>
                <div className="profile-switch-and-follow-button">Follow</div>
            </div>
            <div className="avatar-area-suggestions">
                <img className="profile_photo_small" src={test_pp_icon} alt="logo"/>
                <div className="avatar-name">
                    <div id="linked-username">Juliana zemoga</div>
                    <div style={{color: "#8e8e8e"}}>@Juliana2</div>
                </div>
                <div className="profile-switch-and-follow-button">Follow</div>
            </div>
            <div className="avatar-area-suggestions">
                <img className="profile_photo_small" src={test_pp_icon} alt="logo"/>
                <div className="avatar-name">
                    <div id="linked-username">Mauricio Zemoga</div>
                    <div style={{color: "#8e8e8e"}}>@Mauricio</div>
                </div>
                <div className="profile-switch-and-follow-button">Follow</div>
            </div>
            <div className="avatar-area-suggestions">
                <img className="profile_photo_small" src={test_pp_icon} alt="logo"/>
                <div className="avatar-name">
                    <div id="linked-username">Camilo zemoga</div>
                    <div style={{color: "#8e8e8e"}}>@Camilo</div>
                </div>
                <div className="profile-switch-and-follow-button">Follow</div>
            </div>
            <div className="avatar-area-suggestions">
                <img className="profile_photo_small" src={test_pp_icon} alt="logo"/>
                <div className="avatar-name">
                    <div id="linked-username">Jhordan Rodnman</div>
                    <div style={{color: "#8e8e8e"}}>@Jhordanrodnman</div>
                </div>
                <div className="profile-switch-and-follow-button">Follow</div>
            </div>
            <div className="all-gray">
                <div className="basic-link-help" style={{marginTop: "30px"}}>
                    <div><a href="frontend/src#">About</a></div>
                    <div>Help</div>
                    <div>Press</div>
                    <div>API</div>
                    <div>Jobs</div>
                    <div>Privacy</div>
                    <div>Terms</div>
                    <div>Locations</div>
                    <div>Language</div>
                </div>
                <div style={{marginTop: "30px"}}>© 2023 INSTAGRAM FROM META</div>
            </div>
        </div>
    );
}

export default AvatarArea;