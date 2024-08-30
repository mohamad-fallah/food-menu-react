import React, { useState } from 'react';
import menu from './data';
import Categories from './Components/Categories';
import Menu from './Components/Menu';

const allCategories = ["all",...new Set(menu.map(menu => menu.category))]

function App() {  

  const [allMenus, setAllMenus] = useState(menu)
  const [categories, setCategories] = useState(allCategories)

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
        <Categories categories={categories}/>
        <Menu allMenus={allMenus}/>
      </section>
    </main>
  );
}

export default App;
