import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifts'
// import { getGifts } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {

    // const [images, setImages] = useState([]);

    const { data: images, loading } = useFetchGifs(category);







    // getGifts();


    return (
        <>
            <h3 className="animate__animated animate__fadeIn "> {category}</h3>
            <p className="animate__animated animate__flash ">
                {loading && <p>Loading</p>}
            </p>

            <div className="card-grid">


                {
                    images.map(img => (
                        <GifGridItem key={img.id}
                            {...img}
                        ></GifGridItem>
                    ))
                }


            </div>
        </>
    )
}
