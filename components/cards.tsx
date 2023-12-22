import Card from "./card";

const getPictures = () => {
  const pictures = new Array(10);
  for (let i=0; i<pictures.length; i++) {
    const w = Math.floor(Math.random() * 40 + 20) * 10;
    const h = Math.floor(Math.random() * 40 + 20) * 10;
    pictures[i] = `https://placekitten.com/${w}/${h}`;
  }

  return pictures;
}

const Cards = () => {
  const pictures = getPictures();
  return (
    <div className="grid gap-2 grid-cols-2 md:grid-cols-4">

      {pictures.map((pic, idx) => (
        <Card idx={idx} picture={pic} />
      ))}

    </div>
  );
};

export default Cards;
