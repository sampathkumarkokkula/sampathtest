import { GridColDef, GridValueGetterParams } from "@mui/x-data-grid";

export const CandidateInfo = "Candidates Information";
export const ButtonClose = "Close";
export const Id = "Id : ";
export const FirstName = "First Name : ";
export const LastName = "Last Name : ";
export const Age = "Age : ";
export const CandidateInformation = "Candidate Information : ";
export const Candidate = "Candidate";

export const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "firstName", headerName: "First name", width: 130 },
  { field: "lastName", headerName: "Last name", width: 130 },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    width: 90,
  },
  {
    field: "fullName",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    valueGetter: (params: GridValueGetterParams) =>
      `${params.row.firstName || ""} ${params.row.lastName || ""}`,
  },
];

export const rows = [
  {
    id: 1,
    lastName: "Snow",
    firstName: "Jon",
    age: 35,
    CandidateInfo:
      "Working as a full-stack developer at Zemoso Technologies. Experienced in building web applications with a strong focus on front-end development using React and back-end development using Node.js and Express.",
  },
  {
    id: 2,
    lastName: "Lannister",
    firstName: "Cersei",
    age: 42,
    CandidateInfo:
      "Experienced project manager with a track record of successfully leading large teams and delivering high-impact projects. Skilled in strategic planning and execution.",
  },
  {
    id: 3,
    lastName: "Lannister",
    firstName: "Jaime",
    age: 45,
    CandidateInfo:
      "Senior software engineer with expertise in Java and Spring Framework. Passionate about writing clean, maintainable code and solving complex technical challenges.",
  },
  {
    id: 4,
    lastName: "Stark",
    firstName: "Arya",
    age: 16,
    CandidateInfo:
      "Recent graduate with a degree in computer science. Eager to start a career in software development and willing to learn new technologies.",
  },
  {
    id: 5,
    lastName: "Targaryen",
    firstName: "Daenerys",
    age: 65,
    CandidateInfo:
      "Experienced leader in the field of international diplomacy and negotiation. Adept at building strong relationships and fostering cooperation between nations.",
  },
  {
    id: 6,
    lastName: "Melisandre",
    firstName: "Mario",
    age: 51,
    CandidateInfo:
      "Seasoned magician with a wide range of mystical powers and abilities. Known for his mesmerizing performances and ability to influence events.",
  },
  {
    id: 7,
    lastName: "Clifford",
    firstName: "Ferrara",
    age: 44,
    CandidateInfo:
      "Entrepreneur and business innovator with a successful track record of launching and scaling startups in various industries.",
  },
  {
    id: 8,
    lastName: "Frances",
    firstName: "Rossini",
    age: 36,
    CandidateInfo:
      "Creative artist and musician specializing in classical opera compositions. Known for composing timeless masterpieces.",
  },
  {
    id: 9,
    lastName: "Roxie",
    firstName: "Harvey",
    age: 65,
    CandidateInfo:
      "Veteran detective with years of experience solving complex criminal cases. Highly skilled in forensic analysis and deduction.",
  },
];
