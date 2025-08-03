import React from 'react';
import { useState } from 'react';

export default function useSearchGifs() {
  const [valorInput, setValorInput] = useState('');
  const [gifs, setGifs] = useState([]);
  const [loader, setloader] = useState(false);
  const [error, setError] = useState(false);
  const onChange = (evento) => {
    const valor = evento.target.value;
    setValorInput(valor);
  };

  const getFigs = async (query) => {
    try {
      let url = `https://api.giphy.com/v1/gifs/search?api_key=${
        import.meta.env.VITE_GIPHY_API_KEY
      }&q=${query}`;
      setloader(true);
      await new Promise((resolve) => {
        setTimeout(() => {
          resolve(true);
        }, 1500);
      });

      let response = await fetch(url);
      if (!response.ok) {
        //Si falla intenta con la API Key secundaria
        url = `https://api.giphy.com/v1/gifs/search?api_key=${
          import.meta.env.VITE_GIPHY_API_KEY_BACKUP
        }&q=${query}`;
        response = await fetch(url);
      }
      const data = await response.json();

      //Aqui verifica si el array de GIFs esta vacio

      if (data.data.length === 0) {
        setError(true); // Marca el error como verdadero
        setloader(false);
        return [];
      }
      setloader(false);
      return data.data;
    } catch (error) {
      console.log('Error fetching GIFS:', error);
      setError(true);
      setloader(false);
      return [];
    }
  };

  const onSubmit = async (evento) => {
    evento.preventDefault();
    setError(false);
    const gifs = await getFigs(valorInput);
    console.log(gifs);
    setGifs(gifs);
  };

  return {
    valorInput,
    onChange,
    onSubmit,
    gifs,
    loader,
    error,
  };
}
