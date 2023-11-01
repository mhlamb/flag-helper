import { ReactNode } from "react";

interface Props {
  onclick: () => void;
  children: ReactNode;
}

const RangeButton = ({ onclick, children }: Props) => {
  return (
    <button
      onClick={onclick}
      className="m-1 p-3 border range-button hover:bg-slate-100"
    >
      {children}
    </button>
  );
};

export default RangeButton;
