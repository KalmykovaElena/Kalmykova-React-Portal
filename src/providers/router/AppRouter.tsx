import { Loader } from 'components/common/Loader/Loader';
import { routeConfig } from 'config/routeConfig';
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