import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import UserController from "../controllers/UserController";
import { FormGroups } from "../components/FormGroups";
import { UserLogin } from "../models/UserModel";

import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { userContext } from "../contexts/UserContext";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const {saveUserDataOnStorage} = useContext(userContext);

  const navigate = useNavigate();

  const sendForm = async (ev) => {
    ev.preventDefault();
    const userController = new UserController();

    try {
      const user = new UserLogin(email, password);
      setLoading(true);
      const result = await userController.login(user);

      if (result.success) {
        alert(result.message);
        saveUserDataOnStorage(result.data);
        resetFields();
        return navigate("/admin");
      } else {
        alert(`Erro: ${result.message}`);
      }
    } catch (error) {
      alert(`Erro: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  const resetFields = () => {
    setEmail("");
    setPassword("");
  };

  // const saveUserDataOnStorage = (data) => {
  //   const decodedUser = jwtDecode(data);
  //   sessionStorage.setItem("user", JSON.stringify(decodedUser));
  //   sessionStorage.setItem("token", data);
  // };

  return (
    <main className="py-8 px-4">
      <div className="container mx-auto max-w-5xl flex justify-center items-center">
        <div className="w-full sm:w-3/5 bg-capi_gray_login_darker rounded-3xl text-white shadow-2xl">
          <div className="text-center bg-capi_gray_login px-2 py-6 rounded-t-3xl mb-14">
            <h2 className="font-headline text-xl font-bold">
              Olá, seja bem-vindo ao CapiTech
            </h2>
          </div>
          <div className="text-center px-8 md:px-12">
            <p>
              Atenção, o login só pode ser realizado por administradores do
              sistema!
            </p>

            <form
              className="my-14 flex flex-col items-center gap-8"
              onSubmit={sendForm}
            >
              <FormGroups
                value={email}
                setValue={setEmail}
                label={"E-mail"}
                idInput={"email"}
                inputType={"email"}
              />
              <FormGroups
                value={password}
                setValue={setPassword}
                label={"Senha"}
                idInput={"password"}
                inputType={"password"}
              />

              <div className="flex flex-col gap-5">
                <button className="capiButtons flex items-center justify-center gap-2 text-black bg-capi_blue hover:bg-blue-400 shadow-xl">
                  {loading && (
                    <AiOutlineLoading3Quarters className="animate-spin" />
                  )}
                  Login
                </button>
                <Link
                  to="/cadastro"
                  className="capiButtons text-black bg-capi_green hover:bg-green-400 shadow-xl"
                >
                  Registre-se
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};
