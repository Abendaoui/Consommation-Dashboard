import { useQuery } from 'react-query';
import axios from 'axios';

const fetchGreeting = async (endPoint) => {
  const { data } = await axios.get(endPoint);
  return data;
};

export const useGreeting = (endpoint) => {
    return useQuery(['data', endpoint], () => fetchGreeting(endpoint), {
      enabled: !!endpoint,
    });
  };

// How To Apply
/*
  const { data, error, isLoading } = useGreeting('http://localhost:5000/home');

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>An error occurred: {error.message}</div>;
*/