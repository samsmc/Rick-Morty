import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ErrorPage from './components/error_page/ErrorPage';
import Homepage from './pages/homepage';

const App = () => {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Homepage />} />
					{/* <Route
            path="/search"
            element={
              <Search
                allActivities={allActivities}
                mergedActivitiesData={mergedActivitiesData}
                searchActivity={searchActivity}
                setSearchActivity={setSearchActivity}
              />
            }
          /> */}
					<Route path="*" element={<ErrorPage />} />
				</Routes>
			</BrowserRouter>
		</>
	);
};

export default App;
