import * as React from 'react';

export default function Form(){
     return(
          <div className='bg-white px-10 py-20 rounded-3xl border-2 border-gray-100'>
               <h1 className='text-5xl font-semibold'>Welcome back</h1>
               <p className='font-medium text-lg text-gray-500'>Welcome back! Please enter your details.</p>
               <div className='mt-8'>
                    <div>
                         <label className='text-lg font-medium'>Email</label>
                         <input
                              className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
                              placeholoder='Enter your email'
                         />
                    </div>     
                    <div>
                         <label className='text-lg font-medium'>Password</label>
                         <input
                              className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
                              placeholoder='Enter your password'
                         />
                    </div> 
                    <div className='mt-8 flex justify-between items-center'>
                         <div>
                         <input
                              type='checkbox'
                              id='remember'
                         />
                         <label className='ml-2 font-medium text-base text-violet-500' for='remember'>Remeber for 30 days</label>
                         </div>                    
                         <button>Forgot password</button>
                    </div>
                    <div className='mt-8 flex flex-col gap-y-4'>
                    <button className='active:scale-[0.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all py-3 rounded-xl bg-violet-500 text-white text-lg font-bold'>Singn in</button>                    
                    <button  className='active:scale-[0.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all py-3 rounded-xl bg-violet-500 text-white text-lg font-bold'>Autenticate</button>
                    </div>
               </div>
          </div>
     )
}
