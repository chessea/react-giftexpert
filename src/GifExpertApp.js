import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';


export const GifExpertApp = () => {

    // const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];

    const [categories, setcategories] = useState(['One Punch']);

    // const handleAdd = () => {
    //     // setcategories([...categories, 'HuanterXHunter']);
    //     setcategories ( cats => [...cats, 'HunterXHunter']);


    // }


    return (
        <>

            <h2>GiftExpertApp</h2>
            <AddCategory setCategories={setcategories} />
            <hr></hr>

            <ol>
                {
                    categories.map(category => (
                        <GifGrid key={category}  category={category}></GifGrid>
                    ))

                }
            </ol>


        </>
    )
}
