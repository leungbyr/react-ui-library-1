import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import * as Themes from '../../src/Themes';

const stories = storiesOf('Theme', module).addDecorator(withKnobs);
Object.entries(Themes).forEach(([ key, value ]) => {
    stories.add(`with ${ key }`, () => (
        <span>To be automated</span>
    ));
});
