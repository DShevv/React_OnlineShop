import { useParams } from "react-router";

const withRouter = (Component) => (props) => {
  const params = useParams();

  return <Component {...props} params={params} />;
};

export default withRouter;
