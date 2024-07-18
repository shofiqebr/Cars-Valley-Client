
import Cover from '../shared/cover/Cover';
import menuImg from '../../assets/image/imgmenu.avif';
import SectionTitle from '../../components/sectionTitle/SectionTitle';



const CarsMenu = () => {
    return (
        <div>
              <SectionTitle heading={"All Cars At a Glance"}  subHeading={'watch'}/>
            <Cover title='All Cars Menu' img={menuImg}></Cover>
            
          
        </div>
    );
};

export default CarsMenu;