import React, { useState, ReactElement } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useQueryClient } from "react-query";

import DisplayTaskComponent from "./components";
import Modal from "../../Shared/components/Modal";
import Loader from "../../Shared/components/Loader";

import { removeTodo } from "../../services/todos.services";
import { useGetTodoById, useUpdateTodo } from "../../CustomHooks/QueryHooks";

import { ROUTES } from "../../appContants";
import { RQ_KEY_TODO, RQ_KEY_TODOS, TASK_STATE } from "../../constant";

const DisplayTaskContainer = (): ReactElement => {
  const { id } = useParams();
  const [openModal, setOpenModal] = useState<boolean>(false);
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { data, isLoading, isError } = useGetTodoById({ id });

  const deleteTodo = (todoId?: number) => {
    removeTodo(todoId);
    navigate(ROUTES.HOME);
  };

  const onUpdateSuccess = () => {
    queryClient.invalidateQueries(RQ_KEY_TODO);
    queryClient.invalidateQueries(RQ_KEY_TODOS);
  };

  const { mutate } = useUpdateTodo({ onSuccess: onUpdateSuccess });

  const markTodoCompleted = (status: string) => {
    let tempObj = {
      ...data,
      completed: status === TASK_STATE.COMPLETED,
    };
    mutate({ id: tempObj.id, body: tempObj });
  };

  const btn1Handler = () => {
    deleteTodo(data?.id);
  };

  const btn2Handler = () => {
    setOpenModal(!openModal);
  };

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <div>Error..</div>;
  }

  return (
    <>
      <Modal
        isOpen={openModal}
        title="Delete"
        body="Are you sure?"
        btn1="Yes"
        btn2="No"
        btn1Handler={btn1Handler}
        btn2Handler={btn2Handler}
      />
      <DisplayTaskComponent
        data={data}
        markTodoCompleted={markTodoCompleted}
        modalHandler={btn2Handler}
      />
    </>
  );
};

export default React.memo(DisplayTaskContainer);
