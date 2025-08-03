import { Gif } from './Gif';
export const GridGifs = ({ gifs }) => {
  return (
    <div
      className="grid grid-cols-1 
      md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-15 w-full p-5">
      {gifs.map((gif, index) => (
        <Gif key={gif.id} gif={gif} index={index} />
      ))}
    </div>
  );
};
