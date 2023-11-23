import { Toaster } from 'sonner';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Posts from './components/Posts';

const App = () => {
	return (
		<>
			<Toaster richColors />
			<Navbar />
			<Hero />
			<Posts />
		</>
	);
};

export default App;
