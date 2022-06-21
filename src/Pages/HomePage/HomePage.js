import React from 'react';

import styles from './HomePage.module.css';

//Segments
import AboutSegment from './Segments/About/AboutSegment';
import ProficienciesSegment from './Segments/Proficencies/ProficenciesSegment';
import ProjectsSegment from './Segments/Projects/ProjectsSegment';

export default function HomePage() {
    return (
        <div>
            <AboutSegment />
            {/* <ProficienciesSegment /> */}
            <ProjectsSegment />
        </div>
    );
};