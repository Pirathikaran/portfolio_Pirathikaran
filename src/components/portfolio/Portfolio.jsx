
import { useState,useEffect    } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss"
import {
    featuredPortfolio,
    webPortfolio,
    mobilePortfolio,
    designPortfolio,
    contentPortfolio
} from "../../data"

export default function Portfolio() {
    const [selected,setSelected]=useState("web")
    const [data,setdata]=useState([])

    const list=[
       
        {
            id:"web",
            title:"Web App"
        },
        {
            id:"featured",
            title:"Industry"
        },
        {
            id:"mobile",
            title:"Mobile App"
        },
        {
            id:"design",
            title:"Desktop App"
        },
        {
            id:"content",
            title:"Content"
        }
    ];

    useEffect(() => {
      switch(selected){
          case "featured":
              setdata(featuredPortfolio);
              break;
            case "web":
                setdata(webPortfolio);
                break;
            case "mobile":
                setdata(mobilePortfolio);
                break;
            case "design":
                setdata(designPortfolio);
                break;
            case "content":
                setdata(contentPortfolio);
                break;    
            default:       
                setdata(featuredPortfolio)
      }
    }, [selected])
    return (
        <div className="portfolio" id="portfolio">
            <h1>Portfolio</h1>
            <ul>
                {list.map((iteam)=>(
                    <PortfolioList title={iteam.title} active={selected === iteam.id}
                    setSelected={setSelected}
                    id={iteam.id}
                    />
                ))}
            </ul>
            <div className="container">
                {data.map((data)=>(
                    <div className="item">
                    <img src={data.img} alt="" />
                    <h3>
                        {data.title}
                    </h3>
                    </div>
                ))}
               
                
            </div>
        </div>
    )
}
