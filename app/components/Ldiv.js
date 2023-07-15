import React from 'react'

function Ldiv({ id, title, children }) {
    return (
        <div
            id={id}
            className="bg-white p-4 w-full sm:w-full md:w-[46%] lg:w-[64.1%] xl:w-[64.2%] h-[300px] ml-6 mt-6 relative">
            <div
                className="absolute top-2 right-4 mt-2 mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M32 32C14.3 32 0 46.3 0 64v96c0 17.7 14.3 32 32 32s32-14.3 32-32V96h64c17.7 0 32-14.3 32-32s-14.3-32-32-32H32zM64 352c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7 14.3 32 32 32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H64V352zM320 32c-17.7 0-32 14.3-32 32s14.3 32 32 32h64v64c0 17.7 14.3 32 32 32s32-14.3 32-32V64c0-17.7-14.3-32-32-32H320zM448 352c0-17.7-14.3-32-32-32s-32 14.3-32 32v64H320c-17.7 0-32 14.3-32 32s14.3 32 32 32h96c17.7 0 32-14.3 32-32V352z" /></svg>
            </div>
            <div
                className="absolute top-2 left-4">
                <p
                    className="text-lg font-bold">
                    {title}
                </p>
            </div>
            {children}
        </div>
    )
}

export default Ldiv
