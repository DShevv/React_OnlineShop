import React from "react";
import styled from "styled-components";

const Container = styled.img`
  width: 80px;
  height: 80px;
  object-fit: contain;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

class PhotoElem extends React.Component {
  render() {
    return (
      <Container
        ref={this.image}
        src={this.props.src}
        onMouseOver={(e) => {
          this.props.onHover(this.props.src);
        }}
      ></Container>
    );
  }
}

export default PhotoElem;
