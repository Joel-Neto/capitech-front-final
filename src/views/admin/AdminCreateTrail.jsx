import { useContext, useState } from "react";
import { ContactFormGroups } from "../../components/ContactFormGroups";
import { ContactTextArea } from "../../components/ContactTextArea";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import TrailController from "../../controllers/TrailController";
import { useNavigate } from "react-router-dom";
import { userContext } from "../../contexts/UserContext";

export const AdminCreateTrail = () => {
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [description, setDescription] = useState("");
  const [video_title, setVideo_title] = useState("");
  const [video_description, setVideo_description] = useState("");
  const [references, setReferences] = useState("");
  const {logout} = useContext(userContext)
  const navigate = useNavigate();

  const token = sessionStorage.getItem("token");
  if (!token) {
    alert("Faça login novamente!");
    return navigate("/login");
  }
  
  const sendForm = async (ev) => {
    ev.preventDefault();
    const trailController = new TrailController();
    const trail = {
      name,
      subtitle,
      description,
      video_title,
      video_description,
      references,
    };

    try {
      setLoading(true);
      const result = await trailController.createTrail(token, trail);
      if (result.success) {
        alert(result.message);
        resetFields();
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
    setSubtitle("");
    setDescription("");
    setVideo_title("");
    setVideo_description("");
    setReferences("");
  };

  return (
    <main>
      <section className="container mx-auto max-w-5xl p-10 px-2">
        <h2 className="text-center font-headline font-semibold text-2xl">
          Cadastrar nova trilha:
        </h2>
        <form onSubmit={sendForm} className="mt-12 flex flex-col items-center gap-8">
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
            value={video_title}
            setValue={setVideo_title}
            label={"Título do vídeo"}
            idInput={"videoTitle"}
            inputType={"text"}
          />
          <ContactFormGroups
            value={video_description}
            setValue={setVideo_description}
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

          <button className="capiButtons flex items-center gap-2 text-black bg-capi_blue hover:bg-blue-400 shadow-xl">
            {loading && <AiOutlineLoading3Quarters className="animate-spin" />}
            Enviar
          </button>
        </form>
      </section>
    </main>
  );
};
