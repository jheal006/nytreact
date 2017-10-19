import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
import axios from "axios";


class search extends Component {

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
    <Container fluid>
      <Row>
        <Col size="md-12">
          <Jumbotron>
            <h1>New York Times Search</h1>
          </Jumbotron>
        </Col>
      </Row>
      <Row>
        <Col size="md-12">
          <div class="panel panel primary">
            <div class="panel-body">
              <h2>Top Articles</h2>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}


};
export default search;
