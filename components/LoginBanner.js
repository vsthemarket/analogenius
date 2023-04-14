export default function LoginBanner() {
  return (
    <div className="alert alert-info shadow-lg">
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          className="stroke-current flex-shrink-0 w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          ></path>
        </svg>
        <p className="text-start">
          Create an account and sign in to take advantage of Analogenius best
          features, such as saving your favorite responses, creating your own
          analogs, and adding a like to responses generate by other users!
        </p>
        <button className="btn btn-primary ">Login</button>
      </div>
    </div>
  );
}
