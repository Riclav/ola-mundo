import styles from "./SobreMim.module.css";

import PostModelo from "componentes/PostModelo";
import fotoCapa from "assets/sobre_mim_capa.png";
import fotoSobreMim from "assets/sobre_mim_foto.png";

export default function SobreMim() {
    return (
        <PostModelo
            fotoCapa={fotoCapa}
            titulo="Sobre mim"
        >
            <h3 className={styles.subtitulo}>
                Olá, eu sou o Ric!
            </h3>

            <img
                src={fotoSobreMim}
                alt="Foto do Ric"
                className={styles.fotoSobreMim}
            />

            <p className={styles.paragrafo}>
                Oi, tudo bem? Eu sou aluno de Front-end na Alura e estou feliz de te ver por aqui.
            </p>
            <p className={styles.paragrafo}>
                Minha história com programação começou na Universidade Internacional (UNINTER), onde me formtei no curso de análise e desenvolvimento de sistemas. Eu aprendi lógica de programação e o básico de várias linguagens, como PHP, Python, Java, mas sem aprofundar muito em cada uma delas. Eu gostava muito de estudar programação, mas na época não fazia ideia de que trabalharia com isso hoje.
            </p>
            <p className={styles.paragrafo}>
                Após o ensino superior, escolhi cursar Pós-Graduação na mesma instituição. Onde atualmente estou cursando dois cursos para enriquecer meus conhecimentos (Engenharia de software e Ciência de dados e Inteligência artificial).
            </p>
            <p className={styles.paragrafo}>
                Desde o final de do ano de 2023, assumi novos desafios na empresa que trabalho, atuando com desenvolverdor de software, para as inumeras demandas dentro da engenharia.
            </p>
            <p className={styles.paragrafo}>
               Cada dia é uma nova experiência, e os cursos da Alura estão me guiando nesse longo caminho de aprendizado.
            </p>
             
        </PostModelo>
    )
}