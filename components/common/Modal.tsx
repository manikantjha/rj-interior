import { ReactNode } from "react";

interface IModalProps {
  isOpen: boolean;
  handleClose: () => void;
  modalTitle: string;
  renderContent?: () => ReactNode;
  renderButtons?: () => ReactNode;
}

export default function Modal(props: IModalProps) {
  return (
    <div className="">
      {/* <!-- Main modal --> */}
      <div
        tabIndex={-1}
        className="bg-black/50 fixed top-0 left-0 right-0 bottom-0 z-[1110] p-4 overflow-x-hidden overflow-y-auto"
      >
        <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] max-w-2xl w-full max-h-full p-4">
          {/* <!-- Modal content --> */}
          <div className="relative bg-white rounded-lg shadow">
            {/* <!-- Modal header --> */}
            <div className="flex items-start bg-bgDark justify-between p-4 border-b rounded-t dark:border-black">
              <h3 className="text-xl font-semibold text-textLight">
                {props.modalTitle}
              </h3>
              <button
                type="button"
                className="text-textLight bg-transparent hover:bg-bgLight hover:text-textDark rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
                onClick={props.handleClose}
              >
                <svg
                  aria-hidden="true"
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            {/* <!-- Modal body --> */}
            {props.renderContent && props.renderContent()}
            {/* <!-- Modal footer --> */}
            {props.renderButtons && (
              <div className="flex items-center p-4 md:p-5 space-x-2 border-t border-borderDark rounded-b">
                {props.renderButtons()}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
