import { useState } from "react";
import { ContactFormGroups } from "../../components/ContactFormGroups";
import { ContactTextArea } from "../../components/ContactTextArea";

export const AdminCreateTrail = () => {
  const [name, setName] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [description, setDescription] = useState("");
  const [videoTitle, setVideoTitle] = useState("");
  const [videoDescription, setvideoDescription] = useState("");
  const [references, setReferences] = useState("");

  // const sendForm = async (ev) => {
  //   ev.preventDefault();
  //   const userController = new UserController();

  //   try {
  //     const user = new UserLogin(email, password);
  //     setLoading(true);
  //     const result = await userController.login(user);

  //     if (result.success) {
  //       alert(result.message);
  //       saveUserDataOnStorage(result.data);
  //       resetFields();
  //       return navigate("/admin")
  //     } else {
  //       alert(`Erro: ${result.message}`);
  //     }
  //   } catch (error) {
  //     alert(`Erro: ${error.message}`);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  const resetFields = () => {
    setName("");
    setSubtitle("");
    setDescription("");
    setVideoTitle("");
    setvideoDescription("");
    setReferences("")
  };

  return (
    <main>
      <section className="container mx-auto max-w-5xl p-10 px-2">
        <h2 className="text-center font-headline font-semibold text-2xl">
          Cadastrar nova trilha:
        </h2>
        <form className="mt-12 flex flex-col items-center gap-8">
          <ContactFormGroups
            value={name}
            setValue={setName}
            label={"Nome"}
            idInput={"name"}
            inputType={"text"}
          />
          <ContactFormGroups
            value={subtitle}
            setValue={setSubtitle}
            label={"Tema"}
            idInput={"subtitle"}
            inputType={"text"}
          />
          <ContactTextArea
            value={description}
            setValue={setDescription}
            label={"Conteúdo"}
            idInput={"description"}
            rows={10}
          />
          <ContactFormGroups
            value={videoTitle}
            setValue={setVideoTitle}
            label={"Título do vídeo"}
            idInput={"videoTitle"}
            inputType={"text"}
          />
          <ContactFormGroups
            value={videoDescription}
            setValue={setvideoDescription}
            label={"Descrição do vídeo"}
            idInput={"videoDescription"}
            inputType={"text"}
          />
          <ContactFormGroups
            value={references}
            setValue={setReferences}
            label={"Referências do vídeo"}
            idInput={"videoReferences"}
            inputType={"text"}
          />

          <button className="capiButtons text-black bg-capi_blue hover:bg-blue-400 shadow-xl">
            Enviar
          </button>
        </form>
      </section>
    </main>
  );
};
