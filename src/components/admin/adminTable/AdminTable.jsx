import propTypes from "prop-types";

import { FaTrashAlt } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";
import { Link } from "react-router-dom";

export const AdminTable = ({ tableHeader, tableData, deleteTrail }) => {
  return (
    <table className="min-w-full">
      <thead className="bg-gray-600 text-white">
        <tr>
          {tableHeader.map((value, i) => (
            <th key={`th-${i}`} className="px-6 py-3">
              {value}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {tableData.map((item, index) => (
          <tr key={item._id} className={index % 2 === 0 ? "bg-gray-100" : ""}>
            <td className="px-6 py-4 font-semibold underline">
              <Link to={`/trilha/${item._id}`}>{item._id}</Link>
            </td>
            <td className="px-6 py-4">{item.name}</td>
            <td className="px-6 py-4 text-center">
              <Link to={`/admin/trilhas/atualizar/${item._id}`}>
                <button
                  title="Editar Item"
                  className="capiButtons text-black bg-blue-400 shadow-xl hover:text-gray-800"
                >
                  <FiEdit />
                </button>
              </Link>
            </td>
            <td className="px-6 py-4 text-center">
              <button
                title="Excluir Item"
                className="capiButtons text-black bg-red-400 shadow-xl hover:text-gray-800"
                onClick={() => deleteTrail(item._id)}
              >
                <FaTrashAlt />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

AdminTable.propTypes = {
  tableHeader: propTypes.array.isRequired,
  tableData: propTypes.array.isRequired,
  deleteTrail: propTypes.func.isRequired,
};
