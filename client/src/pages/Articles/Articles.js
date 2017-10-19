import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import Jumbotron from "../../components/Jumbotron";
import Nav from "../../components/Nav";
import Input from "../../components/Input";
import Button from "../../components/Button";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import searchArticles from "../Search"
// import { Input, TextArea, FormBtn } from "../../components/Form";

class Articles extends Component {

  //
  // loadArticles = () => {
  //   API.getArticles()
  //     .then(res =>
  //       this.setState({ articles: res.data, title: "", author: "", synopsis: "" })
  //     )
  //     .catch(err => console.log(err));
  // };
  //
  // deleteArticle = id => {
  //   API.deleteArticle(id)
  //     .then(res => this.loadArticle())
  //     .catch(err => console.log(err));
  // };
  //
  // handleInputChange = event => {
  //   const { name, value } = event.target;
  //   this.setState({
  //     [name]: value
  //   });
  // };
  //
  // handleFormSubmit = event => {
  //   event.preventDefault();
  //   if (this.state.title && this.state.author) {
  //     API.saveBook({
  //       title: this.state.title,
  //       author: this.state.author,
  //       synopsis: this.state.synopsis
  //     })
  //       .then(res => this.loadArticles())
  //       .catch(err => console.log(err));
  //   }
  // };

  render() {
    return (
      <div>
          <Nav />
          <Jumbotron />
          <Container>
            <Row>
              <Col size="md-12">
                <form>
                  <Container>
                    <Row>
                      <Col size="xs-9 sm-10">
                        <Input
                          name="articleSearch"
                          // value={this.state.articleSearch}
                          // onChange={this.handleInputChange}
                          placeholder="Search For an Article"
                        />
                      </Col>
                      <Col size="xs-3 sm-2">
                        <Button
                          // onClick={this.handleFormSubmit}
                          type="success"
                          className="input-lg"
                        >
                          Search
                        </Button>
                      </Col>
                    </Row>
                  </Container>
                </form>
              </Col>
            </Row>
            <Row>
              <Col size="xs-12">
                Hello
                  // {searchArticles}
              </Col>
            </Row>
          </Container>
        </div>
    );
  }

};

export default Articles;
