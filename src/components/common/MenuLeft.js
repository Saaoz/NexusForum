import React from 'react';
import '../../styles/MenuLeft.css'; // Assurez-vous de créer ce fichier CSS.
import SearchBar from './SearchBar';
import RootedTime from './RootedTime';

const MenuLeft = ({ categories }) => {


  return (
    <div className="menu-left">
      <SearchBar/>
      <CategoryList categories={categories} filter={SearchBar} />
    </div>
  );
}



const CategoryList = ({ categories, filter }) => {
  return (
    <ul className="category-list">
      <RootedTime/>
    </ul>
  );
}

export default MenuLeft;
