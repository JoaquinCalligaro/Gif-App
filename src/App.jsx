import { Search } from './Search';
import { GridGifs } from './GridGifs';
import { BackgroundGradientAnimation } from '../src/Background';
import useSearchGifs from './useSearch';
function App() {
  //estado
  const { valorInput, onChange, onSubmit, gifs, isLoading } = useSearchGifs();

  return (
    <div className="min-h-screen relative">
      <BackgroundGradientAnimation />
      <Search valorInput={valorInput} onChange={onChange} onSubmit={onSubmit} />
      {isLoading ? (
        <h2 className="text-white font-sans">Loading...</h2>
      ) : (
        <GridGifs gifs={gifs} />
      )}
    </div>
  );
}
export default App;
