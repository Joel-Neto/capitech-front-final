import { useState } from "react";
import contactIcon from "../assets/img/contato_icon.png";
import { ContactFormGroups } from "../components/ContactFormGroups";
import { ContactTextArea } from "../components/ContactTextArea";

export const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [text, setText] = useState("");

  return (
    <main>
      <section className="relative bg-capi_gray_contact text-white flex items-center justify-center gap-8 p-8">
        <img
          className="hidden absolute left-28 w-16 sm:block"
          src={contactIcon}
          alt="Ícone de contato."
        />
        <h2 className="font-headline font-semibold text-4xl">Contato</h2>
      </section>
      <section className="container mx-auto max-w-5xl p-10 px-2">
        <h3 className="text-center font-headline font-semibold text-2xl">
          Nos envie uma mensagem:
        </h3>
        <form className="mt-12 flex flex-col items-center gap-8">
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
          <ContactFormGroups
            value={subject}
            setValue={setSubject}
            label={"Assunto"}
            idInput={"subject"}
            inputType={"text"}
          />
          <ContactTextArea
            value={text}
            setValue={setText}
            label={"Conteúdo"}
            idInput={"textContent"}
          />

          <button className="capiButtons text-black bg-capi_blue hover:bg-blue-400 shadow-xl">
            Enviar
          </button>
        </form>
      </section>
    </main>
  );
};
