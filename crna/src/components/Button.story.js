import React from 'react';
import {
    storiesOf,
    fullScreenHostDecorator,
} from 'react-native-hybrid-storybook';
import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs/react';

import Button from './Button';

storiesOf('Button', module)
    .addWithChapters('Story with chapters', {
        subtitle: 'Story subtitle',
        info: 'Story info test **with formatting** ;)',
        chapters: [
            {
                title: 'Chapter title',
                subtitle: 'Chapter subtitle',
                info: `
                    Let\'s render something!
                    
                    \`\`\`
                    TEST
                    \`\`\`
                `,
                sections: [
                    {
                        title: 'Section title',
                        subtitle: 'Section subtitle',
                        info: 'Section info',
                        sectionFn: () => (
                            <Button
                                onClick={action('onClick')}
                                title={text('title', 'Test button')}
                            />
                        ),
                    }
                ]
            }
        ]
    });

storiesOf('Button', module)
    .addDecorator(fullScreenHostDecorator)
    .add('Example', () => (
        <Button
            onClick={action('onClick')}
            title={text('title', 'Test button')}
        />
    ));