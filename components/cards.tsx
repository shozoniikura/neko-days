import Card from "./card";
import { glob } from "glob";

const shuffle = (array: string[]) => {
  return [].concat(array).sort((a, b) => 0.5 - Math.random());
};

const getPictures = async() => {
  return await getPicturesNew();
};

const getPicturesNew = async() => {
  const pictures = new Array(10);
  const userImgsA = await glob('./public/images/*');
  const userImgsB = userImgsA.map((img: string)=>img.replace(/^public/, ''));
  const userImgs = shuffle(userImgsB);
  for (let i=0; i<pictures.length; i++) {
    pictures[i] = userImgs[i % userImgs.length];
  }

  return pictures;
};

const getPicturesOld = () => {
  const pictures = new Array(10);
  for (let i=0; i<pictures.length; i++) {
    const w = Math.floor(Math.random() * 40 + 20) * 10;
    const h = Math.floor(Math.random() * 40 + 20) * 10;
    pictures[i] = `https://placekitten.com/${w}/${h}`;
  }

  return pictures;
}

const Cards = async() => {
  const pictures = await getPictures();
  return (
    <div className="grid gap-2 grid-cols-2 md:grid-cols-4">

      {pictures.map((pic, idx) => (
        <Card idx={idx} picture={pic} />
      ))}

    </div>
  );
};

export default Cards;
