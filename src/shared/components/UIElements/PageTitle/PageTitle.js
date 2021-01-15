import React from 'react';

import './PageTitle.css';

const PageTitle = props => (
    <h2 className={`PageTitle ${props.className}`}>{props.children}</h2>
);

export default PageTitle;