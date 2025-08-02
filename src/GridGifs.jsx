import { Gif } from './Gif';
export const GridGifs = ({ gifs }) => {
  return (
    <div className="gifs">
      {gifs.map((gif) => (
        <Gif key={gif.id} gif={gif} />
      ))}
    </div>
  );
};
