export default function Home() {
  return (
    <div style={{
      fontFamily: 'Arial',
      padding: '20px',
      maxWidth: '500px',
      margin: '40px auto',
      border: '1px solid #ccc',
      borderRadius: '10px',
      boxShadow: '0 0 10px rgba(0,0,0,0.1)'
    }}>
      <h2 style={{ textAlign: 'center' }}>Top Mania - Controle de Condicional</h2>
      <p>Bem-vindo ao sistema de controle de entrada e saída de condicionais.</p>
      <ul>
        <li>📋 Cadastro de clientes</li>
        <li>💰 Controle de valores e peças</li>
        <li>📅 Relatórios de movimentação</li>
      </ul>
      <p style={{ textAlign: 'center', marginTop: '30px' }}>Versão simples - Beta</p>
    </div>
  )
}
