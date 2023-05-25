import React from 'react'

const AddReviewTab = ({book}) => {
  return (
    <div className="w-full pt-5 max-w-[850px] pl-5">
        <div>{book[0]?.title}</div>
        <form action="POST">
            <div className='flex justify-between'>
                <div className='flex items-center'>
                    <input type="checkbox" name='read' id='read' className='mr-2'/>
                    <label htmlFor="read">Read it on</label>
                </div>
                <div className='flex items-center'>
                    <input type="checkbox" name='read' id='read' className='mr-2'/>
                    <label htmlFor="read">Read it on</label>
                </div>
            </div>
        </form>
    </div>
  )
}

export default AddReviewTab