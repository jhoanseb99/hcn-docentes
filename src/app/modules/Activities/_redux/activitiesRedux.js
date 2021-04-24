import { createSlice } from "@reduxjs/toolkit";
import * as requestFromServer from "./activitiesCrud";
import * as authRedux from "../../Auth/_redux/authRedux";

import { ACTIVITIES } from "../../../const/data";

const initActivitiesState = {
  activitieslist: [],
};

const actionTypes = {
  set_list: "SET_LIST"
};

const setList = list => dispatch => {
  dispatch(activitiesSlice.actions.setList({ type: actionTypes.set_list, list }));
};

const getActivitiesList = () => (dispatch, getState) => {
  const CourseID = getState().courses.currentCourse.id;
  const userId = getState().auth.user.ID;
  return requestFromServer.getAllActivities({ CourseID }, getState().auth.authToken)
    .then(data => {
      dispatch(activitiesSlice.actions.setList({ 
        type: actionTypes.set_list, 
        list: data
          .filter(value => (value.CourseID === CourseID && value.TeacherID === userId))
          .sort((a, b) => new Date(b.CreationDate) - new Date(a.CreationDate))
      }));
    })
    .catch(err => {
      console.log(err);
      dispatch(activitiesSlice.actions.setList({ type: actionTypes.set_list, list: ACTIVITIES }));
    });
};

const updateActivity = props => (dispatch, getState) => {
  const CourseID = getState().courses.currentCourse.id;
  return requestFromServer.updateActivity({ ...props, CourseID }, getState().auth.authToken)
  .then(() => {
    dispatch(getActivitiesList());
  })
  .catch(err => {
    console.log(err);
  });
};

const createActivity = props => (dispatch, getState) => {
  console.log("creating")
  const CourseID = getState().courses.currentCourse.id;
  return requestFromServer.createActivity({ ...props, CourseID }, getState().auth.authToken)
  .then(() => {
    dispatch(getActivitiesList());
  })
  .catch(err => {
    console.log(err);
  });
};

const deleteActivity = id => (dispatch, getState) => {
  return requestFromServer.deleteActivity({ ID: id }, getState().auth.authToken)
  .then(() => {
    dispatch(getActivitiesList());
  })
  .catch(err => {
    console.log(err);
  });
};

export const actions = {
  setList,
  getActivitiesList,
  updateActivity,
  createActivity,
  deleteActivity,
};

export const activitiesSlice = createSlice({
  name: "Activies",
  initialState: initActivitiesState,
  reducers: {
    setList: (state, action) => {
      const { list } = action.payload;
      state.activitieslist = list;
    },
  }
});