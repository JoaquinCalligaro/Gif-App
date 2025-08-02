export const Gif = ({ gif }) => {
  return (
    <img
      className="w-4/5 h-62 rounded-lg object-cover  animate-zoom-in duration-1000 delay-1000"
      key={gif.id}
      src={gif.images.original.url}
      alt={gif.title}
    />
  );
};
