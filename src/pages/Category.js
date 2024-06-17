import React from 'react'
import Header from '../components/common/Header'
import Footer from '../components/common/Footer'
import CategoryCard from '../components/cards/CategoryCard'

import '../styles/Category.css'
import MenuLeft from '../components/common/MenuLeft'

function Category() {
  const categoryData = {
    contentData: [
      {
        title: "Discussion jeux vidéo",
        state: 1,
        lastActivity: "Aujourd'hui - 14:30:26 par Erement",
        topicQuantity: 1056,
      },
      {
        title: "Equipement Matériels",
        state: 1,
        lastActivity: "Aujourd'hui - 14:30:26 par Erement",
        topicQuantity: 1056,
      },
      {
        title: "Hardware",
        state: 2,
        lastActivity: "Aujourd'hui - 14:30:26 par Erement",
        topicQuantity: 1056,
      },
      {
        title: "Logiciel",
        state: 2,
        lastActivity: "Aujourd'hui - 14:30:26 par Erement",
        topicQuantity: 1056,
      },
      {
        title: "Optimisation",
        state: 1,
        lastActivity: "Aujourd'hui - 14:30:26 par Erement",
        topicQuantity: 1056,
      },
      {
        title: "Publicité de vos discords commu",
        state: 2,
        lastActivity: "Aujourd'hui - 14:30:26 par Erement",
        topicQuantity: 1056,
      },
      {
        title: "Trouve ton Egirl/Eboy",
        state: 3,
        lastActivity: "Aujourd'hui - 14:30:26 par Erement",
        topicQuantity: 1056,
      }
    ]
  }

  const categories = [
    { name: 'Actualités', isActive: false },
    { name: 'Pc', isActive: false },
    { name: 'Xbox/Psn', isActive: false },
    { name: 'Nintendo', isActive: false },
    { name: 'Actualités', isActive: false },
    { name: 'Actualités', isActive: false },
  ]


  return (
    <>
      <Header/>

      <div className="main container main-c">
        {/* premier container  */}
        <div className=" category-title">
          <div>
            <h2>PC</h2>
          </div>
        </div>
        <MenuLeft 
          categories={categories}
        />
        <div className='categorie-list'>
          <CategoryCard
            contentData={categoryData.contentData}
          />
        </div>

      </div>
      



      <Footer/>
      </>
  )
}

export default Category