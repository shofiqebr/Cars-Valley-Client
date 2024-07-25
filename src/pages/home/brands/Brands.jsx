import awesome1 from '../../../assets/image/awesome1.jpg'
import awesome2 from '../../../assets/image/awesome2.jpg'
import awesome3 from '../../../assets/image/awesome3.jpg'
import awesome4 from '../../../assets/image/awesome4.jpg'
import SectionTitle from '../../../components/sectionTitle/SectionTitle';


const Brands = () => {

    return (


      
        <div className='flex flex-col justify-center items-center my-10 gap-10 '>
            <SectionTitle heading={'Most Wanted'} subHeading={'here is our'} />
          
            <section className='h-44 w-[700px] rounded-xl bg-slate-800 sticky top-[100px] mb-[300px]'>
                <div className="absolute top-16  -left-96 w-10 h-10 text-center pt-2 text-white bg-[#0C2A63]">
                    1
                </div>
                <div className="absolute top-16  -right-96 w-20 h-10 text-center pt-2 text-white bg-[#0C2A63]">
                    Details
                </div>
                <div>
                    <img className='rounded-xl border-4 border-[#0C2A63]' src={awesome1} alt="" />
                    
                </div>


            </section>
           
           
            <section className='h-44 w-[700px] rounded-xl bg-teal-200 sticky top-[200px] mb-[200px] -mt-[300px] '>
            <div className="absolute top-16  -left-96 w-10 h-10 text-center pt-2 text-white bg-[#0C2A63]">
                    2
                </div>
            <div className="absolute top-16  -right-96 w-20 h-10 text-center pt-2 text-white bg-[#0C2A63]">
            Details
                </div>
                <img className='rounded-xl border-4 border-[#0C2A63]' src={awesome2} alt="" />

            </section>
           
           
            <section className='h-44 w-[700px] rounded-xl bg-indigo-500 sticky top-[300px] mb-[100px] -mt-[200px]'>
            <div className="absolute top-16  -left-96 w-10 h-10 text-center pt-2 text-white bg-[#0C2A63]">
                    3
                </div>
            <div className="absolute top-16  -right-96 w-20 h-10 text-center pt-2 text-white bg-[#0C2A63]">
            Details
                </div>
                <img className='rounded-xl border-4 border-[#0C2A63]' src={awesome3} alt="" />

            </section>
            
          
          
            <section className='h-44 w-[700px] rounded-xl bg-sky-900 sticky top-[400px] mb-0 -mt-[100px]'>
            <div className="absolute top-16  -left-96 w-10 h-10 text-center pt-2 text-white bg-[#0C2A63]">
                    4
                </div>
            <div className="absolute top-16  -right-96 w-20 h-10 text-center pt-2 text-white bg-[#0C2A63]">
            Details
                </div>
                <img className='rounded-xl border-4 border-[#0C2A63]' src={awesome4} alt="" />
            </section>
        </div>
    );
};

export default Brands;