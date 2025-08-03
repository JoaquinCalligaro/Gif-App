import { Search } from './Search';
import { GridGifs } from './GridGifs';
import { BackgroundGradientAnimation } from '../src/Background';
import useSearchGifs from './useSearch';
import { LoaderComponent } from './Loader';

function App() {
  //estado
  const { valorInput, onChange, onSubmit, gifs, loader } = useSearchGifs();

  return (
    <div className="min-h-screen relative">
      <BackgroundGradientAnimation />
      <Search valorInput={valorInput} onChange={onChange} onSubmit={onSubmit} />
      {loader ? (
        <div className="flex justify-center items-center min-h-[50vh]">
          <LoaderComponent />
        </div>
      ) : (
        <GridGifs gifs={gifs} />
      )}
    </div>
  );
}
export default App;
