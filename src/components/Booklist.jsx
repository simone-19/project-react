import "bootstrap/dist/css/bootstrap.min.css";
// import { Col, Row } from 'react-bootstrap'
import Singlebook from '../components/Singlebook'


const booklist = () => {
    
    return (
        <div style={{backgroundColor: '#221f1f' }}>
        <h4 className="ms-2" style= {{color:"white"}}>Trending Now</h4>
        <div className="m2 text-center">
            <Singlebook film='Harry Potter' />
            </div>
        <h4 className="ms-2" style= {{color:"white"}}>Watch it Again</h4>
        <div className="m2 text-center">
          <Singlebook film='The Lord of Rings' />
          </div>
        <h4 className="ms-2" style= {{color:"white"}}>New Releases</h4>
        
        <div className="m2 text-center">
          <Singlebook film='Star wars' />
         </div>
        </div>
    )
  }

export default booklist