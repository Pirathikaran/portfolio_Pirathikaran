import "./intro.scss"
import { init } from 'ityped'
import { useEffect ,useRef} from "react"


export default function Intro() {
    const textRef=useRef();
    useEffect(()=>{
        init(textRef.current, {
             backDelay:1500,
             backSpeed:60,
             showCursor:true,
             strings: ['Web developer', 'Mobile Developer', 'Full Stack developer' ] })

    },[])
    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imageContainer">
                    <img src="assets/pirathi.png" alt="" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi There, I'm</h2>
                    <h1>Pirathikaran</h1>
                    <h3>Associate Software Enginner <span ref={textRef}></span></h3>
                </div>
                <a href="#portfolio">
                    <img src="assets/down.png" alt="" />
                </a>

            </div>
        </div>
    )
}
