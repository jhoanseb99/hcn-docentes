import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import ProgressBar from "react-bootstrap/ProgressBar";
import { actions as hcnRedux } from "../_redux/hcnRedux";
import BaseSection from "../../../components/UI/BaseSection";
import HcnForm from "../components/HcnForm";

function CreateHcnPage() {
  const dispatch = useDispatch();
  const history = useHistory();

  const saveHCN = hcn_data => {
    dispatch(hcnRedux.createHcn({ GeneralData: hcn_data, TeacherID: 50001 }))
      .then(() => history.push("/courses/clinical-cases"))
  };

  return (
    <div className="card">
      <div className="card-body">
        <BaseSection title="Crear Historia Clínica Nutricional"
          component={
            () => <ProgressBar className="mb-3" now={60} label={`Progreso de la hcn %`} />
          }
        >
          <HcnForm handleSubmit={saveHCN} handleReturn={() => history.push("/courses/hcn")} />
        </BaseSection>
      </div>
    </div>
  );
}

export default CreateHcnPage;