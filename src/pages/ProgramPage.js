import { useParams } from "react-router-dom";
import ProgramPost from "../components/Programs/ProgramPost";

const ProgramPostPage = () => {
  const params = useParams();
  const programId = params.programId;
  return <ProgramPost id={programId} />;
};

export default ProgramPostPage;
