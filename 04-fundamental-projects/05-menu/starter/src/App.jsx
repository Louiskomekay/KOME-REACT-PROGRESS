import { useState } from "react";
import Title from "./Title";
import menu from './data'
import Menu from "./Menu";
import Categories from "./Categories";

const allCategories = ['all', ...Array.from(new Set(menu.map((item) => item.category)))];

const App = () => {
  const [menuItems, setMenuItems] = useState(menu);
  const [categories, setCategories] = useState(allCategories);
  console.log(categories);
  const filterItems = (category) => {
    if (category !== 'all') {
      const newItems = menu.filter((item) => item.category === category);
      setMenuItems(newItems);
    } else { setMenuItems(menu) }
  }

  return <main>
    <section className="menu">
      <Title text='Our Menu' />
      <Categories categories={categories} filterItems={filterItems} />
      <Menu items={menuItems} />
    </section>
  </main>;
};
export default App;
