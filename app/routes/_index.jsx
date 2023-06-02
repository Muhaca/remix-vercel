import { Button } from "@mui/base";
import { useNavigate } from "react-router";

export const meta = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  const navigate = useNavigate()
  return (
    <div>
      <Button 
      onClick={() => navigate('/sample')}
      >
        Click me
      </Button>
    </div>
  );
}
