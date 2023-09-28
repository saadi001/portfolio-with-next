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

            const filtered = project.filter((p)=>p.category === activeGenre)
            setFiltered(filtered)
        },[activeGenre, project, setFiltered])

    return (
        <div className='flex items-center gap-5'>
            <button onClick={()=>setActiveGenre("all")}>All</button>
            <button onClick={()=>setActiveGenre("frontend")}>Frontend</button>
            <button onClick={()=>setActiveGenre("fullstack")}>Fullstack</button>
        </div>
    );
};

export default Filter;