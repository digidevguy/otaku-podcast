import Footer from '../Footer';
import NavBar from '../NavBar';

const AppLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<>
			<NavBar />
			{children}
			{/* <Footer /> */}
		</>
	);
};

export default AppLayout;
