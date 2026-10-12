import React from 'react'

const TaskList = () => {
  return (
    <div id='taskList' className='h-[55%] overflow-x-auto flex items-center justify-start gap-5 flex-nowrap w-full py-5 mt-10'>
        <div className='flex-shrink-0 h-full w-[300px] bg-red-400 rounded-xl p-5'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 px-3 py-1 rounded text-sm'>High</h3>
                <h4 className='text-sm'>10 Oct 2026</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>Make a Youtube Video</h2>
            <p className='text-sm mt-2'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde, culpa. Veniam assumenda nemo tempora voluptatibus!
            </p>
        </div>

        <div className='flex-shrink-0 h-full w-[300px] bg-yellow-400 rounded-xl p-5'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 px-3 py-1 rounded text-sm'>High</h3>
                <h4 className='text-sm'>10 Oct 2026</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>Make a Youtube Video</h2>
            <p className='text-sm mt-2'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde, culpa. Veniam assumenda nemo tempora voluptatibus!
            </p>
        </div>

        <div className='flex-shrink-0 h-full w-[300px] bg-green-400 rounded-xl p-5'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 px-3 py-1 rounded text-sm'>High</h3>
                <h4 className='text-sm'>10 Oct 2026</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>Make a Youtube Video</h2>
            <p className='text-sm mt-2'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde, culpa. Veniam assumenda nemo tempora voluptatibus!
            </p>
        </div>

        <div className='flex-shrink-0 h-full w-[300px] bg-blue-400 rounded-xl p-5'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 px-3 py-1 rounded text-sm'>High</h3>
                <h4 className='text-sm'>10 Oct 2026</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>Make a Youtube Video</h2>
            <p className='text-sm mt-2'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde, culpa. Veniam assumenda nemo tempora voluptatibus!
            </p>
        </div>

    </div>
  )
}

export default TaskList