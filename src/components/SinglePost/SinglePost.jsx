import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import { services } from "../../services";
import { PostCard } from "../PostCard/PostCard";

export const SinglePost = () => {
  const { token } = useContext(AuthContext);
  const { entryId } = useParams();
  const [singlePost, setSinglePost] = useState(undefined);

  useEffect(() => {
    const getEntry = async () => {
      const {
        data: { fullEntry },
      } = await services.entries.getSingleEntry({ idEntry: entryId, token });

      const {
        data: { entryComments },
      } = await services.entries.viewEntryComments({
        idEntry: entryId,
        token,
      });

      const post = [{ ...fullEntry, comments: entryComments }];

      setSinglePost(post[0]);
    };

    getEntry();
  }, [entryId]);

  return (
    singlePost !== undefined && (
      <PostCard post={singlePost} token={token} singlePost={true}></PostCard>
    )
  );
};
