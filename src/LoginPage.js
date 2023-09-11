import React, {useState} from 'react';
import instagram_logo from "./photos/Instagram_logo.svg.png"
import {loginUser,getLoginStatus} from "./services/authService";
import {useDispatch, useSelector} from "react-redux";
import {SET_LOGIN} from "./redux/features/auth/authSlice";

function LoginPage() {
    const dispatch = useDispatch();
    const [announcement, setAnnouncement] = useState(true);
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState(false);
    const [err, setErr] = useState("");
    const checkUser = useSelector((state) => state.auth.user)

    const login = async (e)=>{
        e.preventDefault();
        if (!userName || !password) {

        }

        const input = {
            userName,
            password
        }
        try {
            const data = await loginUser(input);
            if (!data.response){
               const status = await getLoginStatus();
                if (status===true){
                   dispatch(SET_LOGIN(true))
                    console.log(data)
                }
            }else{
                setErr(data.response.data.message)
            }



        } catch (error) {
            console.log("Failed to establish an efficient connection to the server!")
        }
    }


    return (
        <div>
            {!announcement ?
                <div className="background-filter">
                    <div className="info-box">Esta copia es una copia de Instagram preparada por mí y muy abierta a
                        crítica, que comencé valientemente antes de haber completado dos semanas de programación web, y
                        por lo tanto, era consciente de que podía tener deficiencias. (Solo tuve unos meses de C++
                        experiencia)
                        Como soy extremadamente deficiente en todas las materias y por lo tanto necesito mejorar mucho en todas las áreas;
                        Tailwindcss, Bootstrap, etc. Intenté no utilizar ninguno de los métodos que facilitarían mi trabajo.
                        y todo listo (todos los css, html, js. me pertenecen).
                        Necesito tu ayuda más que suficiente;
                        Lo que más necesito ahora son comentarios de personas con experiencia.
                        Las características que quieres que agregue al proyecto, las áreas que crees que me faltan y consejos, etc.
                        Me encantaría que me escribieras a la dirección de correo electrónico que he añadido a continuación :)<br/>
                        Gracias de antemano, seguiré trabajando duro para mejorar lo más posible..
                        <h1>"sleymurillopena80@gmail.com"</h1>
                        <div style={{color:"red",fontWeight:"bold",border:"1px solid red",margin:"auto"}} onClick={() => setAnnouncement(false)}>CLOSE!</div>
                    </div>
                </div>
                :
                null
            }

            <div className="login-page-main-area-container">
                <div>
                    <div><img className="login-page-instagram-logo" src={instagram_logo} alt="instagramLogo"/></div>
                    <form onSubmit={login}>
                        <div className="login-page-login-area">
                            <input onChange={event => setUserName(event.target.value)} type="text" id="username"
                                   style={{height: "36px", width: "268px", margin: "auto"}}
                                   placeholder="Username"/>
                            <input onChange={event => setPassword(event.target.value)} type="password" id="password"  height="38px"
                                   style={{height: "36px", width: "268px", margin: "auto", marginTop: "10px"}}
                                   placeholder="Password"/>
                            <div style={{marginRight: "45%", marginTop: "20px"}}><input type="checkbox" id="remember-me"
                                                                                        name="remember-me"/> <label
                                htmlFor="remember-me">Save login info</label></div>
                            <button type="submit" style={{
                                width: "268px",
                                height: "32px",
                                backgroundColor: "#4CB4F8",
                                color: "white",
                                borderRadius: "10px",
                                border: "none",
                                margin: "auto",
                                marginTop: "-10px"
                            }}>
                                Login
                            </button>
                            <div style={{color: "red"}}>Forgot your password?</div>
                            <div>You're screwed because this feature is not yet active :)</div>
                            <div style={{color:"red"}}>{err}</div>
                        </div>
                    </form>

                </div>
                <div style={{display: "flex", flexDirection: "row", margin: "auto"}}>
                    <div>Don't have an account?</div>
                    <a href="/register" style={{color: "#4CB4F8", marginLeft: "5px", textDecoration: "none"}}>Sign
                        up</a>
                </div>
            </div>
            <div className="login-page-bottom-area all-gray">
                <a href="https://about.meta.com/">Meta</a>
                <a href="https://about.instagram.com/">About</a>
                <a href="https://about.instagram.com/blog/">Blog</a>
                <a href="https://www.instagram.com/about/jobs/">Jobs</a>
                <a href="https://help.instagram.com/">Help</a>
                <a href="https://developers.facebook.com/docs/instagram">API</a>
                <a href="https://www.instagram.com/legal/privacy/">Privacy</a>
                <a href="https://www.instagram.com/legal/terms/">Terms</a>
                <a href="https://www.instagram.com/directory/profiles/">Top Accounts</a>
                <a href="https://www.instagram.com/explore/locations/">Location</a>
                <a href="https://www.instagram.com/web/lite/">Instagram Lite</a>
                <a href="https://www.facebook.com/help/instagram/261704639352628">Contact Uploading & Non-Users</a>
                <a href="https://about.meta.com/technologies/meta-verified/">Meta Verified</a>
            </div>
        </div>
    );
}

export default LoginPage;