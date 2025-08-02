export const Gif = ({ gif }) => {
  return (
    <img
      className="gif-item"
      key={gif.id}
      src={gif.images.original.url}
      alt={gif.title}
    />
  );
};
