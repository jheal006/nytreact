import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import Jumbotron from "../../components/Jumbotron";
import Nav from "../../components/Nav";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import Searcharticles from "../Search"
import Results from "../Result"
// import { Input, TextArea, FormBtn } from "../../components/Form";

class Articles extends Component {


  render() {
    return (
      <div>
        <Searcharticles/>
        <Results/>
      </div>
    );
  }

};

export default Articles;
