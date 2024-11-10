import { memo } from "react";
import type { FC, ReactNode } from "react";

interface IInvoicesProps {
  children?: ReactNode;
}

const Invoices: FC<IInvoicesProps> = () => {
  return (
    <div>
      Invoices
    </div>
  );
};

export default memo(Invoices);