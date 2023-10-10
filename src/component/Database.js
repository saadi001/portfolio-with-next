import React from 'react';
import { Technology } from './Frontend';
import { MongodbIcon, PostgresQlIcon } from './icons';

const Database = ({className}) => {
    return (
        <div className={`${className} `}>
            <Technology icon={<MongodbIcon></MongodbIcon>} name={"MongoDb"} percentage={"70%"}/>             
            <Technology icon={<PostgresQlIcon></PostgresQlIcon>} name={"PostgresQl"} percentage={"60%"}/>             
            
        </div>
    );
};

export default Database;