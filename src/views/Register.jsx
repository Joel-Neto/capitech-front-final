import { useState } from "react";
import { FormGroups } from "../components/FormGroups";

export const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [adminCode, setAdminCode] = useState("");

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

            <form className="my-14 flex flex-col items-center gap-8">
              <FormGroups
                value={name}
                setValue={setName}
                label={"Nome"}
                idInput={"name"}
                inputType={"text"}
              />
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
              <FormGroups
                value={adminCode}
                setValue={setAdminCode}
                label={"Código Admin."}
                idInput={"admin"}
                inputType={"password"}
              />
              {/* <div className="flex flex-col items-center gap-2 w-full capi_vsm:flex-row">
                <label className="font-headline font-semibold" htmlFor="email">
                  E-mail:
                </label>
                <input
                  className="w-full border-none bg-capi_gray_login shadow-xl py-2 px-3 rounded-lg capi_vsm:flex-1"
                  type="text"
                  id="email"
                  value={email}
                  onChange={(ev) => setEmail(ev.target.value)}
                />
              </div> */}
              {/* <div className="flex flex-col items-center gap-2 w-full capi_vsm:flex-row">
                <label
                  className="font-headline font-semibold"
                  htmlFor="password"
                >
                  Senha:
                </label>
                <input
                  className="w-full border-none bg-capi_gray_login shadow-xl py-2 px-3 rounded-lg capi_vsm:flex-1"
                  type="password"
                  id="password"
                  value={password}
                  onChange={(ev) => setPassword(ev.target.value)}
                />
              </div> */}

              <div className="flex flex-col gap-5">
                <button className="capiButtons text-black bg-capi_blue hover:bg-blue-400 shadow-xl">
                  Registre-se
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
