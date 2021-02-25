import makeRequest from "../../../const/Crud";
import { getQueryParams } from "../../../const";

export const PATH_ANNOUNCEMENTS = "/Announcements";

export const PATH_GET_ALL_ANNOUNCEMENTS = PATH_ANNOUNCEMENTS + "/GetAllAnnouncements";
export const PATH_GET_ANNOUNCEMENT = PATH_ANNOUNCEMENTS + "/GetAnnouncement";
export const PATH_UPDATE_ANNOUNCEMENT = PATH_ANNOUNCEMENTS + "/UpdateAnnouncement";
export const PATH_CREATE_ANNOUNCEMENT = PATH_ANNOUNCEMENTS + "/CreateAnnouncement";
export const PATH_DELETE_ANNOUNCEMENT = PATH_ANNOUNCEMENTS + "/DeleteAnnouncement";

export function getAllAnnouncements(params, authToken) {
  return new Promise((resolve, reject) => {
    makeRequest({
      path: PATH_GET_ALL_ANNOUNCEMENTS + getQueryParams(params), 
      method: "GET",
      headers: new Headers(),
    })
    .then(response => {
      if(!response.ok) throw new Error(response.status);
      return response.json();
    })
    .then(response => resolve(response))
    .catch(err => reject(err.message)); 
  });
}

export function getAnnouncements(params, authToken) {
  return makeRequest({
    path: PATH_GET_ANNOUNCEMENT + getQueryParams(params), 
    method: "GET",
    headers: new Headers(),
  });
}

export function updateAnnouncements(props, authToken) {
  return makeRequest({
    path: PATH_UPDATE_ANNOUNCEMENT, 
    method: "POST",
    headers: new Headers(),
    body: JSON.stringify({
      ID            : props.id,
      CourseID      : props.course_id,
      Title         : props.title,
      Description   : props.description,
      CreationDate  : props.creation_date,
    }),
  });
}

export function createAnnouncements(props, authToken) {
  return makeRequest({
    path: PATH_CREATE_ANNOUNCEMENT, 
    method: "POST",
    headers: new Headers(),
    body: JSON.stringify({
      ID            : props.id,
      CourseID      : props.course_id,
      Title         : props.title,
      Description   : props.description,
      CreationDate  : props.creation_date,
    }),
  });
}

export function deleteAnnouncements(authToken) {
  return makeRequest({
    path: PATH_DELETE_ANNOUNCEMENT, 
    method: "DELETE",
    headers: new Headers(),
  });
}