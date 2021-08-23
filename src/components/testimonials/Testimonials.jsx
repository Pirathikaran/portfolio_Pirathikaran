import "./testimonials.scss"

export default function Testimonials() {
    const data = [
        {
          id: 1,
          name: "Vishva rodrigo",
          title: "Cloud Architect",
          img:"assets/vishva.jpg",
            // "https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
          icon: "assets/twitter.png",
          desc:
            "You did great job at intern time period.",
        },
        {
          id: 2,
          name: "Sanjeevan Balasingam",
          title: "Senior Software Engineer",
          img:"assets/sangee.jpg",
            // "https://images.pexels.com/photos/3863793/pexels-photo-3863793.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
          icon: "assets/linkedin.png",
          desc:
            "I have worked with him amazing. He is more interested in developing useful app for society. ",
            featured: true,
        },
        {
          id: 3,
          name: "Sumudu Hewage",
          title: "Senior Software Engineer",
          img:"assets/sumudu.jpg",
            // "https://images.pexels.com/photos/428321/pexels-photo-428321.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
          icon: "assets/twitter.png",
          desc:
            "I appreciate his work and dedication to learning new things. ",
        },
        
      ];
    return (
        <div className="testimonials" id="testimonials">
            <h1>Testimonials</h1>
            <div className="container">
                {data.map((data)=>(
                <div className={data.featured ? "card featured" :"card"}>
                    <div className="top">
                        <img src="assets/right-arrow.png" className="left" alt="" />
                        <img className="user" src={data.img} alt="" />
                        <img className="right" src={data.icon} alt="" />


                    </div>
                    <div className="center">
                        {data.desc}
                    </div>
                    <div className="bottom">
                         <h3>{data.name}</h3>
                         <h4>{data.title}</h4>
                    </div>
                </div>
                ))}
            </div>
        </div>
    )
}
