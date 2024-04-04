import React, { Fragment, useState } from 'react';
import Working from '../components/working/working';
import MoreInfo from '../components/moreInfo/moreInfo';

function Home() {

    let [pageToShow, setPageChange] = useState(true)

    return (
        <div>
            {
                pageToShow &&
                <Working setPageChange={setPageChange} />
            }
            {
                !pageToShow &&
                <MoreInfo setPageChange={setPageChange} />
            }
        </div>
    );

}

export default Home;
