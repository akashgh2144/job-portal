import React from 'react';

const NewBlog = () => {
    return (
        <div>
            
<div className="grid grid-cols-5 grid-rows-5 gap-4">
    <div >1</div>
    <div className="col-start-1 row-start-2">2</div>
    <div className="col-start-2 row-start-1">3</div>
    <div className="col-start-2 row-start-2">4</div>
    <div className="col-span-2 row-span-3 col-start-1 row-start-3">5</div>
    <div className="row-span-5 col-start-3 row-start-1">6</div>
</div>
    
        </div>
    );
};

export default NewBlog;