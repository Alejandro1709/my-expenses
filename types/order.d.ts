export default interface IOrder {
  id: number;
  name: string;
  description: string;
  date: string;
  brand: string;
  image: string;
  category: string;
  price: number;
  quantity: number;
  currency: string;
  total: number;
}
