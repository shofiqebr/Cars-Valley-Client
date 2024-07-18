import { useEffect, useState } from "react";
import SectionTitle from "../../../components/sectionTitle/SectionTitle";
import CarItem from "../../shared/carItem/CarItem";
import useMenu from "../../../hooks/useMenu";


const PopularCars = () => {
    // const [car, setCar] =useState([])
    // useEffect( ()=>{
    //     fetch('Cars.json')
    //     .then(res => res.json())
    //     .then(data => {
    //         const popularCars = data.filter(item => item.category === 'popular');
    //         setCar(popularCars)})
    // },[])
      const [menu] = useMenu();
      const popular = menu.filter(item => item.category ==='popular');
    return (
        <section>
            <SectionTitle heading={'Our Popular Cars'} subHeading={'order from'}></SectionTitle>
            <div className="grid md:grid-cols-2 gap-10 my-10">
                {
                    popular.map(item => <CarItem
                    key={item._id}
                    item={item}
                    >
                    </CarItem>)
                }
            </div>
        </section>
        
    );
};

export default PopularCars;