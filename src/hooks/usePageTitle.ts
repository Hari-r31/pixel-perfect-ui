import { useEffect } from "react";

const usePageTitle = (title: string) => {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = `${title} | TechGigz`;

    return () => {
      document.title = previousTitle;
    };
  }, [title]);
};

export default usePageTitle;
