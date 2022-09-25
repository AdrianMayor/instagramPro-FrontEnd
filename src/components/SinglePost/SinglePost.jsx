import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { services } from "../../services";
import { PostCard } from "../PostCard/PostCard";

export const SinglePost = () => {
  const { entryId } = useParams();
  const [singlePost, setSinglePost] = useState(undefined);
  /*   const [commentIndex, setCommentIndex] = useState(undefined); */

  useEffect(() => {
    const getEntry = async () => {
      const {
        data: { fullEntry },
      } = await services.entries.getSingleEntry({ idEntry: entryId });

      const {
        data: { entryComments },
      } = await services.entries.viewEntryComments({
        idEntry: entryId,
      });

      const post = [{ ...fullEntry, comments: entryComments }];

      setSinglePost(post[0]);
      /*       setCommentIndex(index); */
    };

    getEntry();
  }, [entryId]);

  /* console.log(commentIndex); */
  return (
    singlePost !== undefined && (
      <PostCard post={singlePost} singlePost={true}></PostCard>
    )
  );
};
