import Image from "next/image";

const Header = () => {
  return (
    <header className="sticky top-0 bg-gruv-bg-1 border-b-2 border-gruv-orange p-4 text-white">
      <Image
        src="/pp-coco-cropped.jpeg"
        alt="Image of the author"
        width="100"
        height="100"
        className="w-24 rounded-full aspect-square"
      />
    </header>
  );
};

export default Header;
