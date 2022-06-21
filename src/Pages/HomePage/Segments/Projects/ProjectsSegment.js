import { Card } from '@mui/material';
import React from 'react';

import ProjectsData from '../../Data/ProjectsData';

import homeStyles from '../../HomePage.module.css';

function Project({ projectName, link, description, currentStatus, relatedImages, learningPoints, isRight }) {
    return (
        <Card style={{ margin: '20px 0' }}>
            <h2>{projectName}</h2>
            <p>{currentStatus}</p>
            <p>{description}</p>
            <p>Learning points:</p>
            {
                learningPoints.map(x => <li>{x}</li>)
            }
        </Card>
    );
}

export default function ProjectsSegment() {
    return (
        <div className={homeStyles.page} style={{ width: '90%', margin: '0 2.5%', padding: '2.5%', height: 'auto' }}>
            <h1>Projects</h1>
            {
                ProjectsData.map((x, i) => <Project {...x} isRight={i % 2 === 0} />)
            }
        </div>
    );
}