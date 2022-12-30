import React from 'react'

export default function Footer() {
  return (
    <footer>
    <div className="mainFooter" style={mainFooter}>
        <div className="container" >
        <div className="row"  style={links1}>
             {/* {column-1} */}
             <div className="col" style={links2}>
                <div className="logo" style={logo}>
                    <img src="./images/image2.jpg" srcSet="./images/image2-300.jpg 300w, ./images/image2-768.jpg 768w, ./images/image2.jpg 1280w"
                    sizes="(max-width: 300px) 300px, (max-width: 768px) 768px, 1280px" alt="logo" />
                </div>
                <div style={social}> 
                    
                    <a href='https://reactjs.org/'><i className="fa-brands fa-3x fa-instagram"></i></a>
                    <a href='https://reactjs.org/'><i className="fa-brands fa-3x fa-twitter"></i></a>
                    <a href='https://reactjs.org/'><i className="fa-brands fa-3x fa-linkedin"></i></a>
                    <a href='https://reactjs.org/'><i className="fa-brands fa-3x fa-facebook"></i></a>
                </div>
             </div>
            <div style={links}>
                {/* {column-2} */}
                <div className="col" style={links3}>
                    <h4 style={h4}>EXPLORE</h4>
                    <ul className="list-unstyled" style={ul}>
                        <li><a href="https://reactjs.org/">Events</a></li>
                        <li><a href="https://reactjs.org/">Clubs</a></li>
                        <li><a href="https://reactjs.org/">Team</a></li>
                    </ul>
                </div>

                {/* {column-3} */}
                <div className="col" style={links3}>
                    <h4 style={h4}>Useful Links</h4>
                    <ul className="list-unstyled"  style={ul}>
                        <li><a href="https://reactjs.org/">Event Registration</a></li>
                        <li><a href="https://reactjs.org/">Club Registration</a></li>
                        <li><a href="https://reactjs.org/">CONTACT US</a></li>
                    </ul>
                </div>
                {/* {column-4} */}
                <div className="col" style={links3}>
                    <h4 style={h4}>Contact Info</h4>
                    <ul className='list-unstyed' style={ul}>
                        <li><a href="https://reactjs.org/">C-148, Galgotias University,Greater Noida</a></li>
                        <li><a href="https://reactjs.org/">studentcouncil@galgotiasuniversity.edu.in</a></li>
                    </ul>
                </div>
            </div>
           
        </div>
        </div>
        <hr/>
        <div className="row" >
        <p className='col-sm' style={rights}>
            Designed by <b>Graphex</b>, Made by <b>Team Technojam</b>. All rights reserved
        </p>
        </div>
        
    </div>
    </footer>
    
  )
}

const mainFooter={
    height: "260px",
    height: "100%",
    backgroundColor: "black",
}

const links1={
    width:"100%",
    display:"flex",
    flexDirectionL:"row"

 }

const links={ 
    width:"70%",
    color:"white",
    display: "flex",
    justifyContent: "space-around"
}

const links2={
    width:"30%",
    height:"100px",
    display: "flex",
    flexDirection:"column",
    
    justifyContent:"center",
}

const links3={
    height:"200px",
    width: "auto",
}

const ul={
    display: "flex",
    flexDirection: "column",
    textAlign:"center",
    listStyleType: "none",
    color:"white"
}

const h4={
    textAlign:"center"
}
const rights={
    color: "white",
    textAlign:"center",
    padding:"15px 10px",
    marginBottom:"1px"
}



const social={ 
    display: "flex",
    marginBottom:"30px",
    justifyContent:"space-around",
    padding:"10px 50px "
}
const logo={
    scale:"0.3",
    marginTop:"50px",
    marginBottom:"-100px",
    marginRight: "250px"
}
