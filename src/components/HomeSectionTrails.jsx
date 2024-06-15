import { useEffect, useState } from "react";

import TrailController from "../controllers/TrailController";

import { AiOutlineLoading3Quarters } from "react-icons/ai";

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
          setLoading(false);
          setTrails(result.data);
        } else {
          setError(result.message);
        }
      } catch (error) {
        alert(`Erro: ${error.message}`);
      }
    };

    fetchData();
  }, []);

  if (error) {
    return (
      <section>
        <div className="container mx-auto max-w-5xl">
          <h4 className="text-xl text-center font-texts font-semibold text-black">
            {error}
          </h4>
        </div>
      </section>
    );
  }

  if (loading) {
    return (
      <section>
        <div className="container mx-auto max-w-5xl">
          <div className="flex items-center justify-center gap-2">
            <AiOutlineLoading3Quarters className="animate-spin" />
            <h4 className="text-xl text-center font-texts font-semibold text-black">
              Carregando...
            </h4>
          </div>
        </div>
      </section>
    );
  }

  if (trails.length === 0) {
    return (
      <section>
        <div className="container mx-auto max-w-5xl">
          <h4 className="text-xl text-center font-texts font-semibold text-black">
            Não temos nenhuma trilha para exibir no momento...
          </h4>
        </div>
      </section>
    );
  }

  return (
    <section>
      <div className="container mx-auto max-w-5xl">
        {trails.map((trail) => (
          <div key={trail._id}>Joel Neto</div>
        ))}
      </div>
    </section>
  );
};
