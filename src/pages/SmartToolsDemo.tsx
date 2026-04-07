import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const SmartToolsDemo = () => {
  const navigate = useNavigate();
  useEffect(() => { navigate("/grundrissheld", { replace: true }); }, [navigate]);
  return null;
};

export default SmartToolsDemo;
