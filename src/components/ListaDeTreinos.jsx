import { Link, useNavigate } from 'react-router-dom'
import './ListaDeTreinos.css'

function TreinoCard({ treino }) {
	let separator = ''
	const navigate = useNavigate()
	if (treino.objetivo && treino.dificuldade) separator = ' - '
	return <div className="treino_card" onClick={() => navigate("/treino/" + treino.id)}>
		<h3>{treino.nome}</h3>
		<span>{treino.data_de_inicio} - {treino.data_de_fim}</span><br />
		<span>{treino.objetivo}{separator}{treino.dificuldade}</span>
	</div>
}

function ListaDeTreinos() {
	return (
		TREINOS.map(treino => <TreinoCard key={treino.id} treino={treino} />)
	)
}

export default ListaDeTreinos

const TREINOS = [
	{
		"id": 1,
		"nome": "Ativação #2",
		"data_de_inicio": "13/03/2023",
		"data_de_fim": "04/06/2023",
		"objetivo": "Redução de gordura",
		"dificuldade": "intermediário",
		"tipo_de_treino": "musculação"
	},
	{
		"id": 2,
		"nome": "Aeróbico Fase II",
		"data_de_inicio": "13/03/2023",
		"data_de_fim": "11/06/2023",
		"tipo_de_treino": "aeróbico"
	}
]
