import React, { Component } from 'react'
import {
  Row, Col, FormGroup, Label, Input, FormText,
} from 'reactstrap';
export default class OurInput extends Component {
  state = {
    onChange: this.props.onChange,
    onBlur: this.props.onBlur,
    onKeyPress: this.props.handleKeyPress,
  }
  render() {
    const { label, type, name, placeholder, error, value } = this.props;
    const { onChange, onBlur } = this.state;
    return (
      <Row>
        <Col>
          <FormGroup>
            <Label>{label}</Label>
            <Input
              value={value}
              type={type}
              name={name}
              placeholder={placeholder}
              onChange={onChange}
              onBlur={onBlur}
            />
            {
              error
              && (
                <FormText color="danger">
                  {error}
                </FormText>
              )
            }
          </FormGroup>
        </Col>
      </Row>
    )
  }
}
