import { Col, Row } from "react-bootstrap";
import { ThreeDots } from "react-loader-spinner";

const DotLoader = () => {
  return (
    <>
      <Row className=" justify-center">
        <Col md={12} className="d-flex justify-content-center  items-center">
          <ThreeDots
            visible={true}
            height="100"
            width="100"
            color="#475569"
            radius="9"
            ariaLabel="three-dots-loading"
          />
        </Col>
      </Row>
    </>
  );
};

export default DotLoader;
