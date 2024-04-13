import React from 'react'
import {PRODUCTS,RESOURCES,COMPANY,SUPPORT} from './Menue'
import Item from './Item'
const ItemContainer = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:px-8 px-5 py-16">
    <Item   Link={PRODUCTS} title={"PRODUCTS"}/>
    <Item Link={RESOURCES} title={"RESOURCES"}/>
      
    <Item  Link={COMPANY} title={"COMPANY"}/>
    <Item  Link={SUPPORT} title={"SUPPORT"}/>
      </div>
  )
}

export default ItemContainer