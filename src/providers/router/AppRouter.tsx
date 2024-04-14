import { Loader } from 'src/components/common/Loader/Loader';
import { routeConfig } from 'src/config/routeConfig';
import { Suspense } from 'react';
import { useRoutes } from 'react-router-dom';

export const AppRouter = () => {
  return (
    <div className="page-wrapper">
      <Suspense fallback={<Loader />}>
        {useRoutes(Object.values(routeConfig))}
      </Suspense>
    </div>
  );
}