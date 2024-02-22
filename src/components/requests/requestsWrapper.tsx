import RequestsList from "../requests/requestsList";
import RequestDetails from "../requests/requestDetails";

const statusBar = () => {
  return (
    <>
      <div className="w-full justify-center flex">
        <div className="w-1/3">
          <RequestsList></RequestsList>
        </div>
        <div className="w-2/3">
          <RequestDetails></RequestDetails>
        </div>
      </div>
    </>
  );
};

export default statusBar;
