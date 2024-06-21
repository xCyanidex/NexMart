import {Row,Col} from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import Product from '../components/Product';
import Message from '../components/Message';
import Paginate from '../components/paginate.jsx';
import ProductCarousel from '../components/ProductCarousel.jsx';
import { useGetProductsQuery } from '../slices/productsApiSlice.js';
import DotLoader from '../components/DotLoader.jsx';
import { Suspense } from 'react';


const HomeScreen = () => {
const { pageNumber,keyword } = useParams();
const {data,isLoading,error}=useGetProductsQuery({keyword,pageNumber});
console.log(data);

  return (
    <>
      <Suspense fallback={<DotLoader />}>
      {!keyword ? (
        <ProductCarousel />
      ) : (
        <Link to="/" className="btn btn-light mb-4">
          Go Back
        </Link>
      )}
      {isLoading ? (
        //  <Loader/>
        <DotLoader/>
      ) : error ? (
        <Message variant="danger">
          {error?.data?.message || error.error}
        </Message>
      ) : (
        <>
          <h1>Latest Products</h1>
          <Row>
          {data.products.map((product) => (
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <Product product={product} />
            </Col>
            ))}
            </Row>
            <Paginate
            pages={data.pages}
            page={data.page}
            keyword={keyword ? keyword : ""}
            />
        </>
      )}
      </Suspense>
    </>
  );
}

export default HomeScreen