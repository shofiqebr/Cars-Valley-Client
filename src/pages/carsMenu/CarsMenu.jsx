
import Cover from '../shared/cover/Cover';
import menuImg from '../../assets/image/imgmenu.avif';
import SectionTitle from '../../components/sectionTitle/SectionTitle';
import MenuCategory from '../menuCategory/MenuCategory';
import recommendedImg from '../../assets/image/recommended.jpg'
import awesomeImg from '../../assets/image/awesome.jpg'
import popularImg from '../../assets/image/popular.jpg'
import useMenu from '../../hooks/useMenu';




const CarsMenu = () => {
    const [menu] = useMenu();

    

    const recommended = menu.filter(item => item.category === 'recommended')
    const awesome = menu.filter(item => item.category === 'awesome')
    const popular = menu.filter(item => item.category === 'popular')
    return (
        <div className='pt-[68px]'>
            <Cover title='All Cars Menu' img={menuImg}></Cover>
              <SectionTitle heading={"All Cars At a Glance"}  subHeading={'watch our'}/>

              <MenuCategory items={recommended} title='Recommended' img={recommendedImg}></MenuCategory>
              <MenuCategory items={awesome} title='Awesome' img={awesomeImg}></MenuCategory>
              <MenuCategory items={popular} title='popular' img={popularImg}></MenuCategory>
            
          
        </div>
    );
};

export default CarsMenu;