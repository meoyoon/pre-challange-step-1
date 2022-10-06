import { createContext, ReactElement, useContext, useEffect, useMemo, useState } from 'react';

interface RouterActions {
  setPath(path: string): void;
  addRoute(path: string): void;
}

const RouterContext = createContext('');
const RouterActionsContext = createContext<RouterActions | null>(null);

export function useRouter() {
  const path = useContext(RouterContext);
  const action = useContext(RouterActionsContext);
  if (path === undefined) {
    throw new Error('Router and Route component should be used within RouterContext');
  }
  if (!action) {
    throw new Error('Router and Route component should be used within RouterAction');
  }

  const push = (path: string) => {
    action.setPath(path);
    window.history.pushState({}, '', new URL(`${window.location.origin + path}`));
  };

  return { path, action, push };
}

export default function Router({ children }: { children: ReactElement[] }) {
  const [path, setRouterPath] = useState<string>('');
  const [pathList, setPathList] = useState<string[]>(['/']);
  const [isNotFound, setIsNotFound] = useState(false);

  const actions = useMemo<RouterActions>(
    () => ({
      setPath(path) {
        if (!pathList.some((item) => item === path)) {
          setIsNotFound(true);

          // TODO: error boundry 적용해보기
          // throw new Error('404 Not Found');
        }
        if (isNotFound) setIsNotFound(false);
        setRouterPath(path);
      },
      addRoute(path) {
        setPathList((prev) => Array.from(new Set([...prev, path])));
      },
    }),
    [isNotFound, pathList],
  );

  useEffect(() => {
    window.onpopstate = (event: PopStateEvent) => {
      console.log(event);
    };

    return () => {
      window.onpopstate = null;
    };
  }, []);

  useEffect(() => {
    if (!path && pathList.length === children.length) {
      actions.setPath(window.location.pathname);
    }
  }, [pathList]);

  return (
    <RouterActionsContext.Provider value={actions}>
      <RouterContext.Provider value={path}>{isNotFound ? <h2>404입니다만</h2> : children}</RouterContext.Provider>
    </RouterActionsContext.Provider>
  );
}
