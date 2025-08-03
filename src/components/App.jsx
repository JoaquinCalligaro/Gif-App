import { Search } from './Search';
import { GridGifs } from './GridGifs';
import { BackgroundGradientAnimation } from './Background';
import useSearchGifs from '../hooks/useSearch';
import { LoaderComponent } from './Loader';
import { ErrorMessage } from './ErrorMessage';

function App() {
  //estado
  const { valorInput, onChange, onSubmit, gifs, loader, error } =
    useSearchGifs();

  return (
    <div className="min-h-screen relative">
      <BackgroundGradientAnimation />
      <Search valorInput={valorInput} onChange={onChange} onSubmit={onSubmit} />
      {error && <ErrorMessage />}
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
