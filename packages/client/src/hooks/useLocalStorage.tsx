import {useState} from 'react';

function getStoredValue<T>(key: string, initialValue: T): T {
  try {
    const item: string | null = window.localStorage.getItem(key);
    if (typeof item === 'string') {
      return JSON.parse(item);
    }
    return initialValue;
  } catch (error) {
    return initialValue;
  }
}

function useLocalStorage<T>(key: string, initialValue: T): [T, (value: T) => void] {
  const [storedValue, setStoredValue] = useState(getStoredValue(key, initialValue));

  const setValue = (value: T): void => {
    try {
      setStoredValue(value);
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {}
  };

  return [storedValue, setValue];
}

export default useLocalStorage;
