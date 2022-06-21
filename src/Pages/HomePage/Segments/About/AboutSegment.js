import React from 'react';
import { Stack, Divider } from '@mui/material';
import { useSpring, animated } from '@react-spring/web';

import homeStyles from '../../HomePage.module.css';

export default function AboutSegment() {
    const currentAge = (new Date()).getFullYear() - 2001;
    const getCurrentlyDoing = (age) => {
        if(age >= 21 && age <= 23) {
            return 'serving National Service in Singapore';
        } else if(age > 23 && age <= 27) {
            return 'studying at NTU';
        } else {
            return 'homeless and looking for a job'; //idk update this or smth
        }
    };

    const animationHeadingIn = useSpring({
        from: {
            opacity: 0.3
        },
        to: {
            opacity: 1
        },
    });

    const animationParaIn = useSpring({
        from: {
            opacity: 0.3
        },
        to: {
            opacity: 1
        },
    });

    return (
        <div className={homeStyles.page} style={{ width: '90%', margin: '0 5%' }}>
            <Stack container style={{ height: '100%' }} direction='row' spacing='5%' alignItems='center'
                divider={<Divider orientation='vertical' flexitem style={{ maxHeight: '50px' }} />}>
                <animated.h1 style={animationHeadingIn}>Hi</animated.h1>
                <animated.p style={animationParaIn}>
                    I'm a {currentAge} year old software developer, specializing in backend development.
                    <br />
                    {/* I'm terrible at UI design, so please bear with me.
                    <br /> */}
                    Currently {getCurrentlyDoing(currentAge)}.
                </animated.p>
            </Stack>
        </div>
    );
}