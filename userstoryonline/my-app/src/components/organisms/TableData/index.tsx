import * as React from "react";
import { DataGrid, GridRowParams } from "@mui/x-data-grid";
import { Box, Modal } from "@mui/material";
import { rows, columns, Id, FirstName, Age, LastName, Candidate, CandidateInformation, ButtonClose } from "../../../constants";
import Button from "../../atoms/Button";

const Modalstyle = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const DataTable = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [selectedRow, setSelectedRow] = React.useState<any | null>(null);

  const handleRowClick = (params: GridRowParams) => {
    setSelectedRow(params.row);
    setIsModalOpen(true);
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div style={{ width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        onRowClick={handleRowClick}
        pageSizeOptions={[5, 10]}
      />

      <Modal
        open={isModalOpen}
        onClose={handleCloseModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={Modalstyle}>
          <div>
            <h2 id="modal-title">{Candidate}</h2>
            {selectedRow && (
              <div>
                <p>{Id} {selectedRow.id}</p>
                <p>{FirstName} {selectedRow.firstName}</p>
                <p>{LastName}  {selectedRow.lastName}</p>
                <p>{Age} {selectedRow.age}</p>
                <p>{CandidateInformation} {selectedRow.CandidateInfo}</p>
              </div>
            )}
            <Button variant="contained" onClick={handleCloseModal}>
              {ButtonClose}
            </Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
export default DataTable;
