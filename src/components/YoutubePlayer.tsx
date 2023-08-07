interface Props {
  id: string;
}

export const YoutubePlayer = (props: Props) => {
  return (
    <div className="relative pb-16:9 h-0">
      <iframe
        className="absolute top-0 left-0 w-full h-full"
        src={`https://www.youtube.com/embed/${props.id}`}
        frameBorder="0"
        title="ss"
      />
    </div>
  );
};
