import React from "react";
import styles from '../styles/styles.module.css'

const AboutMeContent= () => {

    return (
        <div className={styles.aboutMeContainer}>
            <div> 
                <div className={styles.smallSection}><h2> About Me </h2></div>
                <div className={styles.tallSection}>
                    <div className={styles.boldTextSection}><h2> Education </h2></div>
                    <div className={styles.line}> </div>
                    <div className={styles.innerText}>
                        <div>
                        <p><br></br>
                            <p><b>Timeline:</b></p>
                            <p>2017: Athena High <br></br></p>
                            <p>2019 - 2022: Monroe Community College <br></br></p>
                            <p>Awarded: A.S. Computer Science <br></br></p>
                            <p>2022 - 2024: SUNY Brockport <br></br></p>
                            <p>Awarded: B.S. Computer Science <br></br></p>
                        </p>   
                        </div>
                    </div>  {/* end inner */}
                </div> {/* end tall section*/}
            </div>
            <div>
                <div className={styles.tallSection}>
                    <div className={styles.boldTextSection}><h2> Hobbies </h2></div>
                    <div className={styles.line}></div>
                    <div className={styles.innerText}>
                        <p><br></br>
                            <p> In my free time, I enjoy keeping my mind busy with playing fighting games, including going to local tournaments to compete </p><br></br>
                            <p> To keep me physically active, I enjoy rock climbing at my local climbing gym, it's a great way to keep myself healthy while also solving physical puzzles </p> <br></br>
                            <p> I aspire to continue on my education in either the computer science or education field and eventually become a teacher myself, a passion I realized during my time working with Code Ninjas.</p>
                        </p>
                    </div>
                </div> {/* end tall */}
                <div className={styles.smallSection}>
                    <div className={styles.innerText}>
                        <h3> Where to reach me: </h3>
                        <p> eMail: <a href="mailto: tnicholas512@gmail.com"> tnicholas512@gmail.com</a></p>
                        <p> LinkedIn: <a href="https://www.linkedin.com/in/tyler-nicholas-1300a8173/">Tyler Nicholas </a></p>
                        <p> Carrier Pidgeon: <a href="https://visdeurbel.nl/en/the-fish-doorbell/"> Coo coo, co coo coo </a></p>
                    </div>
                </div> 
            </div>
        </div>
    )
}

export default function AboutMe() {

    return (
        <div>
            <AboutMeContent/>
        </div>
    );
}