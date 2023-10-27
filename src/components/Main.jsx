import "bootstrap/dist/css/bootstrap.min.css";
import { Grid, Grid3x3 } from "react-bootstrap-icons";

const main = () => {
    return(
        <div className="container-fluid px-4" style={{backgroundColor: '#221f1f' }}>
        <div className="d-flex justify-content-between">
          <div className="d-flex">
            <h2 className="mb-4" style= {{color:"white"}}>TV Shows</h2>
            <div className="btn-group" role="group">
              <div className="dropdown ms-4 mt-1">
                <button
                  type="button"
                  className="btn btn-secondary btn-sm dropdown-toggle rounded-0"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={{backgroundColor: '#221f1f'}}
                >
                  Genres
                </button>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="s">Comedy</a></li>
                  <li><a className="dropdown-item" href="s">Drama</a></li>
                  <li><a className="dropdown-item" href="s">Thriller</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div>
           <Grid className="me-2" style= {{color:"white"}}/>
            <Grid3x3 className="me-2" style= {{color:"white"}}/>
          </div>
          </div>
          </div>
    )
}

export default main