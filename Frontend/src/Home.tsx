import { Grid } from "@mui/material";
import BaseLayout from "./shared/components/BaseLayout";
import { useEffect, useState } from "react";
import BasicTabs from "./views/BasicTabs";
import getAllLeads from "./services/GetAllLeads";

interface HomeProps {
  
}

const Home: React.FC<HomeProps> = () => {
  const [leadsData, setLeadsData] = useState<[] | undefined>(undefined);

  const fetchData = async () => {
    try {
      const response = await getAllLeads();
      const leadsData = response.data;

      setLeadsData(leadsData);
      console.log(leadsData);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData(); // Chama a função imediatamente

    const intervalId = setInterval(() => {
      fetchData(); // Chama a função a cada 1 minuto
    }, 60000); // 60000 milissegundos = 1 minuto

    // Limpa o intervalo quando o componente é desmontado
    return () => clearInterval(intervalId);
  }, []);

  return (
    <BaseLayout>
      <Grid container spacing={6}>
        <Grid container item justifyContent="center">
          <Grid item xs>
            {leadsData !== undefined ? (
              <BasicTabs leadsData={leadsData} />
            ) : (
              <p>Loading...</p>
            )}
          </Grid>
        </Grid>
      </Grid>
    </BaseLayout>
  );
};

export default Home;
