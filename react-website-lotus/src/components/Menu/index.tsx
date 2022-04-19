import { MenuContainer, IconDiv, IconCloseDiv, ModalDiv } from "./styles";
import { HiMenuAlt4 } from "react-icons/hi";
import { CgClose } from "react-icons/cg";
import { useState } from "react";
import Modal from "@mui/material/Modal";
import MenuItems from "../MenuItems";

function Menu() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <MenuContainer>
      <IconDiv>
        <div onClick={handleOpen}>
          <HiMenuAlt4
            style={{
              color: "black",
              width: 30,
              height: 30,
              marginTop: 6,
            }}
          />
        </div>
      </IconDiv>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
      >
        <ModalDiv>
          <IconCloseDiv>
            <div onClick={handleClose}>
              <CgClose
                style={{
                  color: "black",
                  width: 30,
                  height: 30,
                  marginTop: 6,
                }}
              />
            </div>
          </IconCloseDiv>
          <MenuItems />
        </ModalDiv>
      </Modal>
    </MenuContainer>
  );
}

export default Menu;
