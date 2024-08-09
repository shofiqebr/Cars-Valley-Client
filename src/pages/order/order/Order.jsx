import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import 'react-tabs/style/react-tabs.css';
import Cover from "../../shared/cover/Cover";
import orderCoverImg from "../../../assets/image/slide3.jpg";
import { useEffect, useState } from "react";
import OrderTab from "../orderTab/OrderTab";
import useMenu from "../../../hooks/useMenu";
import { useParams } from "react-router-dom";


const Order = () => {

    const [menu, setMenu] = useState([]);

    useEffect(()=>{
        fetch('Cars.json')
        // fetch('http://localhost:5000/cars')
        .then(res=>res.json())
        .then(data=> {
            setMenu(data)
            // setLoading(false)
        })
    },[])
    const categories = ['recommended', 'awesome', 'popular'];
    const {category} = useParams();
    console.log(category)
    const initialIndex = categories.indexOf(category);
    const [tabIndex, setTabIndex] = useState(initialIndex);
    // const [menu] = useMenu();
    // console.log(category);

    const recommended = menu.filter(item => item.category === 'recommended');
    const awesome = menu.filter(item => item.category === 'awesome');
    const popular = menu.filter(item => item.category === 'popular');
    return (
        <div>
              <Cover img={orderCoverImg} title="Order Car"></Cover>
            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>recommended</Tab>
                    <Tab>awesome</Tab>
                    <Tab>popular</Tab>
                   
                </TabList>
                <TabPanel>
                    <OrderTab items={recommended}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={awesome}></OrderTab>
                </TabPanel>
                <TabPanel >
                    <OrderTab items={popular}></OrderTab>
                </TabPanel>
               
            </Tabs>
        </div>
    );
};

export default Order;