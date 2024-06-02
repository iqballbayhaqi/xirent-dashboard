import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setPageTitle } from "../../features/common/headerSlice";
import Verifikasi from "../../features/verifikasi-ktp";

function InternalPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPageTitle({ title: "Verifikasi Ktp" }));
  }, []);

  return <Verifikasi />;
}

export default InternalPage;
