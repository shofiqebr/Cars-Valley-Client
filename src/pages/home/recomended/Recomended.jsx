import { useEffect, useState } from "react";
import SectionTitle from "../../../components/sectionTitle/SectionTitle";
import RecomendedItem from "./recomendedItem/RecomendedItem";


const Recomended = () => {
    const [recomendedCars,setRecomendedCars] =useState([]);
    useEffect( () => {
        fetch('Cars.json')
        .then (res=> res.json())
        .then (data =>{
            const recomendedCar = data.filter(item => item.category ==='recomended')
            setRecomendedCars(recomendedCar.slice(0, 6)) })
    },[]
    )
        



    return (
        <section>
             <SectionTitle heading={'Our Car Recomendations'} subHeading={'Checkout'}></SectionTitle>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-center items-center gap-3 ml-5 md:ml-1">
                    {
                recomendedCars.map(item => <RecomendedItem 
                    key={item._id}
                item={item}
                />

                )
            }
                </div>
             
            
        </section>
    );
};

export default Recomended;