// pages/ArticleDetail.jsx
import React from "react";
import { useParams } from "react-router-dom"; 
import { writeups } from "../../data/writeups";
import writeupRegistry from "../../data/writeupPages";

function ArticleDetail() {
  const { id, subpageId } = useParams(); 
  const writeup = writeups.find((a) => a.id === id);

  if (!writeup) {
    return <div className="text-white">Article not found.</div>;
  }

  const registryEntry = writeupRegistry[id];
  if (!registryEntry) {
    return <div className="text-white">No content registered.</div>;
  }

  // Pick correct component
  const ContentComponent = subpageId
    ? registryEntry.children?.[subpageId]
    : registryEntry.main;

  // Optional: map subpageId -> nice title
  const subpageTitle = subpageId
    ? writeup.children?.find((c) => c.id === subpageId)?.title || subpageId
    : null;

  return (
<div className="min-h-screen w-full max-w-4xl mx-auto bg-black text-white p-10">
  {/* Title */}
  <h1 className="text-4xl text-green-500 font-bold mb-6 text-center">
    {subpageId ? `${writeup.title} – ${subpageTitle}` : writeup.title}
  </h1>

  {/* Banner */}
  {!subpageId && writeup.image && (
    <div className="flex justify-center mb-6">
      <img
        src={writeup.image}
        alt={writeup.title}
        className="w-full max-w-3xl rounded"
      />
    </div>
  )}

  {/* Content */}
  <div
    style={{ fontSize: "1.0rem" }}
    className="space-y-6 w-full max-w-3xl mx-auto text-justify"
  >
    {ContentComponent ? <ContentComponent /> : <p>Coming soon...</p>}
  </div>
</div>


  );
}

export default ArticleDetail;
