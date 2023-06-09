import { useState } from "react";
import styles from "../styles/productForm.module.css";
import { API } from "aws-amplify";

const ProductForm = () => {
  const [price, setPrice] = useState(0);
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [vendor, setVendor] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("Accessories");
  const [color, setColor] = useState("");
  const [age, setAge] = useState("");
  const [weight, setWeight] = useState("");
  const [dose, setDose] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const myInit = {
      body: {
        title: title,
        price: price,
        img: image,
        desc: description,
        category: category,
        vendor: vendor,
        dose: dose,
        weight: weight,
        color: color,
        age: age,
      },
    };

    console.log(myInit.body)
    API.post("petPartnerAPI", "/products", myInit)
  .then((response) => {
    console.log(myInit);
    console.log(response)
  })
  .catch((error) => {
    console.log(error.response);
  });

    // Reset the form
    setPrice(0);
    setImage("");
    setTitle("");
    setDescription("");
    setVendor("");
    setCategory("");
    setColor("");
    setAge("");
    setWeight("");
    setDose("");
  };

  const handleCategoryChange = (e) => {
    const selectedCategory = e.target.value;
    setCategory(selectedCategory);

    // Reset the fields based on the selected category
    setColor("");
    setAge("");
    setWeight("");
    setDose("");
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.inputElement}>
        <label className={styles.label}>Title:</label>
        <input
          className={styles.input}
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className={styles.inputElement}>
        <label className={styles.label}>Price:</label>
        <input
          className={styles.input}
          type="number"
          value={price}
          onChange={(e) => setPrice(parseInt(e.target.value))}
        />
      </div>
      <div className={styles.inputElement}>
        <label className={styles.label}>Vendor:</label>
        <input
          className={styles.input}
          type="text"
          value={vendor}
          onChange={(e) => setVendor(e.target.value)}
        />
      </div>
      <div className={styles.inputElement}>
        <label className={styles.label}>Image:</label>
        <input
          className={styles.input}
          type="text"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
      </div>
      <div className={styles.inputElement}>
        <label className={styles.label}>Description:</label>
        <textarea
          className={styles.textArea}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
      </div>

      <div className={styles.inputElement}>
        <label className={styles.label}>Category:</label>
        <select
          className={styles.select}
          value={category}
          onChange={handleCategoryChange}
        >
          <option className={styles.option} value="">
            Select a category
          </option>
          <option className={styles.option} value="Dog">
            Dog
          </option>
          <option className={styles.option} value="Food">
            Food
          </option>
          <option className={styles.option} value="Medicine">
            Medicine
          </option>
          <option className={styles.option} value="Accessories">
            Accessories
          </option>
        </select>
      </div>

      {category === "Dog" && (
        <>
          <div className={styles.inputElement}>
            <label className={styles.label}>Color:</label>
            <input
              className={styles.input}
              type="text"
              value={color}
              onChange={(e) => setColor(e.target.value)}
            />
          </div>
          <div className={styles.inputElement}>
            <label className={styles.label}>Age:</label>
            <input
              className={styles.input}
              type="text"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </div>
        </>
      )}

      {category === "Food" && (
        <>
          <div className={styles.inputElement}>
            <label className={styles.label}>Weight:</label>
            <input
              className={styles.input}
              type="text"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>
        </>
      )}

      {category === "Medicine" && (
        <>
          <div className={styles.inputElement}>
            <label className={styles.label}>Dose:</label>
            <input
              className={styles.input}
              type="text"
              value={dose}
              onChange={(e) => setDose(e.target.value)}
            />
          </div>
        </>
      )}

      <button type="submit" className={styles.button}>
        Submit
      </button>
    </form>
  );
};

export default ProductForm;
