import React, { useState } from 'react';

function Form() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        number: '',
        notes: '',
        repeat: false,
      });
      
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        const newValue = type === 'checkbox' ? checked : value;
        setFormData({ ...formData, [name]: newValue });
      };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        alert("Succes");
      };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Ad: <br />
        <input
          type="text"
          placeholder="Adinizi daxil edin:"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        Soyad: <br />
        <input
          type="text"
          placeholder="Soyadinizi daxil edin:"
          name="soyad"
          value={formData.soyad}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        Mail: <br />
        <input
          type="email"
          placeholder="Emailiniz daxil edin: "
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </label>

      <label>
        Elaqe: <br />
        <input
          type="number"
          placeholder="Elaqe nomresi daxil edin:"
          name="number"
          value={formData.number}
          onChange={handleChange}
        />
      </label>

      <textarea
        name="notes"
        value={formData.notes}
        onChange={handleChange}
        cols="10"
        rows="10"
       />

      <button type="submit">Gonder</button>

    </form>
  )
}

export default Form;