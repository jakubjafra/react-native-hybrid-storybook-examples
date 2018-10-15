import { StorybookUI, loadFont } from 'react-native-hybrid-storybook';

// Unfortunately Metro bundler does not support wildcard require, so you need to maintain this list:
import './docs/Avatar.story.js';
import './docs/Badge.story.js';
import './docs/Button.story.js';
import './docs/ButtonGroup.story.js';
import './docs/Card.story.js';
import './docs/CheckBox.story.js';
import './docs/Divider.story.js';
import './docs/Header.story.js';
import './docs/Icon.story.js';
import './docs/Input.story.js';
import './docs/ListItem.story.js';
import './docs/Overlay.story.js';
import './docs/PricingCard.story.js';
import './docs/Rating.story.js';
import './docs/SearchBar.story.js';
import './docs/Slider.story.js';
import './docs/SocialIcon.story.js';
import './docs/Text.story.js';
import './docs/Tile.story.js';

// Fonts
import fontAwesome from '@expo/vector-icons/fonts/FontAwesome.ttf';
import materialIcons from '@expo/vector-icons/fonts/MaterialIcons.ttf';
import evilIcons from '@expo/vector-icons/fonts/EvilIcons.ttf';
import ionicons from '@expo/vector-icons/fonts/Ionicons.ttf';
loadFont(fontAwesome, 'FontAwesome');
loadFont(materialIcons, 'Material Icons');
loadFont(evilIcons, 'EvilIcons');
loadFont(ionicons, 'Ionicons');

export default StorybookUI;
