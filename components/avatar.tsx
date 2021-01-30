type Props = {
  name: string;
  picture: string;
  right?: boolean;
};

const Avatar = ({ name, picture, right }: Props) => {
  return (
    <div className={`flex items-center ${right ? 'float-right' : null}`}>
      <img src={picture} className="w-12 h-12 mr-4 rounded-full" alt={name} />
      <div className="text-xl font-bold">{name}</div>
    </div>
  );
};

export default Avatar;
