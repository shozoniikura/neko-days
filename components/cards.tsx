import Image from "next/image";

const Cards = () => {
  return (
    <div className="flex flex-wrap -mx-4">

      <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 px-4 mb-4">
        <Image src="https://placekitten.com/400/400" width={400} height={400} alt="Image 1" className="w-full h-auto rounded" />
      </div>

      <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 px-4 mb-4">
        <Image src="https://placekitten.com/401/401" width={400} height={400} alt="Image 2" className="w-full h-auto rounded" />
      </div>

      <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 px-4 mb-4">
        <Image src="https://placekitten.com/402/402" width={400} height={400} alt="Image 3" className="w-full h-auto rounded" />
      </div>

      <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 px-4 mb-4">
        <Image src="https://placekitten.com/403/403" width={400} height={400} alt="Image 4" className="w-full h-auto rounded" />
      </div>

      <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 px-4 mb-4">
        <Image src="https://placekitten.com/404/404" width={400} height={400} alt="Image 5" className="w-full h-auto rounded" />
      </div>

      <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 px-4 mb-4">
        <Image src="https://placekitten.com/405/405" width={400} height={400} alt="Image 6" className="w-full h-auto rounded" />
      </div>

      <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 px-4 mb-4">
        <Image src="https://placekitten.com/406/406" width={400} height={400} alt="Image 7" className="w-full h-auto rounded" />
      </div>

      <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 px-4 mb-4">
        <Image src="https://placekitten.com/407/407" width={400} height={400} alt="Image 8" className="w-full h-auto rounded" />
      </div>

      <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 px-4 mb-4">
        <Image src="https://placekitten.com/408/408" width={400} height={400} alt="Image 9" className="w-full h-auto rounded" />
      </div>

      <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 px-4 mb-4">
        <Image src="https://placekitten.com/409/409" width={400} height={400} alt="Image 10" className="w-full h-auto rounded" />
      </div>

    </div>
  );
};

export default Cards;
