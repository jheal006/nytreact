import React from "react";
import { Col, Row, Container } from "../../components/Grid";

// RecipeList renders a bootstrap list item
export const ResultList = props => <ul className="list-group">{props.children}</ul>;
