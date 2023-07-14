export default interface IProduct extends Document {
  image: string;
  name: string;
  categoryId: string;
  price: number;
  description: string;
}
