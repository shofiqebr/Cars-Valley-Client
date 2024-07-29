import awesome1 from '../../../assets/image/awesome1.jpg'
import awesome2 from '../../../assets/image/awesome2.jpg'
import awesome3 from '../../../assets/image/awesome3.jpg'
import awesome4 from '../../../assets/image/awesome4.jpg'
import SectionTitle from '../../../components/sectionTitle/SectionTitle';
import brandImg from '../../../assets/image/brand.jpg'


const Brands = () => {

    return (


      
            <div>


                {/* ----------------------triangle shape----------------------------- */}




<section>

<div className='flex gap-10 justify-center items-center pt-20'>
    <div className='w-60 h-60 border-2 border-blue-800 rounded-xl rotate-45'>
        <div className='-rotate-45 relative'>
            <div className=' absolute -left-6 top-5 text-center'>

        <img className=' rounded-full h-32 w-32 border-2 border-orange-600' src={brandImg} alt="" />
        <h1 className='font-bold text-xl pt-2 text-blue-800'>BMW</h1>
            </div>

        </div>
    </div>
    <div className='w-60 h-60 border-2 border-blue-800 rounded-xl rotate-45'>
        <div className='-rotate-45 relative'>
            <div className=' absolute -left-6 top-5 text-center'>

        <img className=' rounded-full h-32 w-32 border-2 border-orange-600' src={brandImg} alt="" />
        <h1 className='font-bold text-xl pt-2 text-blue-800'>BMW</h1>
            </div>

        </div>
    </div>
    <div className='w-60 h-60 border-2 border-blue-800 rounded-xl rotate-45'>
        <div className='-rotate-45 relative'>
            <div className=' absolute -left-6 top-5 text-center'>

        <img className=' rounded-full h-32 w-32 border-2 border-orange-600' src={brandImg} alt="" />
        <h1 className='font-bold text-xl pt-2 text-blue-800'>BMW</h1>
            </div>

        </div>
    </div>
    
</div>




<div className=' flex justify-center gap-10 -mt-[10px]'>
<div className='w-60 h-60 border-2 border-blue-800 rounded-xl rotate-45'>
        <div className='-rotate-45 relative'>
            <div className=' absolute -left-6 top-5 text-center'>

        <img className=' rounded-full h-32 w-32 border-2 border-orange-600' src={brandImg} alt="" />
        <h1 className='font-bold text-xl pt-2 text-blue-800'>BMW</h1>
            </div>

        </div>
    </div>
     <div className='w-60 h-60 border-2 border-blue-800 rounded-xl rotate-45'>
        <div className='-rotate-45 relative'>
            <div className=' absolute -left-6 top-5 text-center'>

        <img className=' rounded-full h-32 w-32 border-2 border-orange-600' src={brandImg} alt="" />
        <h1 className='font-bold text-xl pt-2 text-blue-800'>BMW</h1>
            </div>

        </div>
    </div>
</div>




<div className='flex justify-center items-center -mt-[10px] pb-20'>
<div className='w-60 h-60 border-2 border-blue-800 rounded-xl rotate-45'>
        <div className='-rotate-45 relative'>
            <div className=' absolute -left-6 top-5 text-center'>

        <img className=' rounded-full h-32 w-32 border-2 border-orange-600' src={brandImg} alt="" />
        <h1 className='font-bold text-xl pt-2 text-blue-800'>BMW</h1>
            </div>

        </div>
    </div>
</div>
</section>





{/* inverted card */}



<section>
<div className='flex flex-col gap-2'>
    <div className=''>
        <img className='w-80  h-44' src={brandImg} alt="" />
    </div>
    <div className='w-80 h-44 bg-blue-200 relative'>
        <div className='absolute -top-14 border-t-8 border-r-8 border-white w-40 h-14 bg-blue-200 '>

        </div>
    </div>
</div>
</section>







        <div className='flex flex-col justify-center items-center my-10 gap-10 '>

           
            <SectionTitle heading={'Most Wanted'} subHeading={'here is our'} />
          
            <section className='md:h-44 md:w-[700px] rounded-xl  sticky top-[100px] mb-[550px]'>
                <div className="absolute hidden md:block top-16  -left-96 w-10 h-10 text-center pt-2 text-white bg-[#0C2A63]">
                    1
                </div>
                <div className="absolute hidden md:block top-16  -right-96 w-20 h-10 text-center pt-2 text-white bg-[#0C2A63]">
                    Details
                </div>
                <div>
                    <img className='h-[450px] w-full  rounded-xl border-4 border-[#0C2A63]' src={awesome1} alt="" />
                    
                </div>


            </section>
           
           
            <section className='md:h-44 md:w-[700px] rounded-xl  sticky top-[200px] mb-[500px] -mt-[300px] '>
            <div className="absolute hidden md:block top-16  -left-96 w-10 h-10 text-center pt-2 text-white bg-orange-600">
                    2
                </div>
            <div className="absolute hidden md:block top-16  -right-96 w-20 h-10 text-center pt-2 text-white bg-orange-600">
            Details
                </div>
                <img className='h-[450px] w-full  rounded-xl border-4 border-orange-600' src={awesome2} alt="" />

            </section>
           
           
            <section className='md:h-44 md:w-[700px] rounded-xl bg-indigo-500 sticky top-[300px] mb-[450px] -mt-[200px]'>
            <div className="absolute hidden md:block top-16  -left-96 w-10 h-10 text-center pt-2 text-white bg-[#0C2A63]">
                    3
                </div>
            <div className="absolute hidden md:block top-16  -right-96 w-20 h-10 text-center pt-2 text-white bg-[#0C2A63]">
            Details
                </div>
                <img className='h-[450px] w-full  rounded-xl border-4 border-[#0C2A63]' src={awesome3} alt="" />

            </section>
            
          
          
            <section className='md:h-44 md:w-[700px] rounded-xl bg-sky-900 sticky top-[500px] mb-[400px] -mt-[100px]'>
            <div className="absolute hidden md:block top-16  -left-96 w-10 h-10 text-center pt-2 text-white bg-orange-600">
                    4
                </div>
            <div className="absolute hidden md:block top-16  -right-96 w-20 h-10 text-center pt-2 text-white bg-orange-600">
            Details
                </div>
                <img  className='h-[450px] w-full rounded-xl border-4 border-orange-600' src={awesome4} alt="" />
            </section>



            

</div>
        </div>
    );
};

export default Brands;