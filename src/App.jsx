import data from './data.json';

import { useEffect } from 'react';
import { useState } from 'react';

const url = 'https://course-api.com/react-tabs-project';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  // current item

  const fetchJobs = async () => {
    const response = data;
    setJobs(response);
    setIsLoading(false);
  };

  useEffect(() => {
    setIsLoading(true);
    try {
      fetchJobs();
    } catch (err) {}
  }, []);

  if (isLoading) {
    return (
      <section className='jobs-center'>
        <div className='loading'></div>
      </section>
    );
  }

  return <h2>Tabs Starter</h2>;
};
export default App;
