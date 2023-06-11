import Layout from "@/components/Layout";
import Tabela from "@/components/Tabela";
import Cliente from "@/core/Cliente";

export default function Home() {

  const clientes = [
    new Cliente('Ana', 24,'1'),
    new Cliente('Bia', 32,'2'),
    new Cliente('Carlos', 16,'3'),
    new Cliente('Marta', 19,'4'),
    new Cliente('Carol', 45,'5'),
  ]
  return (
    <div className={`
      flex 
      h-screen 
      justify-center 
      items-center
      bg-gradient-to-r
      from-blue-500
      to-purple-500
      text-white`}>
      <Layout titulo="CRUD com Nextjs e Reactjs">
        <Tabela clientes></Tabela>
      </Layout>
    </div>
  )
}
