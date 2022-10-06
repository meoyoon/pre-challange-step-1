import { ReactNode, useEffect } from 'react';
import { useRouter } from './Router';

interface RouteProps {
  path: string;
  component: ReactNode;
}

export default function Route({ path, component }: RouteProps) {
  const { path: currentPath, action } = useRouter();

  useEffect(() => {
    action.addRoute(path);
  }, []);

  return <>{currentPath === path && component}</>;
}
