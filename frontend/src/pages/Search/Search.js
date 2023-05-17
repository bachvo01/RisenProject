import React, { useContext } from 'react'
import './search.scss'
import Separator from '../../components/Separator/Separator'
import ProductList from '../../components/ProductList/ProductList'
import { CartContext } from '../../Context/CartContext'
import { MdOutlineFilterList } from 'react-icons/md';
function Search() {
    const {setGenre, setSearch} = useContext(CartContext)
  return (
    <div className='search-container'>
        <Separator></Separator>
        <div className='search-inner'>
            <Separator></Separator>
            <div className='search-bar'>
              <input type='text' className='search-input' onChange={(e) => setSearch(e.target.value)} placeholder='Type any game you want..'></input>
              <div className='side-icon'>
                <MdOutlineFilterList className='icon'></MdOutlineFilterList>
              </div>
            </div>
            
            <Separator status = '3'></Separator>
            <div className='filter-container'>
                <input type='text' placeholder='Genres..' onChange={(e) => setGenre(e.target.value)}></input>
                <input type='text' placeholder='Sort by:'></input>
            </div>
            <Separator></Separator>
            <ProductList type = 'all'></ProductList>
        </div>
        <Separator></Separator>
    </div>
  )
}

export default Search