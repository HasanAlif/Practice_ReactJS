import React from 'react'

function Tailwind() {
  return (
    <div>
        <div class="flex flex-col gap-2 p-8 sm:flex-row sm:items-center sm:gap-6 sm:py-4 ... border border-gray-200 rounded-lg shadow-md">
    <img class="mx-auto block h-24 rounded-full sm:mx-0 sm:shrink-0" src="https://wilang.org/wp-content/uploads/2016/04/lion-1.jpg" alt="" />
    <div class="space-y-2 text-center sm:text-left">
        <div class="space-y-0.5">
        <p class="text-lg font-semibold text-black">Erin Lindford</p>
        <p class="font-medium text-gray-500">Product Engineer</p>
        </div>
        <button class="border-purple-200 text-purple-600 hover:border-transparent hover:bg-purple-600 hover:text-white active:bg-purple-700 ...">
        Message
        </button>
    </div>
    </div>
    <div class="flex flex-col gap-2 p-8 sm:flex-row sm:items-center sm:gap-6 sm:py-4 border border-gray-200 rounded-lg shadow-md h-200px w-200px">
        <img class="mx-auto block h-24 rounded-full sm:mx-0 sm:shrink-0" src="https://wilang.org/wp-content/uploads/2016/04/lion-1.jpg" alt="" />
        <div class="space-y-2 text-center sm:text-left">
        <div class="space-y-0.5">
            <p class="text-lg font-semibold text-black">Erin Lindford</p>
            <p class="font-medium text-gray-500">Product Engineer</p>
        </div>
        <button class="border-purple-200 text-purple-600 hover:border-transparent hover:bg-purple-600 hover:text-white active:bg-purple-700 ...">
        Message
        </button>
        </div>
    </div>
    </div>
  )
}

export default Tailwind
