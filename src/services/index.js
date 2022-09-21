import {
  getSingleEntry,
  likeAnEntry,
  listEntries,
  newEntry,
  sendCommentToEntry,
  viewEntryComments,
} from "./entries";
import { getUser } from "./users";

export const services = {
  entries: {
    newEntry,
    sendCommentToEntry,
    likeAnEntry,
    listEntries,
    getSingleEntry,
    viewEntryComments,
  },
  users: {
    getUser,
  },
};
