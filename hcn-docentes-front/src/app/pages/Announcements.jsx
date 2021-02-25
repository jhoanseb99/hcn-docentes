import React from "react";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";

import CreateAnnDialog from "../modules/Announcements/components/CreateAnnDialog.jsx";
import { actions } from "../modules/Announcements/_redux/annRedux";

export default function Announcements() {
  const { announcementslist } = useSelector(state => state.announcements);
  const dispatch = useDispatch();

  const [ openCreateDialog, setOpenCreateDialog ] = React.useState(false);

  React.useEffect(() => {
    dispatch(actions.getAnnouncementsList());
  }, [dispatch]);

  return (
    <div className="container">
      {/* titulo */}
      <div className="row pb-5">
        <div className="col">
          <h3 className="text-dark">Anuncios</h3>  
        </div>
        <div className="col text-right">
          <div className="align-self-center ml-3">
            <a 
              className="btn btn-primary btn-circle font-weight-bolder"
              onClick={() => setOpenCreateDialog(true)}
            >
              +
            </a> 
          </div>
        </div>
      </div>
      {/* anuncios */}
      {announcementslist.map((value, index) => (
        <div key={index} className="row">
          {/* Card */}
          <div className="card custom-card p-3 mb-5 bg-white rounded">
            {/* Card::body */}
            <div className="card-body pt-3">
              {/* Card::body::title */}
              <div className="card-title">
                <div className="row">
                  <div className="col">
                    <strong className="align-self-center">{ value.Title }</strong> 
                  </div>
                  <div className="col text-right">
                    {/* <a className="btn btn-info font-weight-bolder font-size-sm mr-3">editar</a> */}
                    <a className="btn btn-danger font-weight-bolder font-size-sm mr-3">eliminar</a>
                  </div>
                </div>
              </div>
              {/* Card::body::info */}
              <div className="card-body p-0">
                { value.Description }
              </div>
              <div className="card-body p-0 pt-2">
                <small className="text-muted font-weight-bold d-block">
                  { moment(value.CreationDate).format("DD-MM-YYYY") }
                </small>
              </div>
            </div>
          </div> 
        </div>
      ))}
      
      <CreateAnnDialog
        open={openCreateDialog}
        handleClose={() => setOpenCreateDialog(false)}
      />
    </div>
  );
}