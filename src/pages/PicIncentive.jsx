import { useContext } from "react";
import { TableContext } from "../context/TableContext";

const PicIncentive = () => {
  const { EditTable, setEditTable } = useContext(TableContext);
  return (
    <div>
      <h1>PIC Incentive</h1>
    </div>
  );
};
export default PicIncentive;
