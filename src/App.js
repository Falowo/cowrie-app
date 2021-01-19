import React from 'react';
import './App.css';
import { Readings } from "./Reading";
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Cowrie(props) {
  if (props.value) {
    return (
      <Image src="/cowries/open.jpg" style={{transform:'rotate(' + props.orientation + 'deg)'}} roundedCircle />
    )
  } else {
    return (
      <Image src="/cowries/closed.jpg" style={{transform:'rotate(' + props.orientation + 'deg)'}} roundedCircle />

    )
  }
}


class Sixteen extends React.Component {
 
  renderCowrie(i) {
    return (
      <Cowrie
        value={this.props.cowries[i]}
        orientation={this.props.orientations[i]}
      />
    );
  }

  render() {

    return (

      <Container className="text-center" >
        <h1>Oracle des 16 cauries</h1>
        <Row md={6} className="justify-content-md-center">
          <Col xs={3}>
            {this.renderCowrie(0)}
          </Col>
          <Col xs={3}>
            {this.renderCowrie(1)}
          </Col>
          <Col xs={3}>
            {this.renderCowrie(2)}
          </Col>
          <Col xs={3}>
            {this.renderCowrie(3)}
          </Col>
        </Row>
        <Row md={6} className="justify-content-md-center">
          <Col xs={3}>
            {this.renderCowrie(4)}
          </Col>
          <Col xs={3}>
            {this.renderCowrie(5)}
          </Col>
          <Col xs={3}>
            {this.renderCowrie(6)}
          </Col>
          <Col xs={3}>
            {this.renderCowrie(7)}
          </Col>
        </Row>
        <Row md={6} className="justify-content-md-center">
          <Col xs={3}>
            {this.renderCowrie(8)}
          </Col>
          <Col xs={3}>
            {this.renderCowrie(9)}
          </Col>
          <Col xs={3}>
            {this.renderCowrie(10)}
          </Col>
          <Col xs={3}>
            {this.renderCowrie(11)}
          </Col>
        </Row>
        <Row md={6} className="justify-content-md-center">
          <Col xs={3}>
            {this.renderCowrie(12)}
          </Col>
          <Col xs={3}>
            {this.renderCowrie(13)}
          </Col>
          <Col xs={3}>
            {this.renderCowrie(14)}
          </Col>
          <Col xs={3}>
            {this.renderCowrie(15)}
          </Col>
        </Row>
        <Button
          variant="success"
          onClick={() => this.props.onClick()}
        >
          Lancer les cauries magiques
          </Button>
      </Container>
    )
  }

}

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      history: [{
        cowries: Array(16).fill(true),
        orientations: Array(16).fill(0),
      }],
      stepNumber: 0,
    }
  }

  handleClick() {
    const history = this.state.history;
    const current = history[history.length - 1];
    const cowries = current.cowries.map(() => Math.random() >= .5);
    const orientations = current.orientations.map(
      ()=>Math.round(Math.random()*360));
    this.setState({
      history: history.concat([{
        cowries: cowries,
        orientations: orientations
      }]),
      stepNumber: history.length,
    });
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
    })
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const number = countNumberCowriesUp(current.cowries);

    const casts = history.map((step, cast) => {
      const desc = cast ?
        'Retourner au lancé #' + cast :
        'Retourner au début';
      return (
        <li key={cast}>
          <Button variant="primary" onClick={() => this.jumpTo(cast)}>{desc}</Button>
        </li>
      )
    });

    return (
      <div className="app">
        <div className="app-sixteen">
          <Sixteen
            cowries={current.cowries}
            orientations={current.orientations}
            onClick={() => this.handleClick()}
          />
        </div>
        <div className="app-info" >
        <Row  className="justify-content-center">
            <Col md={6} xs={9}>
              <Readings
                id={number}
              />
              <ol>{casts}</ol>

            </Col>
          </Row>
        </div>
      </div>
    )


  }
}

function countNumberCowriesUp(cowries) {
  let number = 0;
  cowries.forEach((cowrie) => cowrie ? number++ : number);
  return number;
}




export default App;
