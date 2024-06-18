import { Link } from "react-router-dom";

import { FaPlus } from "react-icons/fa";
import { useEffect, useState } from "react";
import TrailController from "../../controllers/TrailController";
import { AdminTable } from "../../components/admin/adminTable/AdminTable";

export const AdminTrails = () => {
  const [tableData, setTableData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const tableHeader = ["id", "Nome", "Editar", "Excluir"];
  const token = sessionStorage.getItem("token");

  useEffect(() => {
    const trailController = new TrailController();
    fetchData(trailController);
  }, []);

  const fetchData = async (trailController) => {
    try {
      const result = await trailController.getTrails();
      if (result.success) {
        setTableData(result.data);
      } else {
        setError(result.message);
      }
    } catch (error) {
      alert(`Erro: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  const deleteTrail = async (id) => {
    if (confirm("Realmente deseja excluir a trilha?")) {
      const trailController = new TrailController();
      try {
        const result = await trailController.delete(token, id);

        if (result.success) {
          alert(result.message);
          setLoading(true);
          await fetchData(trailController);
        } else {
          alert(`Erro: ${result.message}`);
        }
      } catch (error) {
        alert(`Erro: ${error.message}`);
      }
    }
  };

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

  return (
    <main className="py-10 px-4">
      <div className="container max-w-5xl mx-auto ">
        <div className="flex justify-center mb-10 sm:justify-end">
          <Link
            to="/admin/trilhas/novatrilha"
            className="capiButtons flex items-center justify-center gap-2 text-white bg-capi_purple shadow-xl hover:text-gray-300"
          >
            <span>Nova Trilha</span>
            <FaPlus />
          </Link>
        </div>
        {loading ? (
          <h2 className="text-center text-xl font-headline font-semibold">
            Buscando dados...
          </h2>
        ) : (
          <div className="overflow-x-auto mb-5">
            <AdminTable
              tableHeader={tableHeader}
              tableData={tableData}
              deleteTrail={deleteTrail}
            />
          </div>
        )}
        {tableData.length === 0 ? (
          <p className="text-center text-lg font-headline font-bold">
            Não há trilhas criadas... Cadastre uma nova!
          </p>
        ) : (
          ""
        )}
      </div>
    </main>
  );
};
