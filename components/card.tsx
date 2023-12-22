import { CardType } from "@/app/types";
import Image from "next/image";


const Card = ({ idx, picture }: CardType) => {
  return (
    <div key={idx} className="w-full">
      <Image src={picture} width={200} height={200} alt={`Image ${idx+1}`} className="w-full h-auto rounded" />
    </div>
  );
};

export default Card;
