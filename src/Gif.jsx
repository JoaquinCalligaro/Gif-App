export const Gif = ({ gif }) => {
  return (
    <img
      className="w-4/5 h-52 rounded-lg object-cover"
      key={gif.id}
      src={gif.images.original.url}
      alt={gif.title}
    />
  );
};
