import React from "react";
import Feed from "./Feed";
const Home = ({ posts, isLoading, fetchError }) => {
  return (
    <main className="Home">
      {/* {posts.length ? (
        <Feed posts={posts} />
      ) : (
        <p style={{ marginTop: "2rem" }}>No Posts to Display</p>
      )} */}
      {isLoading && <p className="statusMsg">Loading Posts...</p>}
      {!isLoading && fetchError && (
        <p className="statusMsg" style={{ color: "red" }}>
          {fetchError}
        </p>
      )}
      {!isLoading &&
        !fetchError &&
        (posts.length ? (
          <Feed posts={posts} />
        ) : (
          <p className="statusMsg">No Posts to Display</p>
        ))}
    </main>
  );
};

export default Home;
