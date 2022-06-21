import React from 'react';
import { Grid } from '@mui/material';
import { Parallax } from 'react-scroll-parallax';

import homeStyles from '../../HomePage.module.css';

export default function ProficienciesSegment() {
    return (
        <div className={homeStyles.page} style={{ width: '80%', margin: '0 5%', padding: '2% 5%' }}>
            <Grid container style={{}} spacing={5}>
                <Grid item xs={12}>
                    <h1 style={{ textAlign: 'center' }}>Proficiencies</h1>
                </Grid>

                <Grid item xs={4}>
                    <Parallax speed={-5}>
                        <img src='placeholder.jpg' width='250px' height='250px' />
                    </Parallax>
                </Grid>
                <Grid item xs={2}>

                </Grid>
                <Grid item xs={6} style={{ textAlign: 'left' }}>
                    <h2>Languages</h2>
                    <li>Javascript/NodeJS</li>
                    <li>C#</li>
                    <li>Python</li>
                </Grid>

                <Grid item xs={8} style={{ textAlign: 'left' }}>
                    <h2>Technical concepts</h2>
                    <li>Web development</li>
                    <li>Game development</li>
                    <li>Desktop & Mobile app development</li>
                    <li>CI/CD</li>
                    <li>Cloud computing</li>
                    <li>Git</li>
                </Grid>
                <Grid item xs={4}>
                    <Parallax speed={-5}>
                        <img src='placeholder.jpg' width='250px' height='250px' />
                    </Parallax>
                </Grid>
            </Grid>
        </div>
    );
}