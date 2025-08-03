import React from 'react';
import { useState } from 'react';

export default function useSearchGifs() {
  const [valorInput, setValorInput] = useState('');
  const [gifs, setGifs] = useState([]);
  const [loader, setloader] = useState(false);
  const onChange = (evento) => {
    const valor = evento.target.value;
    setValorInput(valor);
  };

  const getFigs = async (query) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${
      import.meta.env.VITE_GIPHY_API_KEY
    }&q=${query}`;
    setloader(true);
    await new Promise((resolve) => {
      setTimeout(() => {
        resolve(true);
      }, 5000);
    });
    const response = await fetch(url);
    const data = await response.json();
    setloader(false);
    return data.data;
  };

  const onSubmit = async (evento) => {
    evento.preventDefault();
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
  };
}
