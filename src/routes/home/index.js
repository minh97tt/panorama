import { h } from 'preact';
import style from './style.css';
import PanoViewer from './components/PanoViewer';

const Home = () => (
	<div class={style.home}>
		<h1>Home</h1>
		<PanoViewer />
	</div>
);

export default Home;
