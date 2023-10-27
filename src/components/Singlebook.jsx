import { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import FilmCard from "./FilmCard";
import { Col } from "react-bootstrap";

class Singlebook extends Component {
    state= {
        array: []
    }

    addfilm = () => {
        fetch(
            "http://www.omdbapi.com/?i=tt3896198&apikey=801a25fe&s=" + this.props.film,
            {
              
            }
          )
            .then((res) => {
              if (res.ok) {
                return res.json();
              } else {
                throw new Error("errore");
              }
            })
            .then((x) => {
              this.setState({array: x.Search});
            })
            .catch((err) => {
              console.log("errore", err);
            });
        };
    
componentDidMount() {
    this.addfilm ()
}
    render() {
        console.log(this.state.array)
        return(
        <Col>
            {this.state.array.map((film, index) => (<FilmCard key={index} film={film}/>))}
            </Col>

           
        )

    }}

export default Singlebook