import { useEffect, useContext } from "react";

import { Context } from "../../appContext";
import ClearBookmarksButton from "../../components/Buttons/ClearBookmarksButton";
import ResourceList from "../../components/ResourceList/ResourceList";

export default function Bookmarks() {
  const { bookmarks, setPageTitle } = useContext(Context);

  useEffect(() => {
    setPageTitle("Bookmarks | Coding Resource Finder");
    // eslint-disable-next-line
  }, []);

  return (
    <main className="resource-list">
      {bookmarks.length ? (
        <>
          <ClearBookmarksButton />
          <div className="resources-list">
            <ResourceList resources={bookmarks} />
          </div>
        </>
      ) : (
        <h2 className="content-placeholder">No bookmarks yet...</h2>
      )}
    </main>
  );
}
