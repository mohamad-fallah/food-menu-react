import React, { useState } from 'react';
import menu from './data';
import Categories from './Components/Categories';
import Menu from './Components/Menu';

const allCategories = ["all",...new Set(menu.map(menu => menu.category))]

function App() {  

  const [allMenus, setAllMenus] = useState(menu)
  const [categories, setCategories] = useState(allCategories)

  const filterMenus = (category) => {
    if (category === "all") {
      setAllMenus(menu)
      return
    }

    let filterMenus = menu.filter(menu => menu.category === category)
    setAllMenus(filterMenus)

  }

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
        <Categories categories={categories} filterMenus={filterMenus}/>
        <Menu allMenus={allMenus}/>
      </section>
    </main>
  );
}

export default App;
