import propTypes from "prop-types";

import { FaTrashAlt } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";

export const AdminTable = ({tableHeader, tableData, deleteTrail}) => {
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
            <td className="px-6 py-4 font-semibold">{item._id}</td>
            <td className="px-6 py-4">{item.name}</td>
            <td className="px-6 py-4 text-center">
              <button
                title="Editar Item"
                className="capiButtons text-black bg-blue-400 shadow-xl hover:text-gray-800"
              >
                <FiEdit />
              </button>
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
  deleteTrail: propTypes.func.isRequired
}