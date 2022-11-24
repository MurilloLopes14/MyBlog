//* Loader design
import FadeLoader from "react-spinners/FadeLoader";

const loaderProperties = {
  color: "#e5e4e2",
  override: {
    display: "block",
    margin: "1rem auto",
  },
  size: "200",
};

export const Loader = () => {
  return (
    <FadeLoader
      color={loaderProperties.color}
      cssOverride={loaderProperties.override}
      size={loaderProperties.size}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  );
};
