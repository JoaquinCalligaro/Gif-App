export const Gif = ({ gif, index = 0 }) => {
  const delayMs = index * 200; // Cada GIF tiene 200ms más de delay que el anterior

  return (
    <img
      className="w-4/5 h-62 rounded-lg object-cover animate-expand-vertically delay-1000 duration-1000 "
      style={{ animationDelay: `${delayMs}ms` }}
      key={gif.id}
      src={gif.images.original.url}
      alt={gif.title}
    />
  );
};
