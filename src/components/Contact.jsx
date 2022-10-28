import { useContext } from "react";
import { ApiProvider } from "../context/Api";
import { TabTitle } from "../utils/GeneralFunction";



function Contact () {

  TabTitle('Contact')

      const context = useContext(ApiProvider);

      const { api, setApi, theme } = context;

      function mode() {
        const light = {
          textDecoration: "none",
          color: "black",
        };
        const dark = {
          textDecoration: "none",
          color: "white",
        };
        return theme ? light : dark;
      }

    return (
        <>
        {theme ? (
          <div className="return">
            <div className="welcome">
              <h1><a  href="mailto:yousyogue@gmail.com" style={ mode() }>yousyogue@gmail.com</a></h1>
              <a  target="_blank" href="https://www.linkedin.com/in/youssouf-yogue/"><img src="https://180dc.org/wp-content/uploads/2020/01/Linkedin-logo-1-550x550-300x300.png" alt="" className="linkedin-img"/></a>
            </div>
          </div>
        ) : (
            <div className="contact-dark">
            <div className="welcome">
              <h1><a href="mailto:yousyogue@gmail.com" style={ mode() }>yousyogue@gmail.com</a></h1>
              <a  target="_blank" href="https://www.linkedin.com/in/youssouf-yogue/"><img src="https://180dc.org/wp-content/uploads/2020/01/Linkedin-logo-1-550x550-300x300.png" alt="" className="linkedin-img"/></a>
            </div>
          </div>
        )
      }
        </>
    )
}


        // <div className="contact" style={ mode() }>
        //     <div className="email">
        //     <a  className="welcome email" href="mailto:yousyogue@gmail.com" style={ mode() }>yousyogue@gmail.com</a>
        //     </div>
        //     <div>
        //         <a  target="_blank" href="https://www.linkedin.com/in/youssouf-yogue/"><img src="https://180dc.org/wp-content/uploads/2020/01/Linkedin-logo-1-550x550-300x300.png" alt="" className="linkedin-img"/></a>
        //     </div>
        // </div>

export default Contact; 