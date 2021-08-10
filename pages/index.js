import styled from 'styled-components'
import Box from '../src/Box'
import Cabecalho from '../src/Cabecalho'
import MainGrid from '../src/MainGrid'
import axios from 'axios'
import { map } from 'lodash'

function ProfileSideBar(propriedades) {

  return (
    <Box>
      <img src={`https://github.com/${propriedades.user}.png`} style={{ borderRadius: '8px' }} />
      <hr />
      <p>
        <a className="boxLink" href={`https://github.com/${propriedades.user}`}>
          @{propriedades.user}
        </a>
      </p>
      <hr />
      <p>
        <a className="boxLink" href={findDataToUser('Repositorios')}> Repositórios por linguagem</a>
        <hr />
        <a className="boxLink" onClick={findDataToUser('Repositorios')}> Repositórios por usuario</a>
        <hr />
        <a className="boxLink" onClick={findDataToUser('Repositorios')}> Repositórios por organizacao</a>
      </p>

    </Box>
  )
}
function findDataToUser(tipoDados) {
  return (<h1></h1>)
}
function ListaInformacoesUsuario(dataToRender) {
  return (
    <ul>
      {dataToRender.dados.map((item) => {
        return (

          <li>
            {item}
          </li>
        )
      })}
    </ul>
  )
}

export default function Home() {

  const userDefault = 'geissoncr'
  const repositorios = ['repositorio 1 ', 'repositorio 2', 'Repositorio 3']

  return (
    <>
      <Cabecalho>
        <div className="title">
          Teste de Programação para a Lecom
        </div>
        <form onSubmit={function handlePesquisaUsuario(e) {
          e.preventDefault()
          console.log(e)
        }}>

          <div>
            <input
              placeholder="Pesquise um Usuario do GitHub"
              name="usrId"
              aria-label="Pesquise um Usuario do GitHub"
            />
            <button>pesquisar</button>
          </div>
        </form>

      </Cabecalho>
      <MainGrid>
        <div className="optArea" style={{ gridArea: 'optArea' }}>
          <Box>
            <h1 className="subTitle"> Dados do Usuário</h1>
            <ProfileSideBar user={userDefault} />

          </Box>

        </div>
        <div className="plotArea" style={{ gridArea: 'plotArea' }}>
          <Box>
            <h1 className="title"> Lista de informações do Repositorio </h1>
            <ListaInformacoesUsuario dados={repositorios} />
          </Box>
        </div>
      </MainGrid>
    </>
  )

}
