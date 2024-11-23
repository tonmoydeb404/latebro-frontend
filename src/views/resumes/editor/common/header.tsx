type Props = {
  title: string;
  description: string;
} & JSX.IntrinsicElements["div"];

const Header = (props: Props) => {
  const { description, title, ...others } = props;
  return (
    <div {...others}>
      <h2 className="text-xl font-bold">{title}</h2>
      <p className="text-sm">{description}</p>
    </div>
  );
};

export default Header;