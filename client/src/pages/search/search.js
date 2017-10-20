import React, {Component} from 'react';
import DeleteBtn from "../../components/DeleteBtn";
import Jumbotron from "../../components/Jumbotron";
import {Col, Row, Container} from "../../components/Grid";
import {List, ListItem} from "../../components/List";
import {Input, TextArea, FormBtn} from "../../components/Form";
import axios from "axios";
import Result from "../Result"


class Searcharticles extends Component {

  state = {

  };


render() {
  return (
    <div>
        <Container fluid>
            <Row>
                <Col size="md-12">
                    <h1 className="text-center">Search</h1>
                    <form onSubmit={this.handleFormSubmit}>
                        <label>Topic: </label>
                        <Input
                            value={this.state.topic}
                            onChange={this.handleInputChange}
                            name="topic"
                            placeholder="Topic (required)"/>

                        <input type="submit" value="Search"/>
                    </form>
                </Col>
            </Row>
        </Container>
    </div>
  );
}


};
export default Searcharticles;
