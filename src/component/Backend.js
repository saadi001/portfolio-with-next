import React from 'react';
import { Technology } from './Frontend';
import { ExpressIcon, MongooseIcon, NodeIcon } from './icons';

const Backend = ({className}) => {
    return (
        <div className={`${className} `}>
            <Technology icon={<NodeIcon></NodeIcon>} name={"Node js"} percentage={"50%"}/>                                 
            <Technology icon={<ExpressIcon></ExpressIcon>} name={"Express js"} percentage={"50%"}/>                                 
            <Technology icon={<MongooseIcon></MongooseIcon>} name={"Mongoose js"} percentage={"50%"}/>                                 
            
        </div>
    );
};

export default Backend;