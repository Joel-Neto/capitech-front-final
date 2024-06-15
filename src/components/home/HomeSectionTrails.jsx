import { useEffect, useState } from "react";

import TrailController from "../../controllers/TrailController";

import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { HomeTrailImage } from "./HomeTrailImage";
import { Link } from "react-router-dom";

export const HomeSectionTrails = () => {
  const [trails, setTrails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const trailController = new TrailController();
    const fetchData = async () => {
      try {
        const result = await trailController.getTrails();
        if (result.success) {
          setTrails(result.data);
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
  }, []);

  if (loading) {
    return (
      <section>
        <div className="container mx-auto max-w-5xl">
          <div className="flex items-center justify-center gap-2">
            <AiOutlineLoading3Quarters className="animate-spin" />
            <h4 className="text-xl text-center font-texts font-semibold  text-white">
              Carregando...
            </h4>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section>
        <div className="container mx-auto max-w-5xl">
          <h4 className="text-xl text-center font-texts font-semibold  text-white">
            {error}
          </h4>
        </div>
      </section>
    );
  }

  if (trails.length === 0) {
    return (
      <section>
        <div className="container mx-auto max-w-5xl">
          <h4 className="text-xl text-center font-texts font-semibold text-white">
            Não temos nenhuma trilha para exibir no momento...
          </h4>
        </div>
      </section>
    );
  }

  return (
    <div className="container mx-auto max-w-5xl">
      <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
        {trails.map((trail) => (
          <div
            key={trail._id}
            className="flex flex-col justify-center items-center bg-capi_gray_login p-5 rounded-2xl shadow-xl"
          >
            <HomeTrailImage trailName={trail.name} />
            <Link to={`trilha/${trail._id}`}>
              <p className="text-3xl font-headline text-white font-bold transition duration-300 hover:text-gray-200">{trail.name}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
