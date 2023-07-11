type Props = {
  params: { category: string };
};
const page = ({ params: { category } }: Props) => {
  return <div>{category}</div>;
};
export default page;
