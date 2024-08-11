import React from 'react'

const Form = () => {

    const divStyle ={
        width:'45vw',
        height:'75vh'
    }
    const inputStyle ={
        width:'21vw'
    }
  return (

        <div className=" rounded-lg shadow-lg mx-auto flex items-center" style={divStyle}>
            <form>
                <div className='flex justify-between gap-2'>
                <div className="mb-4 flex flex-col">
                    <div>
                    <label className="text-sm font-medium text-purple-200 mb-2" htmlFor="company-name">
                        Company Name
                    </label></div>
                    <div style={inputStyle}>
                    <input
                        type="text"
                        id="company-name"
                        className="w-full px-3 py-2 text-purple-200 bg-purple-700 border border-purple-600 rounded focus:outline-none focus:border-purple-500"
                    />
                    </div>
                </div>
                <div className='flex justify-between'>
                <div className="mb-4  flex flex-col">
                    <div>
                    <label className=" text-sm font-medium text-purple-200 mb-2" htmlFor="type-of-company">
                        Type of Company
                    </label>
                    <div className="relative" style={inputStyle}>
                        <select
                            id="type-of-company"
                            className="w-full appearance-none bg-purple-700 border border-purple-600 text-purple-200 py-2 px-3 rounded leading-tight focus:outline-none focus:border-purple-500"
                        >
                            <option>Option 1</option>
                            <option>Option 2</option>
                            <option>Option 3</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-purple-200">
                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                <path d="M7 10l5 5 5-5H7z" />
                            </svg>
                        </div>
                    </div>
                    </div>
                    </div>
                </div>
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-medium text-purple-200 mb-2" htmlFor="type-of-sponsorship">
                        Type of Sponsorship Requested
                    </label>
                    <div className="relative">
                        <select
                            id="type-of-sponsorship"
                            className="block appearance-none w-full bg-purple-700 border border-purple-600 text-purple-200 py-2 px-3 pr-8 rounded leading-tight focus:outline-none focus:border-purple-500"
                        >
                            <option>Option 1</option>
                            <option>Option 2</option>
                            <option>Option 3</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-purple-200">
                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                <path d="M7 10l5 5 5-5H7z" />
                            </svg>
                        </div>
                    </div>
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-medium text-purple-200 mb-2" htmlFor="deliverables">
                        Deliverables
                    </label>
                    <div className="relative">
                        <select
                            id="deliverables"
                            className="block appearance-none w-full bg-purple-700 border border-purple-600 text-purple-200 py-2 px-3 pr-8 rounded leading-tight focus:outline-none focus:border-purple-500"
                        >
                            <option>Option 1</option>
                            <option>Option 2</option>
                            <option>Option 3</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-purple-200">
                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                <path d="M7 10l5 5 5-5H7z" />
                            </svg>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};


export default Form