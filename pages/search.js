import React from 'react'
import Headers from '../components/Header'
import Footer from '../components/Footer'
import { useRouter } from 'next/router'
import { format } from 'date-fns'
import InfoCard from '../components/InfoCard'
// import Map from '../components/Map'

export async function getServerSideProps() {
  const searchResults = await fetch(`https://www.jsonkeeper.com/b/5NPS`)
  const data = await searchResults.json();

  return {
    props: {
        searchResults: data,
    },
  };
}


const search = ({searchResults}) => {
  const router = useRouter();
  const {location, startDate, endDate, noOfGuests} = router.query;
  const formattedStartDate = format(new Date(startDate), "dd MMMM yy");
  const formattedEndDate = format(new Date(endDate), "dd MMMM yy");
  const range = `${formattedStartDate} - ${formattedEndDate}`;

  return (
    <div>
     <Headers placeholder={`${location} | ${range} | ${noOfGuests} guests`}/>
        <main className='flex'>
            <section className='flex-grow pt-14 px-6'>
                <p className='text-xs'>300+ Stays - {range} for {noOfGuests} number of guests</p>
                <h1 className='text-3xl font-semibold mt-2 mb-6'>Stays in {location}</h1>
                <div className='hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap'>
                    <p className='px-4 py-2 border rounded-full cursor-pointer hover:shadow-lg active:scale-95 active:bg-gray-100 transition transform duration-100 ease-out'>Cancellation Flexibility</p>
                    <p className='px-4 py-2 border rounded-full cursor-pointer hover:shadow-lg active:scale-95 active:bg-gray-100 transition transform duration-100 ease-out'>Type of Place</p>
                    <p className='px-4 py-2 border rounded-full cursor-pointer hover:shadow-lg active:scale-95 active:bg-gray-100 transition transform duration-100 ease-out'>Price</p>
                    <p className='px-4 py-2 border rounded-full cursor-pointer hover:shadow-lg active:scale-95 active:bg-gray-100 transition transform duration-100 ease-out'>Rooms and Beds</p>
                    <p className='px-4 py-2 border rounded-full cursor-pointer hover:shadow-lg active:scale-95 active:bg-gray-100 transition transform duration-100 ease-out'>More Filters</p>
                </div>

            <div className='flex flex-col'>
                {searchResults?.map(({img, location, title, description, star, price, total}) => (
                    <InfoCard
                    key={img}
                    img ={img}
                    location={location}
                    title={title}
                    description={description}
                    star={star}
                    price={price}
                    total={total}
                    />
                ))}
                </div>
            </section>
     </main>

     {/* <section> 
      {/*  className='hidden xl:inline-flex' */}
      {/* <Map/>
     </section> */} 
     <Footer/>
    </div>
  )
}

export default search;

