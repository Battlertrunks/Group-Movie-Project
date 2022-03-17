import PagesResponse from "../models/PagesResponse";
import "./PageButtons.css";

interface Props {
  pageNumTerm: string | null;
  prev: () => void;
  next: () => void;
  numPages: PagesResponse;
}

const PageButtons = ({ pageNumTerm, prev, next, numPages }: Props) => {
  return (
    <div className="PageButtons">
      {parseInt(pageNumTerm!) >= 2 ? (
        <button onClick={prev}>Previous Page</button>
      ) : (
        <button disabled>Previous Page</button>
      )}
      <p>
        {pageNumTerm} {pageNumTerm ? " of " : ""}{" "}
        {pageNumTerm ? numPages.total_pages : ""}
      </p>
      {parseInt(pageNumTerm!) < numPages.total_pages! ? (
        <button onClick={next}>Next Page</button>
      ) : (
        <button disabled>Previous Page</button>
      )}
    </div>
  );
};

export default PageButtons;
