import { useState } from "react";
import { useEffect } from "react";

import TrailController from "../controllers/TrailController";

import imgTrail from "../assets/img/home/trails/img_trilhas.png";
import { useNavigate, useParams } from "react-router-dom";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import RenderHtml from "../components/RenderHtml";

export const Trail = () => {
  const navigate = useNavigate();

  const { id } = useParams();

  const [trail, setTrail] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const trailController = new TrailController();
    const fetchData = async () => {
      try {
        const result = await trailController.getTrail(id);
        if (result.success) {
          setTrail(result.data);
        } else {
          setError(result.message);
        }
      } catch (error) {
        alert(`Erro: ${error.message}`);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  const pageNavigate = () => {
    setTimeout(() => {
      return navigate("/");
    }, 3 * 1000);
  };

  if (!id) {
    alert("Ocorreu um erro na aplicação, retornando para página inicial!");
    return navigate("/");
  }

  if (error) {
    pageNavigate();
    return (
      <section>
        <div className="container mx-auto max-w-5xl py-8">
          <h4 className="text-xl text-center font-texts font-bold  text-black mb-5">
            {error}
          </h4>
          <p className="text-center text-lg font-semibold">
            Você será redirecionado para a página inicial em instantes!
          </p>
        </div>
      </section>
    );
  }

  if (loading) {
    return (
      <section>
        <div className="container mx-auto max-w-5xl py-10">
          <div className="flex items-center justify-center gap-2">
            <AiOutlineLoading3Quarters className="animate-spin" />
            <h4 className="text-xl text-center font-texts font-semibold  text-black">
              Carregando...
            </h4>
          </div>
        </div>
      </section>
    );
  }

  return (
    <main>
      <section className="bg-capi_blue_home_darker text-white text-center gap-8 p-8">
        <h2 className="font-headline font-semibold text-4xl">{trail.name}</h2>
      </section>
      <section className="container mx-auto max-w-5xl p-10 px-2">
        <div className="w-full flex justify-center mb-5">
          <img
            className="w-full sm:w-4/5"
            src={imgTrail}
            alt="Imagem de um código"
          />
        </div>

        <h2 className="text-center font-headline text-2xl font-semibold text-black mb-5">
          {trail.subtitle}
        </h2>

        <div className="w-full">
          <RenderHtml htmlContent={trail.description} />
        </div>

        <h3 className="text-center text-xl font-semibold mb-7">
          Para se aprofundar no assunto, temos alguns vídeos como recomendação:
        </h3>

        <h3 className=" text-lg font-bold mb-5">- {trail.video_title}</h3>

        <p className="text-lg mb-3"><b>Descrição: </b>{trail.video_description}</p>
        
        <a href={trail.references}>
          <p className="text-center underline text-blue-500 font-bold transition duration-300 hover:text-blue-800">
            Clique aqui para o vídeo: {trail.video_title}
          </p>
        </a>
      </section>
    </main>
  );
};
