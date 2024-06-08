import BtnMain from "@/components/BtnMain";
import Header from "@/components/Header";

export default function NotFound() {
    return (
        <>
        <Header />
        <div>
            <div className="container">
                <h1>Página não encontrada</h1>
                <p>Infelizmente a página acessada é inexistente em nosso sistema de páginas. Por favor digite outra rota ou clique no link abaixo para retornar para a Home</p>
                <BtnMain>Voltar para página inicial</BtnMain>
            </div>
        </div>
        </>
    )
}