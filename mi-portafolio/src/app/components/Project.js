import style from "./Project.module.css";
function Project(){
    return(
        <div className={style.projectContainer}>
                <div className={style["content-card-img"]}>
                    <img className={style["image"]} src="pictures_wall.jpeg" />
                    <div className={style["content-card-img-overlay"]}>

                    </div>
                    <div className={style["content-card-img-detail"]}>
                        <p className={style["title"]}>repositorio 1</p>
                        <p className={style["detail"]}>ESTE ES UNA SIMULACION DE UN REPOSITORIO</p>
                        <button className={style["btn"]} href="https://github.com" target="_blank">
                            
                                <img src="perfil.jpeg" alt="link"/>
                            
                        </button>
                    </div>
                </div>
                
        </div>
        
    );
}
export default Project;