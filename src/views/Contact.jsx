import { useRef, useState } from "react";
// import { ContactFormGroups } from "../components/ContactFormGroups";
// import { ContactTextArea } from "../components/ContactTextArea";
import emailjs from "@emailjs/browser";

import contactIcon from "../assets/img/contato_icon.png";
import { FaSpinner } from "react-icons/fa";
import { HiCheckCircle } from "react-icons/hi";

export const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [subject, setSubject] = useState("");
  // const [text, setText] = useState("");
  const form = useRef(null);

  const serviceID = import.meta.env.VITE_SERVICE_ID;
  const templateID = import.meta.env.VITE_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_PUBLIC_K3Y;

  const sendEmail = (e) => {
    e.preventDefault();

    if (!form.current) return;
    if (!serviceID || !templateID || !publicKey) return

    setLoading(true);

    emailjs
      .sendForm(serviceID, templateID, form.current, {
        publicKey: publicKey,
      })
      .then(
        () => {
          // console.log("SUCCESS!");
          form.current.reset();
          setSuccess(true);
          setLoading(false);
          setTimeout(() => {
            setSuccess(false);
          }, 10 * 1000);
        },
        (error) => {
          console.log("EMAIL FAILED:", error.text);
          setError(true);
          setLoading(false);
        }
      );
  };

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
        <form ref={form} onSubmit={sendEmail} className="mt-12 flex flex-col items-center gap-8">

          <div className="w-full flex flex-col gap-2 sm:w-2/3">
            <label
              className="pl-2 text-left font-headline font-semibold"
              htmlFor="name"
            >
              Nome
            </label>
            <input
              className="w-full border border-black bg-gray-100 shadow-xl py-3 px-3 rounded-2xl capi_vsm:flex-1"
              type="text"
              id="name"
              name="name"
              required
            />
          </div>

          <div className="w-full flex flex-col gap-2 sm:w-2/3">
            <label
              className="pl-2 text-left font-headline font-semibold"
              htmlFor="email"
            >
              E-mail
            </label>
            <input
              className="w-full border border-black bg-gray-100 shadow-xl py-3 px-3 rounded-2xl capi_vsm:flex-1"
              type="email"
              id="email"
              name="email"
              required
            />
          </div>

          <div className="w-full flex flex-col gap-2 sm:w-2/3">
            <label
              className="pl-2 text-left font-headline font-semibold"
              htmlFor="subject"
            >
              Assunto
            </label>
            <input
              className="w-full border border-black bg-gray-100 shadow-xl py-3 px-3 rounded-2xl capi_vsm:flex-1"
              type="text"
              id="subject"
              name="subject"
              required
            />
          </div>

          <div className="w-full flex flex-col gap-2 sm:w-2/3">
            <label
              className="pl-2 text-left font-headline font-semibold"
              htmlFor="message"
            >
              Mensagem
            </label>
            <textarea
              className="w-full border border-black bg-gray-100 shadow-xl py-3 px-3 rounded-2xl capi_vsm:flex-1"
              id="message"
              name="message"
              rows={6}
              required
            ></textarea>
          </div>
          {/* <ContactFormGroups
            value={name}
            setValue={setName}
            label={"Nome"}
            idInput={"name"}
            inputType={"text"}
          /> */}
          {/* <ContactFormGroups
            value={email}
            setValue={setEmail}
            label={"E-mail"}
            idInput={"email"}
            inputType={"email"}
          /> */}
          {/* <ContactFormGroups
            value={subject}
            setValue={setSubject}
            label={"Assunto"}
            idInput={"subject"}
            inputType={"text"}
          /> */}
          {/* <ContactTextArea
            value={text}
            setValue={setText}
            label={"Conteúdo"}
            idInput={"textContent"}
          /> */}

          <button className="capiButtons flex items-center gap-2 text-black bg-capi_blue hover:bg-blue-400 shadow-xl">
            {loading && <FaSpinner className="h-4 w-4 animate-spin" />}
            {success && <HiCheckCircle className="h4- w-4 animate-ping" />}
            Enviar
          </button>

          {error && (
            <p className="font-bold text-red-600">
              Ocorreu um erro ao enviar a mensagem, por favor, tente novamente.
            </p>
          )}
        </form>
      </section>
    </main>
  );
};
