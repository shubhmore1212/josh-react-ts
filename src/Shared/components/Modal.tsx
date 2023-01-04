interface IProps {
  isOpen: boolean;
  title: string;
  body: string;
  btn1: string;
  btn2: string;
  btn1Handler: () => void;
  btn2Handler: () => void;
}
const Modal = (props: IProps) => {
  const { isOpen, title, body, btn1, btn2, btn1Handler, btn2Handler } = props;
  
  return (
    <>
      {isOpen && (
        <div className="modalBackground">
          <div className="modal-container">
            <div className="title">
              <h2>{title}</h2>
            </div>
            <div className="body">
              <p>{body}</p>
            </div>
            <div className="footer">
              <button onClick={btn1Handler}>{btn1}</button>
              <button onClick={btn2Handler}>{btn2}</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
