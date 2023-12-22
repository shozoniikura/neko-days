import { CardType } from "@/app/types";
import Image from "next/image";


const Card = ({ idx, picture }: CardType) => {
  return (
    <div key={idx} className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 px-4 mb-4">
      <Image src={picture} width={200} height={200} alt="Image 1" className="w-full h-auto rounded" />
    </div>
  );
};

export default Card;
