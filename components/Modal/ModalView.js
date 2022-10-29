import { Modal, TextInput } from "@mantine/core";
import { useState } from "react";
import styles from "../Modal/ModalView.module.css"
function ModalView({ opened, setopened }) {
  return (
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
      <div
      className={styles.Container}
      >
      <div>
        <div>Name</div>
        <div>
        
          <TextInput  withAsterisk />
        </div>
      </div>
      <div>
        <div>Name</div>
        <div>
        
          <TextInput  withAsterisk />
        </div>
      </div>
      <div>
        <div>Name</div>
        <div>
        
          <TextInput  withAsterisk />
        </div>
      </div>
      <div>
        <div>Name</div>
        <div>
        
          <TextInput  withAsterisk />
        </div>
      </div>
      <div>
        <div>Name</div>
        <div>
        
          <TextInput  withAsterisk />
        </div>
      </div>
      <div>
        <div>Name</div>
        <div>
        
          <TextInput  withAsterisk />
        </div>
      </div>
      <div>
        <div>Name</div>
        <div>
        
          <TextInput  withAsterisk />
        </div>
      </div>
      </div>
     
    </Modal>
  );
}

export default ModalView;
