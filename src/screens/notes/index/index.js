import React, { Fragment, useState } from "react";
import HeaderLogged from "../../../components/header_logged";
// import Header from "../../../components/header";
import Notes from "../../../components/notes";

const NotesScreen = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Fragment>
      {/* <Header setIsOpen={setIsOpen} /> */}
      <HeaderLogged setIsOpen={setIsOpen} />
      <Notes setIsOpen={setIsOpen} isOpen={isOpen} />
    </Fragment>
  );
};

export default NotesScreen;
