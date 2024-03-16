import { useEffect, useState } from "react";
import { Button, Modal } from "flowbite-react";
import CardComponent from "./componenet/CardComponent";
import FormCreateProduct from "./componenet/FormCreateProduct";

type Status = "idle" | "loading" | "success" | "error";
type Product = {
  readonly id: 1;
  title: "...";
  price: "...";
  category: "...";
  description: "...";
  image: "...";
};

function App() {
  const [products, setProducts] = useState<Product[]>([]);
  const [status, setStatus] = useState<Status>("idle");
  const [openModal, setOpenModal] = useState(false);
  useEffect(() => {
    setStatus("loading");
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setStatus("success");
      })
      .catch((err) => {
        setStatus("error");
      });
  }, []);
  if (status === "loading") {
    return (
      <div className="h-screen grid place-content-center">
        <h1 className="text-6xl"> Loading</h1>
      </div>
    );
  }
  function getDataForm(product:any){
    console.log(product)
  }
  return (
    <>
      <div className="flex justify-center">
        <Button onClick={() => setOpenModal(true)}>Create Product</Button>
      </div>

      <div className=" mx-16 grid grid-flow-row grid-cols-4 gap-4">
        {products.map((product) => (
          <CardComponent
            key={product.id}
            title={product.title}
            image={product.image}
            price={product.price}
          />
        ))}
      </div>
      
      {/* modal */}
      <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>Create Product</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
          <FormCreateProduct getDataForm ={getDataForm}/>
          
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => setOpenModal(false)}>Create</Button>
          <Button color="gray" onClick={() => setOpenModal(false)}>
            Clear
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default App;
