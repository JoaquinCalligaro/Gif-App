import { Gif } from './Gif';
export const GridGifs = ({ gifs }) => {
  return (
    <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-11 w-full p-5">
      {gifs.map((gif, index) => (
        <Gif key={gif.id} gif={gif} index={index} />
      ))}
    </div>
  );
};
