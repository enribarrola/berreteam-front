import React, { useState } from 'react';

export default function CountryCreateView() {
  const [datos, setDatos] = useState({
    iso: '',
    name: '',
    nice_name: '',
    iso3: '',
    num_code: '',
    phone_code: '',
  });

  const handleInputChange = (e) => {
    setDatos({
      ...datos,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const endpoint = 'http://181.94.114.44:8080/country/save';

      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
		  'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify(datos)
      });

      if (response.ok) {
        const responseData = await response.json();
        console.log('Datos enviados correctamente:', responseData);
      } else {
        console.error('Error al enviar los datos:', response.statusText);
      }

    } catch (error) {
      console.error('Error al enviar los datos:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
	  iso:
        <input
          type="text"
          name="iso"
          value={datos.iso}
          onChange={handleInputChange}
        />
      </label>

      <label>
	  name:
        <input
          type="text"
          name="name"
          value={datos.name}
          onChange={handleInputChange}
        />
      </label>

      <label>
	  nice_name:
        <input
          type="text"
          name="nice_name"
          value={datos.nice_name}
          onChange={handleInputChange}
        />
      </label>

      <label>
	  iso3:
        <input
          type="text"
          name="iso3"
          value={datos.iso3}
          onChange={handleInputChange}
        />
      </label>

      <label>
	  num_code:
        <input
          type="text"
          name="num_code"
          value={datos.num_code}
          onChange={handleInputChange}
        />
      </label>

      <label>
	  phone_code:
        <input
          type="text"
          name="phone_code"
          value={datos.phone_code}
          onChange={handleInputChange}
        />
      </label>

      <button type="submit">Enviar</button>
    </form>
  );
}