import React, { useState } from "react";
import Modal from "./Modal";
import QuestionPage1 from "./QuestionPage1";
import QuestionPage2 from "./QuestionPage2";
import QuestionPage3 from "./QuestionPage3";

function QuestionModal(props) {
  const [currentPage, setCurrentPage] = useState(1);

  function handleNextPage() {
    setCurrentPage(currentPage + 1);
  }

  function handlePrevPage() {
    setCurrentPage(currentPage - 1);
  }

  function handleClose() {
    setCurrentPage(1);
    props.onClose();
  }

  let page;

  switch (currentPage) {
    case 1:
      page = <QuestionPage1 />;
      break;
    case 2:
      page = <QuestionPage2 />;
      break;
    case 3:
      page = <QuestionPage3 />;
      break;
    default:
      page = <QuestionPage1 />;
  }

  return (
    <Modal isOpen={props.isOpen} onClose={handleClose}>
      <div>{page}</div>
      <div>
        {currentPage > 1 && (
          <button onClick={handlePrevPage}>Anterior</button>
        )}
        {currentPage < 3 && (
          <button onClick={handleNextPage}>Próxima</button>
        )}
      </div>
    </Modal>
  );
}

export default QuestionModal;
