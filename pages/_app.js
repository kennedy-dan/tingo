import "@/styles/globals.css";
// import { Provider } from "react-redux";
import { persistor, store } from "../store/index.js";
import { PersistGate } from "redux-persist/integration/react";
import { ToastContainer, Zoom, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import AxiosConfig from "@/components/AxiosConfig";
import { Provider, useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getcartData } from "@/store/slice/productSlice.js";

export default function App({ Component, pageProps }) {

  
  return (
    <Provider store={store}>
        <ToastContainer
          position="top-center"
          autoClose={1000}
          hideProgressBar={true}
          pauseOnFocusLoss={false}
          transition={Zoom}

          // limit={1}
        />
        <PersistGate loading={null} persistor={persistor}>
          <AxiosConfig>
            <Component {...pageProps} />
          </AxiosConfig>
        </PersistGate>
    </Provider>
  );
}
