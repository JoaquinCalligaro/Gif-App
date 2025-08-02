import { Gif } from './Gif';
export const GridGifs = ({ gifs }) => {
  return (
    <div className="grid grid-cols-3 gap-11 w-full p-5">
      {gifs.map((gif) => (
        <Gif key={gif.id} gif={gif} />
      ))}
    </div>
  );
};
