import React, { use } from 'react';
import { NavLink } from 'react-router';
const categoryPromise = fetch('/categories.json').then(res => res.json())

const Categories = () => {
    const categories = use(categoryPromise)
    return (
        <div>
            <div>
                <h3 className='font-extrabold'>All Category {categories.length}</h3>
                <div className='grid grid-cols-1 mt-3 gap-3  '>
                    {
                        categories.map(category=><NavLink  key={category.id} className={'p-2 bg-white border-none hover:bg-base-200'} to={`/category/${category.id}`}>{category.name}</NavLink>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Categories;