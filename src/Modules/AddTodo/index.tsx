import React, { ReactElement, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useQueryClient } from "react-query";

import AddTodoComponent from "./components";
import Modal from "../../Shared/components/Modal";

import { useAddTodo } from "../../CustomHooks/QueryHooks";

import { ROUTES } from "../../appContants";
import { RQ_KEY_TODOS } from "../../constant";
import { ToDoPostData } from "../../data/types/types";

const AddTodoContainer = (): ReactElement => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const onSuccess = () => {
    queryClient.invalidateQueries(RQ_KEY_TODOS);
  };

  const onError = () => {
    alert(error);
  };

  const { mutate: addTodo, error } = useAddTodo({ onSuccess, onError });

  const handleSubmit = async (values: ToDoPostData,actions:any) => {
    addTodo({ body: values });
    actions.resetForm();
    setOpenModal(true);
  };

  const btn1Handler = () => {
    queryClient.invalidateQueries(RQ_KEY_TODOS);
    navigate(ROUTES.HOME);
  };

  const btn2Handler = () => {
    setOpenModal(!openModal);
  };

  return (
    <>
      <Modal
        isOpen={openModal}
        title="Hello Planner!"
        body="Task Added Successfully"
        btn1="Show List"
        btn2="Add More..."
        btn1Handler={btn1Handler}
        btn2Handler={btn2Handler}
      />
      <AddTodoComponent handleSubmit={handleSubmit} />
    </>
  );
};

export default React.memo(AddTodoContainer);
