import { useNavigate, useParams } from "react-router-dom"

import './ListaDeSubTreinos.css'

function SubTreinoCard({ sub_treino }) {
	const navigate = useNavigate()
	return <div className="sub_treino_card" onClick={() => navigate("/sub_treino/" + sub_treino.id)}>
		<h3>{sub_treino.nome}</h3>
		<h4>{sub_treino.grupo_muscular}</h4>
		<span>Feedbacks: {sub_treino.numero_de_feedbacks}</span><br />
		<pre>{sub_treino.descricao}</pre>
	</div>
}

function ListaDeSubTreinos() {
	const { treinoId } = useParams()
	return (
		SUB_TREINOS.map(sub_treino => <SubTreinoCard key={sub_treino.id} sub_treino={sub_treino} />)
	)
}

export default ListaDeSubTreinos

const SUB_TREINOS = [
	{
		"id": 1,
		"nome": "Segunda",
		"grupo_muscular": "Glúteo",
		"numero_de_feedbacks": 2,
		"descricao": `PERIODIZAÇÃO
13/03: RiR 3-4
20/04: RiR 2`
	},
	{
		"id": 2,
		"nome": "Terça",
		"grupo_muscular": "Dorsal / Abdômen",
		"numero_de_feedbacks": 2,
		"descricao": `PERIODIZAÇÃO
13/03: RiR 3-4
20/04: RiR 2`
	}
]
