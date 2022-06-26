import React from "react";
import styled from "styled-components";
import { Query } from "@apollo/client/react/components";
import withRouter from "../../utils/withRouter";
import { GET_DETAILS } from "../../queries/queries";
import Gallery from "./Gallery/Gallery";
import Caption from "./Caption/Caption";

const Container = styled.div`
  width: 100%;
  padding-bottom: 100px;
  margin-top: 80px;
  display: flex;
  column-gap: 100px;
`;

class Details extends React.Component {
  render() {
    const params = this.props.params;
    return (
      <Query query={GET_DETAILS} variables={{ id: params.id }}>
        {({ loading, error, data }) => {
          if (error) return <div>Error</div>;
          if (loading || !data) return <div>Loading..</div>;
          return (
            <Container>
              <Gallery data={data.product.gallery} />
              <Caption data={data.product} />
            </Container>
          );
        }}
      </Query>
    );
  }
}
const DetailsWithRouter = withRouter(Details);
export default DetailsWithRouter;
