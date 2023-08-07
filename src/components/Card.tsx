interface Props {
  image: string;
  children: React.ReactNode;
}

export const Card = (props: Props) => {
  return (
    <div className="Card text-center">
      <img src={props.image} alt="card" />
      <div className="p-5 font-semibold text-gray-700 text-xl md:text-lg lg:text-xl keep-all">
        {props.children}
      </div>
    </div>
  );
};
