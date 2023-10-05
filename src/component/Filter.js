import React, { useEffect } from 'react';

const Filter = ({project,
    setFiltered,
    activeGenre,
    setActiveGenre}) => {

        useEffect(()=>{
            if(activeGenre === "all"){
                setFiltered(project)
                return;
            }

            const filtered = project.filter((p)=>p.category.includes(activeGenre))
            setFiltered(filtered)
        },[activeGenre, project, setFiltered])

    return (
        <div className='text-dark dark:text-light'>
            <div className='flex items-center gap-x-12  w-full mt-6 justify-center font-medium sm:text-sm sm:gap-x-5'>
            <button onClick={()=>setActiveGenre("all")} className={`${activeGenre === "all" ? "text-primary font-bold " : ""}`}>All</button>
            <button onClick={()=>setActiveGenre("frontend")} className={`${activeGenre === "frontend" ? "text-primary font-bold" : ""}`}>Frontend</button>
            <button onClick={()=>setActiveGenre("fullstack")} className={`${activeGenre === "fullstack" ? "text-primary font-bold" : ""}`}>Fullstack</button>
            <button onClick={()=>setActiveGenre("javascript")} className={`${activeGenre === "javascript" ? "text-primary font-bold" : ""}`}>Javascript</button>
        </div>
        </div>
    );
};

export default Filter;