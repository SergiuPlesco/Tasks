import React from "react";
import { useParams } from "react-router-dom";

const Post = () => {
  const params = useParams();
  return <div>post {params.id}</div>;
};

export default Post;
