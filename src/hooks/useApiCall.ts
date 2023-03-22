import { useState, useEffect } from 'react';

interface IUseApiProps<T> {
  data: T | null;
  loading: boolean;
  error: Error | null;
}

const useApiCall = <T>(
  apiFunction: (...args: any[]) => Promise<T>
) : [T | null, boolean, Error | null] => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    (async () => {
      try {
        const response = await apiFunction();
        setData(response);
      } catch (error: any) {
        setError(error);
      }
      finally {
        setLoading(false);
      }
    })()
  }, [apiFunction]);

  return [ data, loading, error ];
};

export default useApiCall;