import React from "react";
import styled from "styled-components";
import PhotoElem from "./PhotoElem/PhotoElem";

const Container = styled.div`
  display: flex;
  column-gap: 40px;
`;

const PhotoList = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 40px;
`;

const MainPhoto = styled.img`
  width: 610px;
  height: 511px;
  object-fit: contain;
`;

class Gallery extends React.Component {
  constructor(props) {
    super(props);

    this.state = { photos: props.data, current: props.data[0] };
  }

  changeCurrent = (photo) => {
    this.setState((prev, props) => ({
      ...prev,
      current: photo,
    }));
  };

  render() {
    return (
      <Container>
        <PhotoList>
          {this.state.photos.map((elem) => (
            <PhotoElem key={elem} src={elem} onHover={this.changeCurrent} />
          ))}
        </PhotoList>
        <MainPhoto src={this.state.current} />
      </Container>
    );
  }
}

export default Gallery;
