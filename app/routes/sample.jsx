import { Button } from "@mui/base";
import { useNavigate } from "react-router";

export default function Sample() {
    const navigate = useNavigate();
    return (
        <div>
            Hallo me its sample page <b />
            <Button onClick={() => navigate('/')} >
                if you can be back click me
            </Button>
        </div>
    );
}