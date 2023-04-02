import { Textarea } from "@mantine/core";
import { showNotification } from "@mantine/notifications";
import { IconX } from "@tabler/icons";
import { Save } from "lucide-react";
import React, { useState } from "react";
import { toast } from "react-hot-toast";

import styles from "../Addform/AddForm.module.css";
import InfoField from "../InfoField/InfoField";
import SelectionBox from "../SelectionBox/SelectionBox";
import SelectionBoxHiring from "../SelectionBox/SelectionBoxHiring";
import { PostInquiry } from "../Services/InquiriesService";
import TextFields from "../TextField/TextField";
import TextField from "../TextField/TextField";
function Addform() {
  const [hiring, sethiring] = useState();
  const [city, setcity] = useState();
  const [Data, setData] = useState({});
  console.log(Data);
  const save = async () => {
    const Payload = {
      Name: Data["Name"] ? Data["Name"] : null,
      Whatsapp: Data["Whatsapp"] ? Data["Whatsapp"] : null,
      City: Data["City"] ? Data["City"] : null,
      Contact: Data["Contact"] ? Data["Contact"] : null,
      Email: Data["Email"] ? Data["Email"] : null,
      Hiring: Data["Hiring"] ? Data["Hiring"] : null,
      Comments: Data["Comments"] ? Data["Comments"] : null,
    };


    const response = PostInquiry(Payload)
    await toast.promise(response,{
        loading: 'Saving Inquiry...',
        success: 'Inquiry Saved successfully',
        error: 'Error Saving Inqiury',
      })
  };
  return (
    <div className={styles.Container}>
      <div className={styles.InnerContainer}>
        <div className={styles.nameContainer}>Name</div>
        <div className={styles.InputContainer}>
          <TextFields
            Data={Data}
            setData={setData}
            placeholder="Full Name"
            type={"Name"}
          />
        </div>
      </div>
      <div className={styles.InnerContainer}>
        <div className={styles.nameContainer}>City</div>
        <div className={styles.ChoiceContainer}>
          <SelectionBox
            Data={Data}
            setData={setData}
            setcity={setcity}
            id={1}
            value={"Lahore"}
            active={city === 1}
          />
          <SelectionBox
            Data={Data}
            setData={setData}
            setcity={setcity}
            id={2}
            value={"Karachi"}
            active={city === 2}
          />
          <SelectionBox
            Data={Data}
            setData={setData}
            setcity={setcity}
            id={3}
            value={"Islamabad"}
            active={city === 3}
          />
          <SelectionBox
            Data={Data}
            setData={setData}
            setcity={setcity}
            id={4}
            value={"Others"}
            active={city === 4}
          />
        </div>
      </div>
      <div className={styles.InnerContainer}>
        <div className={styles.nameContainer}>Email</div>
        <div className={styles.InputContainer}>
          <TextFields
            Data={Data}
            setData={setData}
            placeholder="Email"
            type={"Email"}
          />
        </div>
      </div>
      <div className={styles.InnerContainer}>
        <div className={styles.nameContainer}>Contact</div>
        <div className={styles.InputContainer}>
          <TextFields
            Data={Data}
            setData={setData}
            placeholder="Contact"
            type={"Contact"}
          />
        </div>
      </div>
      <div className={styles.InnerContainer}>
        <div className={styles.nameContainer}>Whatsapp Number</div>
        <div className={styles.InputContainer}>
          <TextFields
            Data={Data}
            setData={setData}
            placeholder="Whatsapp"
            type={"Whatsapp"}
          />
        </div>
      </div>

      <div className={styles.InnerContainer}>
        <div className={styles.nameContainer}>You Want to hire</div>
        <div className={styles.ChoiceContainer}>
          <SelectionBoxHiring
            Data={Data}
            setData={setData}
            sethiring={sethiring}
            id={1}
            value={"Online Tutor"}
            active={hiring === 1}
          />
          <SelectionBoxHiring
            Data={Data}
            setData={setData}
            sethiring={sethiring}
            id={2}
            value={"Home Tutor"}
            active={hiring === 2}
          />
          <SelectionBoxHiring
            Data={Data}
            setData={setData}
            sethiring={sethiring}
            id={3}
            value={"Content Writer"}
            active={hiring === 3}
          />
        </div>
      </div>

      <div className={styles.InnerContainer}>
        <div className={styles.nameContainer}>Comments</div>
        <div className={styles.InputContainer}>
          <Textarea
            onChange={(evnt) => {
              setData({ ...Data, Comments: evnt.target.value });
            }}
            placeholder="Comments"
            withAsterisk
          />
        </div>
      </div>
      <div className={styles.ContainerCenter}>
        <div 
        onClick={()=>{
            save()
        }}
        className={styles.EndButtonContainer}>
          <Save size={25} />
          <p>Save Inquiry</p>
        </div>
      </div>
    </div>
  );
}

export default Addform;
