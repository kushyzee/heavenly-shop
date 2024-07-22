import ClipLoader from "react-spinners/ClipLoader";

const Loader = () => {
  return (
    <div className="py-36 flex flex-col items-center justify-center font-bold gap-3">
      <ClipLoader
        color={"#dc2626"}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
      <p>Loading...</p>
    </div>
  )
}

export default Loader