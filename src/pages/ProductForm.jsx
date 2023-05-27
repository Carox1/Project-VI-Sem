import React, { useState } from 'react';

const ProductForm = () => {
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [isVaccinated, setIsVaccinated] = useState(false);
  const [isNeutered, setIsNeutered] = useState(false);
  const [category, setCategory] = useState('');
  const [color, setColor] = useState('');
  const [age, setAge] = useState('');
  const [weight, setWeight] = useState('');
  const [dose, setDose] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Log all the form values
    console.log({
      price,
      image,
      title,
      description,
      isVaccinated,
      isNeutered,
      category,
      color,
      age,
      weight,
      dose,
    });
    // Reset the form
    setPrice('');
    setImage('');
    setTitle('');
    setDescription('');
    setIsVaccinated(false);
    setIsNeutered(false);
    setCategory('');
    setColor('');
    setAge('');
    setWeight('');
    setDose('');
  };

  const handleCategoryChange = (e) => {
    const selectedCategory = e.target.value;
    setCategory(selectedCategory);

    // Reset the fields based on the selected category
    setColor('');
    setAge('');
    setWeight('');
    setDose('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Price:
        <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} />
      </label>
      <br />
      <label>
        Image:
        <input type="text" value={image} onChange={(e) => setImage(e.target.value)} />
      </label>
      <br />
      <label>
        Title:
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      </label>
      <br />
      <label>
        Description:
        <textarea value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
      </label>
      <br />
      <label>
        Vaccinated:
        <input type="checkbox" checked={isVaccinated} onChange={(e) => setIsVaccinated(e.target.checked)} />
      </label>
      <br />
      <label>
        Neutered:
        <input type="checkbox" checked={isNeutered} onChange={(e) => setIsNeutered(e.target.checked)} />
      </label>
      <br />
      <label>
        Category:
        <select value={category} onChange={handleCategoryChange}>
          <option value="">Select a category</option>
          <option value="dog">Dog</option>
          <option value="food">Food</option>
          <option value="medicine">Medicine</option>
        </select>
      </label>
      <br />

      {category === 'dog' && (
        <>
          <label>
            Color:
            <input type="text" value={color} onChange={(e) => setColor(e.target.value)} />
          </label>
          <br />
          <label>
            Age:
            <input type="text" value={age} onChange={(e) => setAge(e.target.value)} />
          </label>
          <br />
        </>
      )}

      {category === 'food' && (
        <>
          <label>
            Weight:
            <input type="text" value={weight} onChange={(e) => setWeight(e.target.value)} />
          </label>
          <br />
        </>
      )}

      {category === 'medicine' && (
        <>
          <label>
            Dose:
            <input type="text" value={dose} onChange={(e) => setDose(e.target.value)} />
          </label>
          <br />
        </>
      )}

      <button type="submit">Submit</button>
    </form>
  );
};

export default ProductForm;
