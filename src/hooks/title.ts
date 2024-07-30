import { useEffect } from 'react';

const restoreTitle = () => {
  const initialTitle = document.title;
  return () => {
    document.title = initialTitle;
  };
};

export function useChangeTitle(title: string) {
  useEffect(restoreTitle, []);

  useEffect(() => {
    document.title = `6 Cities | ${title}`;
  }, [title]);
}
