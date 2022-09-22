import {
  getSingleEntry,
  likeAnEntry,
  listEntries,
  newEntry,
  sendCommentToEntry,
  viewEntryComments,
} from "./entries";

import { getUser,
    registerUserService, 
    loginUserService, 
    editUserService, 
    userIdProfileServices, 
    ownUserProfileServices, 
    userProfileServices 
} from "./users";

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
    registerUserService,
    loginUserService,
    editUserService,
    userIdProfileServices,
    ownUserProfileServices,
    userProfileServices
  },
};
