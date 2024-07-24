import PageSection from "../components/PageSection";
import { Link } from "react-router-dom";

const NotFound = ({page = "/"}) => {
  return (
    <PageSection>
      <div className="mb-20">
        <div className="text-center">
          <h1 className="text-9xl font-black text-zinc-200">404</h1>

          <p className="text-2xl font-bold tracking-tight sm:text-4xl">
            Uh-oh!
          </p>

          <p className="mt-4">We can't find that page.</p>

          <Link
            to={page}
            className="mt-6 inline-block rounded-md bg-red-600 px-5 py-2.5 text-sm font-medium text-zinc-50 hover:bg-red-700"
          >
            Go Back Home
          </Link>
        </div>
      </div>
    </PageSection>
  );
};

export default NotFound;
