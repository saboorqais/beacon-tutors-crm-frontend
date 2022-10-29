import { Modal, TextInput } from "@mantine/core";
import { useState } from "react";
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
      <div>
        <div>Name</div>
        <div>
        
          <TextInput placeholder="Your name" label="Full name" withAsterisk />
        </div>
      </div>
      <div>
        <div>Name</div>
        <div>
        
          <TextInput placeholder="Your name" label="Full name" withAsterisk />
        </div>
      </div>
      <div>
        <div>Name</div>
        <div>
        
          <TextInput placeholder="Your name" label="Full name" withAsterisk />
        </div>
      </div>
      <div>
        <div>Name</div>
        <div>
        
          <TextInput placeholder="Your name" label="Full name" withAsterisk />
        </div>
      </div>
      <div>
        <div>Name</div>
        <div>
        
          <TextInput placeholder="Your name" label="Full name" withAsterisk />
        </div>
      </div>
      <div>
        <div>Name</div>
        <div>
        
          <TextInput placeholder="Your name" label="Full name" withAsterisk />
        </div>
      </div>
      <div>
        <div>Name</div>
        <div>
        
          <TextInput placeholder="Your name" label="Full name" withAsterisk />
        </div>
      </div>
    </Modal>
  );
}

export default ModalView;
