import {Product} from "../../assets/data/product";

interface UserInterface {
  id: number;
  name: string;
  email: string;
  password: string;
}

interface TokenResponseInterface {
  access: string;
  refresh: string;
  user: UserInterface
}

export {TokenResponseInterface, UserInterface}
