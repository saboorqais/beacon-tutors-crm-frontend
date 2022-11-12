import React, { useEffect, useState } from "react";
import Field from "../Field/Field";
import styles from "../FieldContainer/FieldContainer.module.css";
import ModalView from "../Modal/ModalView";
import Loading from "../Loading/Loading";
import { InquiriesSlice, selectInquiries } from "../Reducers/Inquiries";
import { useDispatch, useSelector } from "react-redux";
import { selectPageState } from "../Reducers/Pagination";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import PopUpAnimations from "../../styles/Animations/ScaleFadeDelayedAnimation.module.css";
import InquiriesService, { DeleteInquiry } from "../Services/InquiriesService";
export default function FieldContainer() {
  const [opened, setopened] = useState(false);
  const [inquiries, setinquiries] = useState([]);
  const [loading, setloading] = useState(false);
  const [modalData, setmodalData] = useState({});
  const PageState = useSelector(selectPageState);
  const Inquiries = useSelector(selectInquiries);
  const [selectedId, setselectedId] = useState([0, 0]);
  const [mockList, setmockList] = useState([]);
  const [bool, setbool] = useState([]);
  const dispatch = useDispatch()
  useEffect(() => {
    setinquiries(Inquiries);
    const mockbool = [];

    Inquiries.map((item, index) => {
      mockbool[index] = true;
    });
    setbool(mockbool);
  }, [PageState, Inquiries]);
  
  return (
    <div className={styles.Container}>
      <ModalView
        opened={opened}
        setopened={setopened}
        data={modalData}
        inquiries={inquiries}
        setinquiries={setmockList}
        setbool={setbool}
        bool={bool}
        selectedId={selectedId}
      />

      <div className={styles.InnerContainer}>
        {inquiries &&
          bool &&
          inquiries.map((item, index) => {
            return (
              <CSSTransition
                
                key={`${index}+${PageState}` }
                in={bool[index]}
                appear={bool[index]}
                timeout={1250}
                unmountOnExit
                classNames={PopUpAnimations}
                onExited={() => {
                  setinquiries(mockList);
                
                  const response = DeleteInquiry(selectedId[0]);
             
                  response.then((res) => {
                    
                    const responseInquiry = InquiriesService(PageState);

                    responseInquiry.then((res) => {
                      
                      dispatch(InquiriesSlice.actions.setAllInquiries(res.data));
                      
                    });
                  });

                  const mockbool = [];
                  inquiries.map((item, index) => {
                    mockbool[index] = true;
                  });
                
                  setbool(mockbool);
                }}
              >
                <Field
                  id={item.id}
                  selected={index}
                  data={item}
                  name={item.name}
                  setopened={setopened}
                  opened={opened}
                  setmodalData={setmodalData}
                  key={`${item.id}+${PageState}`}
                  setselectedId={setselectedId}
                />
              </CSSTransition>
            );
          })}

        {loading && <Loading loading={true} />}
      </div>
    </div>
  );
}
