import React from 'react'

import '../Cards/Card.css'


function Card() {
  return (
    <div className="card">
        <div className='mt-20'>
            {data.map((d) => (
                <div className='slider'> 
                     <div className='card-slider'>
                        <img src={d.img} alt=''/>
                      
                     </div>
                     <div className='text-container'>
                      <p>{d.name}</p>
                      <p>{d.review}</p>
                      <button>Read More</button>
                     </div>

                </div>
            
            ))}

        </div>
      
    </div>
  )
}

const data = [
    {
 name: 'gpi',
 img: '/Images/first.jpeg',

    },
    {
        name: 'gpi',
        img: '/Images/lion.jpeg',
        review: 'lorem ipsm ssssgejbdweidnchyeowdd ikslodbdsiuenn '
       
           },
    {
            name: 'gpi',
            img: '/Images/first.jpeg',
            review: 'lorem ipsm ssssgejbdweidnchyeowdd ikslodbdsiuenn '
           
    },

   {
                name: 'gpi',
                img: '/Images/first.jpeg',
                review: 'lorem ipsm ssssgejbdweidnchyeowdd ikslodbdsiuenn '
               
   }
]
export default Card
