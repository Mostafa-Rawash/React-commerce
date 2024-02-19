import React from "react";
import { Button, Container, InputGroup , Form ,Dropdown,DropdownButton } from "react-bootstrap";


const Banner = () => {
  const title = "Search Your Pne From Thousand of Products";

  return (

      <Container>
        <h2>{title}</h2>
        <input type="text" />

        <InputGroup className="mb-3">
        <DropdownButton
          variant="outline-secondary"
          title="Dropdown"
          id="input-group-dropdown-1"
        >
          <Dropdown.Item href="#">Action</Dropdown.Item>
          <Dropdown.Item href="#">Another action</Dropdown.Item>
          <Dropdown.Item href="#">Something else here</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item href="#">Separated link</Dropdown.Item>
        </DropdownButton>
        <Form.Control aria-label="Text input with dropdown button" />
      </InputGroup>

      </Container>
  );
}

export default Banner;
