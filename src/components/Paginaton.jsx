import React, { useContext } from 'react'
import {AppContext} from '../Context/AppContext'


const Paginaton = () => {

  const {page,handlePageChange, totalPages} = useContext(AppContext); 

  return (
    <div className='w-full flex justify-center'>
      <div className='w-11/12 max-w-[750px] flex justify-between items-center placed-center pb-2  border-t-2 pt-1 fixed bottom-0 bg-white'>

        <div className='flex gap-x-2'>
        { page>1 &&
          (<button className='rounded-md border px-3 py-1' onClick={() => handlePageChange(page-1)}>
            Previous  
          </button>)
        }

        { page<totalPages &&
          (<button className='rounded-md border px-3 py-1' onClick={() => handlePageChange(page+1)}>
            Next
          </button>)
        }
        </div>

        <p className='font-bold text-sm'>
          Page {page} of {totalPages}
        </p>
      </div>
    </div>
  )
}

export default Paginaton;
