import { useState } from "react";
import Spinner from "../uicomponents/spinner/Spinner";
import GoogleButton from "../uicomponents/buttons/GoogleButton";
import { errorToast, successToast } from "../../utils/toasters";
import { app } from "../../firebase/client";
import {
  GoogleAuthProvider,
  getAuth,
  inMemoryPersistence,
  signInWithPopup,
} from "firebase/auth";

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);

  const auth = getAuth(app);
  auth.setPersistence(inMemoryPersistence);

  const handleLogin = async () => {
    setIsLoading(true);
    try {
      const provider = new GoogleAuthProvider();
      const userCredential = await signInWithPopup(auth, provider);
      const idToken = await userCredential.user.getIdToken();
      const res = await fetch("/api/auth/signin", {
        headers: {
          Authorization: `Bearer ${idToken}`,
        },
      });
      if (!res.ok) {
        errorToast("Algo salió mal, intentalo nuevamente.");
        setIsLoading(false);
        return;
      }
      successToast(
        "Te has logueado con exito, seras redirigido inmediatamente.",
      );
      if (res.redirected) {
        window.location.assign(res.url);
      }
    } catch (error) {
      console.error(error);
      errorToast("Algo salió mal, intentalo nuevamente.");
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w mx-auto flex w-[320px] max-w-[320px] flex-col items-center justify-center">
      <div className="flex h-[300px] min-w-full flex-col rounded-lg border-2 bg-picton-blue-50 text-picton-blue-950 shadow-xl">
        {isLoading ? (
          <Spinner />
        ) : (
          <>
            <div className="mx-8 mb-1 mt-7 flex flex-row justify-start space-x-2">
              <div className="h-7 w-3 bg-picton-blue-400" />
              <div className="w-3 text-center font-sans text-xl font-bold">
                <h1>Login</h1>
              </div>
            </div>
            <div className="my-auto flex items-center justify-center">
              <a onClick={handleLogin}>
                <GoogleButton />
              </a>
            </div>
            <div
              className="mb-5 border-b border-t border-blue-200 bg-blue-100 px-4 py-3 text-blue-900"
              role="alert"
            >
              <p className="font-bold">Acceso Restringido</p>
              <p className="text-justify text-sm">
                Luego de registrarte, un administrador deberá aceptar tu
                solicitud para asignarte como repartidor.
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Login;
