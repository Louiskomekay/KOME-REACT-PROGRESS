import SingleItem from './SingleItem';
import { useQuery } from '@tanstack/react-query';
import customFetch from './Utils';

const Items = () => {
  const result = useQuery({
    queryKey: ['task'],
    queryFn: () => customFetch.get('/')
  })
  const { data, isLoading, isError, error } = result;

  if (isLoading) {
    return <p style={{ marginTop: '1rem' }}>Loading...</p>
  }
  if (isError) {
    return <p style={{ marginTop: '1rem' }}>There was an error</p>
  }
  // if (Error) {
  //   return <p style={{ marginTop: '1rem' }}>{error.message}</p>
  // }

  return (
    <div className='items'>
      {data.data.taskList.map((item) => {
        return <SingleItem key={item.id} item={item} />;
      })}
    </div>
  );
};
export default Items;
