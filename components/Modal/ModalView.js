import { Modal } from "@mantine/core";
import DeleteIcon from "@mui/icons-material/Delete";
import InfoField from "../InfoField/InfoField";
import styles from "../Modal/ModalView.module.css";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@mui/system";
function ModalView({
  opened,
  setopened,
  data,
  inquiries,
  setinquiries,
  setbool,
  bool,
  selectedId
}) {
  const theme = createTheme({
    status: {
      danger: "#e53e3e",
    },
    palette: {
      primary: {
        main: "#053e85",
        darker: "#053e85",
      },
      neutral: {
        main: "#ffff",
        contrastText: "#fff",
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <Modal
        opened={opened}
        onClose={() => setopened(false)}
        transition="fade"
        transitionDuration={600}
        transitionTimingFunction="ease"
        radius={18}
        title="View inquiry"
        closeButtonLabel="X"
      >
        <div className={styles.Container}>
          <div className={styles.InnerContainer}>
            <div className={styles.nameContainer}>Name</div>
            <div className={styles.InputContainer}>
              <InfoField value={data.name} />
            </div>
          </div>
          <div className={styles.InnerContainer}>
            <div className={styles.nameContainer}>City</div>
            <div className={styles.InputContainer}>
              <InfoField value={data.city} />
            </div>
          </div>
          <div className={styles.InnerContainer}>
            <div className={styles.nameContainer}>Email</div>
            <div className={styles.InputContainer}>
              <InfoField value={data.email} />
            </div>
          </div>
          <div className={styles.InnerContainer}>
            <div className={styles.nameContainer}>Contact</div>
            <div className={styles.InputContainer}>
              <InfoField value={data.contact} />
            </div>
          </div>
          <div className={styles.InnerContainer}>
            <div className={styles.nameContainer}>Whatsapp Number</div>
            <div className={styles.InputContainer}>
              <InfoField value={data.WhatsappNumber} />
            </div>
          </div>
          <div className={styles.InnerContainer}>
            <div className={styles.nameContainer}>Who are You</div>
            <div className={styles.InputContainer}>
              <InfoField value={data.status} />
            </div>
          </div>
          <div className={styles.InnerContainer}>
            <div className={styles.nameContainer}>You Want to hire</div>
            <div className={styles.InputContainer}>
              <InfoField value={data.hiring} />
            </div>
          </div>

          <div className={styles.InnerContainer}>
            <div className={styles.nameContainer}>Comments</div>
            <div className={styles.InputContainer}>
              <InfoField value={data.comment} />
            </div>
          </div>
          <div className={styles.EndContainer}>
            <div className={styles.MarkedButton}>Marked as View</div>
            <div
              className={styles.DeleteButton}
              onClick={() => {
                setopened(false);
                const mockbool = [...bool];
                mockbool[selectedId[1]] = false;
                setbool(mockbool);
                const list = inquiries.filter((item)=>(
                  item.id!=selectedId[0]
                ));
                setinquiries(list)
              }}
            >
              <DeleteIcon color="neutral" />
            </div>
          </div>
        </div>
      </Modal>
    </ThemeProvider>
  );
}

export default ModalView;
