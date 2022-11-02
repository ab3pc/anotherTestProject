import { Footer } from "./common/components/footer/footer.components";
import { Header } from "./common/components/header/header.component";
import { MenuList } from "./modules/menu/components/menu-list/menu-list.component";

import mockPizzas from './moks/pizza.json';

const App = () => {
  return (
    <div>
      <Header/>
      <div className="mx-12 mb-24">
      <MenuList items={mockPizzas}/>

      </div>
      <Footer/>
    </div>
  );
}

export { App };
