
import { Button, Label, TextInput, Textarea } from 'flowbite-react';
import { useEffect, useState } from 'react';
type ErrorType ={
  title: string;
  price: string;

}

export default function FormCreateProduct() {
  const [title,setTitle]= useState("");
  const [price, setPrice]=useState("");
  const [description,setDescription]=useState("");
  const [category,setCategory]=useState("elelct");
  const [image,setImage]=useState("JIMIN");


  const [error,setError]=useState<ErrorType>({
    title:"",
    price:""
  });
  //validation
  useEffect(()=>{
    if(title.length <3){
      setError((prev)=>{
       console.log(prev);
       return prev
        
    });

    }
  },[title,price]);
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
           required  onChange={(e)=>setTitle(e.target.value)}
           />
          
        
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="price" value="Product Price " />
        </div>
        <TextInput id="price" type="number" required />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="description" value="Product Description" />
        </div>
        <Textarea id="description"   />
      </div>
      <div></div>
      
      
    </form>
  );
}
