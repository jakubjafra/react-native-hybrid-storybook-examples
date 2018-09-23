import App from './src/App';
import Storybook from './storybook';

export default process.env.REACT_NATIVE_STORYBOOK ? Storybook : App;

