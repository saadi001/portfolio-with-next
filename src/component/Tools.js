import React from 'react';
import { Technology } from './Frontend';
import { ChromeIcon, GitIcon, GithubIcon, GithubIconTwo } from './icons';

const Tools = ({className}) => {
    return (
        <div className={`${className}`}>
            <Technology icon={<GitIcon></GitIcon>} name={"Git"} percentage={"60%"}/>             
            <Technology icon={<GithubIconTwo></GithubIconTwo>} name={"Github"} percentage={"50%"}/>             
            <Technology icon={<ChromeIcon></ChromeIcon>} name={"Chrome dev tools"} percentage={"70%"}/>             
            
        </div>
    );
};

export default Tools;