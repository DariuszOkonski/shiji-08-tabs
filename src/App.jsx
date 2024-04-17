import data from './data.json';

import { useEffect } from 'react';
import { useState } from 'react';
import JobInfo from './JobInfo';

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

  return (
    <section className='jobs-center'>
      <JobInfo jobs={jobs} />
    </section>
  );
};
export default App;
