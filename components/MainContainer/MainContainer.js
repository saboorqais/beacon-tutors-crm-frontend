import React from "react";
import FieldContainer from "../Layouts/FieldContainer/FieldContainer";
import PaginationPage from "../Layouts/Pagination/PaginationPage";

function MainContainer() {
  return (
    <div className="MainContainer">
      <div className="HeadingContainer">
        <div className="Heading">Demo Processing</div>
        <div className="TabsHeading">
          <div className="IndividualTab TypographyTabs">
            Demo Reminders/Calling
          </div>
          <div className="IndividualTab ">Client Formalities</div>
          <div className="IndividualTab ">T Formalities</div>
          <div className="IndividualTab ">Day-1 Processing</div>
          <div className="IndividualTab ">Day-2 Processing</div>
          <div className="IndividualTab ">Extended Demo</div>
          <div className="IndividualTab ">Client Reviewing</div>
        </div>
      </div>
      <FieldContainer/>

      <PaginationPage/>
    
    </div>
  );
}

export default MainContainer;
