interface Props {
  image: string;
  text: string;
}

export const BannerImage = (props: Props) => {
  return (
    <div className="BannerImage w-full h-screen overflow-hidden relative bg-texture">
      <div className="absolute h-screen w-full left-1/2">
        <img
          src={props.image}
          className="absolute translateX--1/2 h-screen max-w-none min-w-full -z-1"
          alt="images"
        />
      </div>
      <div className="w-full h-full flex justify-center items-center">
        <div className="text-white text-center">
          <div className="text-6xl leading-none font-semibold">{props.text}</div>
        </div>
      </div>
    </div>
  );
};
