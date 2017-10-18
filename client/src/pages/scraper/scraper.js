import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
import axios from "axios";

class Scraper extends Component {

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
    axios.get("https://www.nytimes.com")
    .then(function (res) {
      this.setState({ newArticles: res.data, title:res.data.children(".story-heading").text().trim(), author: "", synopsis: ""});
      console.log(res.data);
    })
    .catch(function (error) {
      console.log(error);
    });
  };





  // Gets all books
  // getArticles: function() {
  //   return axios.get("https://www.nytimes.com");
  //   console.log(res);
  // },
  // // Gets the book with the given id
  // getArticle: function(id) {
  //   return axios.get("/api/article/" + id);
  // },
  // // Deletes the book with the given id
  // deleteArticle: function(id) {
  //   return axios.delete("/api/articles/" + id);
  // },
  // // Saves a book to the database
  // saveArticle: function(articleData) {
  //   return axios.post("/api/articles", articleData);
  // }


render() {
  return (
    <Container fluid>
      <Row>
        <Col size="md-12">
          <Jumbotron>
            <h1>404 Page Not Found</h1>
            <h1>
              <span role="img" aria-label="Face With Rolling Eyes Emoji">
                🙄
              </span>
              {}
            </h1>
          </Jumbotron>
        </Col>
      </Row>
    </Container>
  );
}


};
export default Scraper;
