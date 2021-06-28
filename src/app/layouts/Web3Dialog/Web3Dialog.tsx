import { DialogModal } from "app/components";
import { toggleShowWeb3 } from "app/store/layout/actions";
import { RootState } from "app/store/types";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Web3Dialog: React.FC<React.HTMLAttributes<HTMLDivElement>> = (props: any) => {
  const { children, className, ...rest } = props;
  const showWeb3Dialog = useSelector<RootState, boolean>(state => state.layout.showWeb3Dialog);
  const dispatch = useDispatch();

  const onCloseDialog = () => {
    dispatch(toggleShowWeb3("close"))
  }

  return (
    <DialogModal
      header="Connect Web3 Wallet"
      open={showWeb3Dialog}
      onClose={onCloseDialog}
      {...rest}
    >

    </DialogModal>
  )
}

export default Web3Dialog;