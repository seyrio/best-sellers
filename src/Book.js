const Book = (props) => {
  const { author, title, img, number } = props;
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h1>{title}</h1>
      <h4>{author}r</h4>
      <span className="number">{number + 1}</span>
    </article>
  );
};

export default Book;
