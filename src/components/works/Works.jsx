import { useState } from "react";
import "./work.scss"

export default function Works() {
    const [currentSlide,setCurrentSlide]=useState(0);
    const data = [
        {
          id: "1",
          icon: "./assets/globe.png",
          title: "ELEGANT ONLINE SHOPPING STORE",
          desc:"Provide secure and user-friendly fashion store website, and system contains separate stakeholder levels with unique features",
          img:"/assets/affinal.png",
          tech:"MERN | GITHUB | HEROKUAPP"
            // "https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930",
        },
        // {
        //   id: "2",
        //   icon: "./assets/globe.png",
        //   title: "INSTITUTE MANAGEMENT WEB",
        //   desc:
        //     " In this project we use a customized theme, my part was Staff management including all crud operations, Staff login and register pages and generate monthly reports.",
        //   img:"/assets/intitutemanage.png",
        //   tech:"PHP|BOOTSTRAP|MYSQL|HTML|JS|JQUERY"
        //     // "https://i.pinimg.com/originals/e9/c9/2f/e9c92f7869d682a6fa5a97fb8a298f30.jpg",
        // },
        {
          id: "3",
          icon: "./assets/globe.png",
          title: "PORTFOLIO WEBSITE",
          desc:
            "System show my portfolio here i used react js and aws for hosting purpose. Fully responsible website.",
          img:"./assets/cv.png",
          tech:"REACT|SCSS|GITHUB|AWS-S3,CLOUDFRONT"

            // "https://i.pinimg.com/originals/a9/f6/94/a9f69465d972a004ad581f245d6ad581.jpg",
        },
        {
          id: "4",
          icon: "./assets/globe.png",
          title: "Employee Record system",
          desc:
            "I developed system to save employee details using REST API on aws.",
          img:"./assets/employee.png",
          tech:"SPRING BOOT | REACT JS| AWS - ELASTIC BEANSTALK , S3, RDS - MYSQL "
        },
        {
          id: "5",
          icon: "./assets/mobile.png",
          title: "INTERVIEW QUESTION (REACT NATIVE)",
          desc:
            "This was Personal project React Native Android Project.In my app I included dark mode, Google Admob using firebase.",
          img:"./assets/interviewapp.png",
          tech:"REACT NATIVE| GOOGLE ADS | GITHUB | PLAY STORE"
        },
        // {
        //   id: "6",
        //   icon: "./assets/mobile.png",
        //   title: "SCIENCE GAME FLUTTER",
        //   desc:
        //     "Mobile application(Android) allow students to play games (Drag and drop and matching games) according their science syllabus concepts",
        //   img:"./assets/keetha.png",
        //   tech:"DART| FLUTTER | JSON "
        // },
        // {
        //   id: "7",
        //   icon: "./assets/mobile.png",
        //   title: "Construction management(Flutter)",
        //   desc:
        //     "The system allows users to keep the construction side records and manage delivery records.",
        //   img:"./assets/caat.png",
        //   tech:"DART| FLUTTER | FIREBASE "
        // },
        // {
        //   id: "8",
        //   icon: "./assets/deskicon.png",
        //   title: "Time Table Management",
        //   desc:
        //     " My parts were generate time table, add time slots with crud, add days with crud. ",
        //   img:"./assets/desktop1.png",
        //   tech:"JAVA SWING | SQLITE | GITHUB "
        // },
        // {
        //   id: "9",
        //   icon: "./assets/deskicon.png",
        //   title: "Fire Alarm System",
        //   desc:
        //     " Enterprise Application to detect fire using CO2 level, smoke level and alert user about fire(Team Leader-4 MEM Team).",
        //   img:"./assets/firealaram.png",
        //   tech:"JAVA SWING | REACT JS | EXPRESS JS | MONGODB | GITHUB "
        // },

      ];
      const handleClick=(way)=>{
          way === "left" ? setCurrentSlide(currentSlide >0 ? currentSlide -1 : 8) :
          setCurrentSlide(currentSlide < data.length -1 ? currentSlide + 1 : 0)
      }
    
    return (
        <div className="works" id="works">
            <div className="slider" style={{transform:`translateX(-${currentSlide * 100}vw)`}}>
                {data.map((d)=>(

                
                <div className="container">
                    <div className="item">
                        <div className="left">
                            <div className="leftContainer">
                                <div className="imageContainer">
                                    <img src={d.icon } alt="" />
                                </div>
                                <h2>{d.title}</h2>
                                <p>{d.desc}</p>
                                <span>{d.tech}</span>
                            </div>
                        </div>
                        <div className="right">
                            <img src={d.img} alt="" />
                        </div>
                    </div>
                  
                </div>
                  ))}
            </div>
            <img src="assets/arrow.png" className="arrow left" alt=""  onClick={()=>handleClick("left")}/>
            <img src="assets/arrow.png" className="arrow right" alt="" onClick={()=>handleClick("right")} />

        </div>
    )
}
