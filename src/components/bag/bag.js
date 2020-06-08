import React, { useState } from 'react';

const Bag = () => {
    const [openBag, setOpenBag] = useState(false);

    function handleOpenBag() {
        setOpenBag(!openBag);
    }

    return (
        <>
            <button onClick={handleOpenBag}>
                <i className="fas fa-shopping-bag"></i>
            </button>
        </>
    );
}

export default Bag;