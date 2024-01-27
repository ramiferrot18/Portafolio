"use client"
import style from './Profile.module.css';
function Profile(){
    return(
        <div className={style["profile"]}>
            <figure className={style["profile-img"]}>
                <img src="perfil.jpeg"/>
            </figure>

            <div className={style["profile-info"]}>
                <h1>Ramiro Fernandez</h1>
                <p>Software Engineer</p>
                <div className={style["profile-social"]}>
                    <a href="https://github.com" target="_blank">
                        <img src="github.svg" className={style.profilesocialimg}/>
                    </a>
                    <a href="https://twitter.com" target="_blank">
                        <img src="twitter.svg" className={style.profilesocialimg}/>
                    </a>
                    <a href="https://linkedin.com" target="_blank">
                        <img src="linkedin.svg" className={style.profilesocialimg}/>
                    </a>
                    <a href="https://youtube.com" target="_blank">
                        <img src="youtube.svg" className={style.profilesocialimg}/>
                    </a>
                </div>
            </div>
        </div>

    );
    
}
export default Profile;