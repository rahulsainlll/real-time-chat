import Image from "next/image";

type Props = {
  size?: number;
};

const LoadingLogo = ({ size = 100 }: Props) => {
  return (
    <div className="h-full w-full flex justify-center items-center">
      <Image
        src="/logo3.svg"
        alt="logo"
        width={size}
        height={size}
        className="animate-pulse h-10 duration-800"
      />
    </div>
  );
};

export default LoadingLogo;

//  tsrafce
