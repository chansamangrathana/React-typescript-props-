import { Button, Label, TextInput, Textarea } from "flowbite-react";
import { useEffect, useState } from "react";
type ErrorType = {
  title: string;
  price: string;
};

export default function FormCreateProduct({ getDataForm}: any) {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("elelct");
  const [image, setImage] = useState("JIMIN");

  const [error, setError] = useState<ErrorType>({
    title: "",
    price: "",
  });
  //validation
  useEffect(() => {
    if (title.length < 3) {
      setError((prev) => {
        console.log(prev);
        return {
          ...prev,
          title: "Title must be at least 3 charaters",
        };
      });
    } else {
      setError((prev) => {
        console.log(prev);
        return {
          ...prev,
          title: "",
        };
      });
    }
    if (price < 0) {
      setError((prev) => {
        console.log(prev);
        return {
          ...prev,
          price: "Price must be greater than 0",
        };
      });
    } else {
      setError((prev) => {
        console.log(prev);
        return {
          ...prev,
          price: "",
        };
      });
    }
  }, [title, price]);

  useEffect(()=>{
    getDataForm({title,price,description,category,image})
  
  },[title,price,description,category,image])
  return (
    <form className="flex max-w-md flex-col gap-4">
      <div>
        <div className="mb-2 block">
          <Label htmlFor="Title" value="Product Title" />
        </div>
        <TextInput
          id="Title"
          type="text"
          placeholder="Apple pro😎"
          required
          onChange={(e) => setTitle(e.target.value)}
        />
        {error.title && <p className="text-red-500">{error.title}</p>}
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="price" value="Product Price " />
        </div>
        <TextInput
          id="price"
          type="number"
          required
          onChange={(e) => setPrice(parseFloat(e.target.value))}
        />
        {error.price && <p className="text-red-500">{error.price}</p>}
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="description" value="Product Description" />
        </div>
        <Textarea
          id="description"
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div></div>
    </form>
  );
}
