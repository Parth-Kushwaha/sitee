import {useState} from 'react'

export default function Core() {
    const [cards]=useState([
        {
            title: "Genera Secretary",
            name: "Akshat Aggarwal",
            img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FImage&psig=AOvVaw0_PDIg8MxrPpQfuPIFe6XT&ust=1672438935788000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCND749bun_wCFQAAAAAdAAAAABAE"
        },
        {
            title: "Chief Secretary",
            name: "Vishnu Tandon",
            img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FImage&psig=AOvVaw0_PDIg8MxrPpQfuPIFe6XT&ust=1672438935788000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCND749bun_wCFQAAAAAdAAAAABAE"
        },
        {
            title:"Joint Secretary",
            name: "Gulshan Kumar Mehta",
            img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FImage&psig=AOvVaw0_PDIg8MxrPpQfuPIFe6XT&ust=1672438935788000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCND749bun_wCFQAAAAAdAAAAABAE"
        },
        {
            title: "Vice Secretary",
            name: "Sneha Mehta",
            img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FImage&psig=AOvVaw0_PDIg8MxrPpQfuPIFe6XT&ust=1672438935788000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCND749bun_wCFQAAAAAdAAAAABAE"
        },
        
        {
            title: "Regent Secretary",
            name: "Kunwar Prarup Yash",
            img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FImage&psig=AOvVaw0_PDIg8MxrPpQfuPIFe6XT&ust=1672438935788000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCND749bun_wCFQAAAAAdAAAAABAE"
        },
        
        {
            title: "Deputy Regent Secretary",
            name: "Shubhangi Pandey",
            img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FImage&psig=AOvVaw0_PDIg8MxrPpQfuPIFe6XT&ust=1672438935788000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCND749bun_wCFQAAAAAdAAAAABAE"
        },
        {
            title: "Deputy Regent Secretary",
            name: "Shubham Satyam Dubey",
            img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FImage&psig=AOvVaw0_PDIg8MxrPpQfuPIFe6XT&ust=1672438935788000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCND749bun_wCFQAAAAAdAAAAABAE"
        }
        
    ]);
  return (
    <div >  
      <section>
        <div className="container" style={container}>
            <h1 style={heading}>CORE TEAM</h1>
            <div className="cards" style={card1}>
                {
                    cards.map((card,i)=>(
                        <div key={i} className="card" style={card2} >
                            <img src={card.img} alt="images"/>
                            <h3>{card.name}</h3>
                            <p>{card.title}</p>
                        </div>
                    ))
                }    
            </div>
        </div>
      </section>
    </div>
    
  )
}

const container={
    maxWidth: "1100px",
    width: "100%",
    margin: "auto",
    marginBottom: "30px",
    display: "block",
   
}

const heading={
   fontSize: "40px",
   textAlign: "center",
   padding: "20px",
   color: "red"
}
const card1={
   display: "flex",
   flexWrap: "wrap",
   justifyContent: "spacearound"

}

const card2={
   backgroundColor: "lightgrey",
   cursor: "pointer",
   marginLeft: "auto",
   marginRight: "auto",
   marginBottom: "20px",
   textAlign: "center",
   borderRadius: "100px 100px 0px 0px",
   margin: "auto",
   height: "280px",
   width: "250px"
}




