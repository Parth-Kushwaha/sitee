import React from 'react'

export default function Footer() {
  return (
    <footer>
    <div className="mainFooter">
        <div className="container">
        <div className="row"></div>
             {/* {column-1} */}
             <div className="col">
                <div>
                    <i class="fa-brands fa-instagram"></i>'
                    <i class="fa-brands fa-twitter"></i>
                    <i class="fa-brands fa-linkedin"></i>
                    <i class="fa-brands fa-facebook"></i>
                </div>
             </div>

            {/* {column-2} */}
            <div className="col">
                <h4>EXPLORE</h4>
                <ul className="list-unstyled">
                    <li><a href="https://reactjs.org/">Events</a></li>
                    <li><a href="https://reactjs.org/">Clubs</a></li>
                    <li><a href="https://reactjs.org/">Team</a></li>
                </ul>
            </div>

            {/* {column-3} */}
            <div className="col">
                <h4>Useful Links</h4>
                <ul className="list-unstyled">
                    <li><a href="https://reactjs.org/">Event Registration</a></li>
                    <li><a href="https://reactjs.org/">Club Registration</a></li>
                    <li><a href="https://reactjs.org/">CONTACT US</a></li>
                </ul>
            </div>
            {/* {column-4} */}
            <div className="col">
                <h4>Contact Info</h4>
                <ul className='list-unstyed'>
                    <li><a href="https://reactjs.org/">C-148, Galgotias University, Greater Noida</a></li>
                    <li><a href="https://reactjs.org/">studentcouncil@galgotiasuniversity.edu.in</a></li>
                </ul>
            </div>
           
        </div>
        
    </div>
    </footer>
    
  )
}
