import { useEffect, useState } from "react";
import { Button } from "flowbite-react";
import CardComponent from "./componenet/CardComponent";

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

  return (
    <>
      
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
    </>
  );
}

export default App;
