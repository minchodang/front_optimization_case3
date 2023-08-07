interface Props {
  images: string[];
  bgColor: string;
  title: string;
}

export const ImagesWithTitle = (props: Props) => {
  return (
    <div className="ImagesWithTitle py-20" style={{ backgroundColor: props.bgColor }}>
      <div className="container mx-auto">
        <div className="text-center text-4xl font-semibold text-gray-800 mb-3">{props.title}</div>
        {props.images.map((img) => (
          <div key={img}>
            <img src={img} className="w-full lg:w-9/12 mx-auto" alt="title" />
          </div>
        ))}
      </div>
    </div>
  );
};
