import { NextPageContext } from 'next';

type ErrorPageProps = {
  statusCode?: number;
};

const ErrorPage = ({ statusCode }: ErrorPageProps) => {
  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold mb-4">
        {statusCode ? `An error ${statusCode} occurred on server` : 'An error occurred on client'}
      </h1>
    </div>
  );
};

ErrorPage.getInitialProps = ({ res, err }: NextPageContext) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default ErrorPage;

  