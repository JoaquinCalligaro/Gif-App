import { useState } from 'react';
import { Search } from './Search';
import { GridGifs } from './GridGifs';
import { BackgroundGradientAnimation } from '../src/Background';
function App() {
  const [valorInput, setValorInput] = useState('');
  const [gifs, setGifs] = useState([]);

  const onChange = (evento) => {
    const valor = evento.target.value;
    setValorInput(valor);
  };

  const getFigs = async (query) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${
      import.meta.env.VITE_GIPHY_API_KEY
    }&q=${query}`;
    const response = await fetch(url);
    const data = await response.json();
    return data.data;
  };

  const onSubmit = async (evento) => {
    evento.preventDefault();
    const gifs = await getFigs(valorInput);
    console.log(gifs);
    setGifs(gifs);
  };

  getFigs();
  return (
    <div className="min-h-screen relative">
      <BackgroundGradientAnimation />
      <Search valorInput={valorInput} onChange={onChange} onSubmit={onSubmit} />
      <GridGifs gifs={gifs} />
    </div>
  );
}
export default App;
