import SelectFilter from '../components/filters/select_filter/SelectFilter'; 
import Header from '../components/header/Header';
import './styles_homepage.css';

const Homepage = ({characters, type, setType}) => {
	return (
		<>
			<Header />
			<SelectFilter characters={characters} type={type} setType={setType} />
		</>
	);
};

export default Homepage;
