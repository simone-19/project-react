import "bootstrap/dist/css/bootstrap.min.css";
import Card from 'react-bootstrap/Card';
// import { Row, Col } from 'react-bootstrap';



const FilmCard = (props) => {
return(


  
      <Card.Img className="col-12 col-md-4 col-lg-2 m-1" style={{width: '200px',}} variant="top" src={props.film.Poster}/>
      
      
)
}
 
    
 
export default FilmCard