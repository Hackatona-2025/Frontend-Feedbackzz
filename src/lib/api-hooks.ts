import { useState, useEffect } from 'react';

interface FetchOptions<T> {
  initialData?: T;
  deps?: readonly unknown[];
  enabled?: boolean;
}

export function useApiData<T>(
  fetcher: () => Promise<T>,
  options: FetchOptions<T> = {}
) {
  const { initialData, deps = [], enabled = true } = options;
  const [data, setData] = useState<T | undefined>(initialData);
  const [isLoading, setIsLoading] = useState(enabled);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (!enabled) {
      setIsLoading(false);
      return;
    }

    setIsLoading(true);
    fetcher()
      .then((result) => {
        setData(result);
        setError(null);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [...deps, enabled]);

  return { data, isLoading, error };
}

export function useMutation<TData, TVariables>(
  mutationFn: (variables: TVariables) => Promise<TData>
) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [data, setData] = useState<TData | null>(null);

  const mutate = async (variables: TVariables) => {
    setIsLoading(true);
    try {
      const result = await mutationFn(variables);
      setData(result);
      setError(null);
      return result;
    } catch (err) {
      setError(err instanceof Error ? err : new Error(String(err)));
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  return { mutate, isLoading, error, data };
} 