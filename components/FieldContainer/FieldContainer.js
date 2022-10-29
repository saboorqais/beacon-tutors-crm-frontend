import React, { useEffect, useState } from "react";
import Field from "../Field/Field";
import styles from "../FieldContainer/FieldContainer.module.css";
import {
  collection,
  getDocs,
  query,
  where,
  orderBy,
  limit,
  startAfter,
} from "firebase/firestore/lite";
import { db } from "../../firebase";
import InquiriesService from "../Services/InquiriesService";
import ModalView from "../Modal/ModalView";
export default function FieldContainer() {
  const [opened, setopened] = useState(false)
  const [inquiries, setinquiries] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      InquiriesService()
        .then((res) => {
          console.log(res);
          setinquiries(res.data);
        })
        .catch((res) => {
          console.log(res);
        });
    };
    fetchData();
  }, []);

  return (
    <div className={styles.Container}>
      <ModalView opened={opened} setopened={setopened} />
      <div className={styles.InnerContainer}>
        {inquiries &&
          inquiries.map((item) => {
            console.log(item.name);
            return <Field name={item.name} setopened={setopened} opened={opened}/>;
          })}
      </div>
    </div>
  );
}
