import { LinkContainer } from "react-router-bootstrap";
import { Table, Button,Row,Col} from "react-bootstrap";
import {FaEdit,FaTrash } from "react-icons/fa";
import Message from "../../components/Message";
import Loader from "../../components/Loader";
import { useGetProductsQuery,useCreateProductMutation} from "../../slices/productsApiSlice";
import {toast} from 'react-toastify'

const ProductListScreen = () => {

    const { data: products, isLoading, error,refetch } = useGetProductsQuery();
    const [createProduct,{isLoading:loadingCreate}]=useCreateProductMutation();
    const deleteHandler=(id)=>{
console.log(id)
    }

    const createProductHandler= async ()=>{
if(window.confirm('Are you sure you want to create a new product?'))
  {
try {
  await createProduct();
  refetch();
} catch (err) {
  toast.error(err?.data?.message || err.error)
}
}
    }
  return (
    <>
      <Row className="items-center">
        <Col>
          <h1 className="h1">Products</h1>
        </Col>
        <Col className="  text-end">
          <Button className="btn-sm-3 m-3" onClick={createProductHandler}>
            <FaEdit /> Create Product
          </Button>
        </Col>
      </Row>
{loadingCreate && <Loader/>}
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Table striped hover responsive className="table-sm">
          <thead>
            <tr>
              <td>ID</td>
              <td>NAME</td>
              <td>PRICE</td>
              <td>CATEGORY</td>
              <td>BRAND</td>
              <td></td>
            </tr>
          </thead>
          <tbody>
            {products.map((product)=>(
                <tr key={product._id}>
                  <td>{product._id}</td>
                  <td>{product.name}</td>
                  <td>{product.price}</td>
                  <td>{product.category}</td>
                  <td>{product.brand}</td>
                  <td>
                    <LinkContainer to={`/admin/product/${product._id}/edit`}>
                    <Button className="btn-sm mx-2" variant="light">
                        <FaEdit/>
                        </Button>
                    </LinkContainer>
                    <Button variant="danger" className="btn-sm bg-[red]" onClick={()=>deleteHandler(product._id)}>
                        <FaTrash style={{color:"white"}}/>
                    </Button>
                  </td>
                </tr>
            ))}
          </tbody>
        </Table>
      )}
    </>
  );
};

export default ProductListScreen;
