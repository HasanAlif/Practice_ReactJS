import React from 'react'

const NewTodo = () => {
  return (
    <form className='w-full max-w-[50%] bg-gray-300 shadow-md rounded-lg px-8 pt-6 pb-8 mb-4'>
        <div className="mb-4">
            <label htmlFor="title" className="block text-gray-700 text-sm font-bold mb-2">Title</label>
            <input type="text" id="title" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Enter title" />
        </div>
        <div className="mb-4">
            <label htmlFor="desc" className="block text-gray-700 text-sm font-bold mb-2">Description</label>
            <textarea id="desc" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Enter description"></textarea>
        </div>
        <button type="submit" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mb-5 cursor-pointer">Add Todo</button>
    </form>
  )
}

export default NewTodo
