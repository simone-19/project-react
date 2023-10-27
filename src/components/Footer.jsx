import "bootstrap/dist/css/bootstrap.min.css";
import {Facebook, Instagram, Twitter, Youtube} from "react-bootstrap-icons";



const footer =  () => {
return(
    <footer style={{backgroundColor: '#221f1f' }}>
          <div className="row justify-content-center mt-5">
            <div className="col col-6">
              <div className="row">
                <div className="col mb-2">
                 <Facebook className="me-2"style= {{color:"#838383"}} />
                 <Instagram className="me-2"style= {{color:"#838383"}} />
                 <Twitter className="me-2"style= {{color:"#838383"}} />
                 <Youtube className="me-2" style= {{color:"#838383"}} />
                  
                </div>
              </div>
              <div
                className="row row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-lg 4"
              >
                <div className="col">
                  <div className="row">
                    <div className="col footer-links">
                      <p>
                        <a className="text-decoration-none" href="s" alt="footer link" style={{color: '#838383',}}>Audio and Subtitles</a>
                      </p>
                      <p>
                        <a className="text-decoration-none" href="s" alt="footer link" style={{color: '#838383'}} >Media Center</a>
                      </p>
                      <p>
                        <a className="text-decoration-none" href="s" alt="footer link" style={{color: '#838383'}}>Privacy</a>
                      </p>
                      <p>
                        <a className="text-decoration-none" href="s" alt="footer link" style={{color: '#838383'}}>Contact us</a>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="row">
                    <div className="col footer-links">
                      <p>
                        <a className="text-decoration-none" href="s" alt="footer link" style={{color: '#838383'}}>Audio Description</a>
                      </p>
                      <p>
                        <a className="text-decoration-none" href="s" alt="footer link" style={{color: '#838383'}}>Investor Relations</a>
                      </p>
                      <p>
                        <a className="text-decoration-none" href="s" alt="footer link" style={{color: '#838383'}}>Legal Notices</a>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="row">
                    <div className="col footer-links">
                      <p>
                        <a className="text-decoration-none" href="s" alt="footer link" style={{color: '#838383'}}>Help Center</a>
                      </p>
                      <p>
                        <a className="text-decoration-none" href="s" alt="footer link" style={{color: '#838383'}}>Jobs</a>
                      </p>
                      <p>
                        <a className="text-decoration-none" href="s" alt="footer link" style={{color: '#838383'}}>Cookie Preferences</a>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="row">
                    <div className="col footer-links">
                      <p>
                        <a className="text-decoration-none" href="s" alt="footer link" style={{color: '#838383'}}>Gift Cards</a>
                      </p>
                      <p>
                        <a className="text-decoration-none" href="s" alt="footer link" style={{color: '#838383'}}>Terms of Use</a>
                      </p>
                      <p>
                        <a className="text-decoration-none" href="s" alt="footer link" style={{color: '#838383'}}>Corporate Information</a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col mb-2">
                  <button
                    type="button"
                    className="btn btn-sm footer-button rounded-0 mt-3"
                    style={{color: '#838383'}}>
                    Service Code
                  </button>
                </div>
              </div>
              <div className="row">
                <div className="col mb-2 mt-2 copyright" style={{color: '#838383'}}>
                  © 1997-2023 Netflix, Inc.
                </div>
              </div>
            </div>
          </div>
        </footer>
)
}
export default footer