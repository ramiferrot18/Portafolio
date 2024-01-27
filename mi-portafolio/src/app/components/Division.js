import style from "./Division.module.css";
function Division(){
    return(
    <div className={style.division}>
            <div className={style.buttons}>
            
                <button className={style["btn-primary"]} onclick="download()">
                    <div className={style["btn-content"]}>
                        <p>Download CV</p>
                        <img src="download.svg" alt="arrow" className={style["btn-primary-img"]}/>
                        
                    </div>
                </button>
                <a className={style["btn-secondary"]} href="mailto:contact@me.com">
                    <div className={style["btn-content"]}>
                        <p>Contact me</p>
                    </div>
                </a>
            
            </div>
            <div className={style.tabs}>
                <button className={style["tabs-background-item-active"]}>
                    <p className={style["tabs-background-item-text"]}>Portafolio</p>
                </button>
                <button className={style["tabs-background-item"]}>
                    <p className={style["tabs-background-item-text"]}>Skills</p>
                </button>
            </div>
    </div>
        
    );
}
export default Division;