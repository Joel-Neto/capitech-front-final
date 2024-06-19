import { useContext, useState } from "react";
import { ContactFormGroups } from "../../components/ContactFormGroups";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import UserController from "../../controllers/UserController";
import { userContext } from "../../contexts/UserContext";
import { UserUpdate } from "../../models/UserModel";

export const AdminUpdateProfile = () => {
  const { getUserDataFromStorage, logout } = useContext(userContext);
  const user = getUserDataFromStorage();

  // const [loadingUser, setLoadingUser] = useState(true);
  const [loading, setLoading] = useState(false);

  const [name, setName] = useState(user?.name);
  const [email, setEmail] = useState(user?.email);
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const token = sessionStorage.getItem("token");

  if (!token || !user) {
    alert("Faça login novamente!");
    logout();
    return navigate("/login");
  }

  const sendForm = async (ev) => {
    ev.preventDefault();
    const userController = new UserController();

    try {
      const newUser = new UserUpdate(name, email, password);

      setLoading(true);
      const result = await userController.update(
        token,
        user?._id,
        newUser
      );

      if (result.success) {
        alert(`${result.message}! Faça login novamente.`);
        resetFields();
        logout();
        return navigate("/login");
      } else {
        alert(`Erro: ${result.message}`);
      }
    } catch (error) {
      if (error.message === "401") {
        alert("Token Inválido. Faça login novamente!")
        logout();
        return navigate("/login");
      }
      alert(`Erro: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  const resetFields = () => {
    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <main>
      <section className="container mx-auto max-w-5xl p-10 px-2">
        <h2 className="text-center font-headline font-semibold text-2xl">
          Atualizar Usuário:
        </h2>
        <p className="text-center font-headline font-semibold text-lg">
          Todos os campos são obrigatórios!
        </p>
        <form
          onSubmit={sendForm}
          className="mt-12 flex flex-col items-center gap-8"
        >
          <ContactFormGroups
            value={name}
            setValue={setName}
            label={"Nome"}
            idInput={"name"}
            inputType={"text"}
          />
          <ContactFormGroups
            value={email}
            setValue={setEmail}
            label={"E-mail"}
            idInput={"email"}
            inputType={"email"}
          />
          <div className="w-full flex flex-col gap-2 sm:w-2/3">
            <label
              className="pl-2 text-left font-headline font-semibold"
              htmlFor="password"
            >
              Nova Senha (Caso queira manter a atual, deixe o campo vazio!)
            </label>
            <input
              className="w-full border border-black bg-gray-100 shadow-xl py-3 px-3 rounded-2xl capi_vsm:flex-1"
              type="password"
              id="password"
              value={password}
              onChange={(ev) => setPassword(ev.target.value)}
            />
          </div>

          <button className="capiButtons flex items-center gap-2 text-black bg-capi_blue hover:bg-blue-400 shadow-xl">
            {loading && <AiOutlineLoading3Quarters className="animate-spin" />}
            Enviar
          </button>
        </form>
      </section>
    </main>
  );
};
