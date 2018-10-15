import { StorybookUI } from 'react-native-hybrid-storybook';

// Unfortunately Metro bundler does not support wildcard require, so you need to maintain this list:
import './docs/Human.story.js';
import './docs/iOSUIKit.story.js';
import './docs/Material.story.js';

export default StorybookUI;
