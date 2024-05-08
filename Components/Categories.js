import React from 'react'

const Categories = () => {
    return (
        <>
            <div className='category w-[100%] h-[100vh]'>
                <div className='w-full h-full grid grid-cols-[30%_70%] bg-[#26292c]'>
                    <div className="screen bg-[#26292c]">
                        <img className='w-[60%] m-auto bg-red-600 mt-14' src="/IMG/phoneScreen.png" alt="phoneAD" />
                    </div>
                    <div className="categ bg-[#A9E5FF] rounded-tl-3xl"></div>
                </div>
            </div>
        </>
    )
}

export default Categories
