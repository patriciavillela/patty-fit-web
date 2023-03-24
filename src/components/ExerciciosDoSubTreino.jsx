import { useParams } from "react-router-dom";

import './ExerciciosDoSubTreino.css'

function ExerciciosDoSubTreino() {
	const { subTreinoId } = useParams()


	return EXERCICIOS_DO_SUB_TREINO.map(exercicio_do_sub_treino => {
		let series_text
		if (exercicio_do_sub_treino.series_editavel) {
			series_text = <input type="text" value={exercicio_do_sub_treino.series} />
		} else {
			series_text = exercicio_do_sub_treino.series
		}
		let carga_text
		if (exercicio_do_sub_treino.carga_editavel) {
			carga_text = <input type="text" value={exercicio_do_sub_treino.carga} />
		} else {
			carga_text = exercicio_do_sub_treino.carga
		}

		return <div className="exercicio_do_sub_treino_card" key={exercicio_do_sub_treino.id}>
			<h3>{exercicio_do_sub_treino.nome}</h3>
			<span>Séries: {series_text}</span><br />
			<span>Carga: {carga_text}</span><br />
			<span>Tempo de execução: {exercicio_do_sub_treino.tempo_de_execucao}</span><br />
			<span>Tempo de pausa: {exercicio_do_sub_treino.tempo_de_pausa}</span><br />
		</div>
	})
}

export default ExerciciosDoSubTreino

const EXERCICIOS_DO_SUB_TREINO = [
	{
		"id": 1,
		"nome": "Alongamento adutores step",
		"series": 2,
		"series_editavel": false,
		"tempo_de_execucao": 20,
		"tempo_de_execucao_editavel": false,
		"tempo_de_pausa": 10,
		"tempo_de_pausa_editavel": false
	},
	{
		"id": 2,
		"nome": "Levantamento Terra",
		"series": 3,
		"series_editavel": false,
		"carga": 14,
		"carga_editavel": true,
		"tempo_de_execucao": 60,
		"tempo_de_execucao_editavel": false,
		"tempo_de_pausa": 30,
		"tempo_de_pausa_editavel": false
	}
]
