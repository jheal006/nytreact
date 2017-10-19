import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import { Link } from "react-router-dom";

import Jumbotron from "../../components/Jumbotron";
import {Input} from "../../components/Form";

import axios from "axios";


class searchArticles extends Component {

  state = {
    newArticles: [],
    title: "",
    date: "",
    url: ""
  };

  componentDidMount() {
    this.scrapeArticles();
  };

  scrapeArticles = () => {

    axios.get("https:api.nytimes.com/svc/search/v2/articlesearch.json?api-key=49aa8d89e7ce4b03940699b7e364e50d")
    .then(res => {
      this.setState({
        newArticles: res.docs,
        title: "",
        date:"",
        url:""
        // title: this.newArticles[0].headline.main
      })
    })
  };




render() {
  return (
    <div>
        <Container fluid>
            <Row>
                <Col size="md-12">
                    <h1 className="text-center">Search</h1>
                    <form onSubmit={this.handleFormSubmit}>
                        <label>Topic: {this.state.topic}</label>
                        <Input
                            value={this.state.topic}
                            onChange={this.handleInputChange}
                            name="topic"
                            placeholder="Topic (required)"/>
                        <label>
                            startYear : {this.state.startDate}</label>
                        <Input
                            value={this.state.startDate}
                            onChange={this.handleInputChange}
                            type="number"
                            min="1800"
                            max="2017"
                            placeholder="Start Date (required)"name="startDate"/>
                        <label>EndYear: {this.state.endDate}</label>
                        <Input
                            value={this.state.endDate}
                            onChange={this.handleInputChange}
                            name="endDate"
                            placeholder="End Date (required)"/>
                        <input type="submit" value="Search"/>
                    </form>
                </Col>
            </Row>
        </Container>
        <Container fluid>
        </Container>
    </div>
  );
}


};
export default searchArticles;
