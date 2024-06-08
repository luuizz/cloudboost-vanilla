import SectionHero from "@/components/SectionHero";
import SectionMarketing from "@/components/SectionMarketing";
import SectionRecursos from "@/components/SectionRecursos";
import { client } from "../../../sanity/lib/client";

async function dataInfo() {
  const query = `
  *[_type == "home"] {
    title,
    titleHero,
    textHero,
    logos,
    marketText,
    topicosRecursos,
    labelButton,
    titleCTA,
    marketTitle,
    reviewsNumber,
    textCTA
}
`;
const dataPage = await client.fetch(query);
return dataPage;
}

export default async function Home() {

  
  const home = await dataInfo(); 

  const data = home[0];

  return (
    <>
      <SectionHero dataPage={data} />
      <SectionRecursos dataPage={data} />
      <SectionMarketing dataPage={data} />
    </>
  );
}
