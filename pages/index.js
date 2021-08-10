import styled from 'styled-components'
import Box from '../src/Box'
import Cabecalho from '../src/Cabecalho'
import MainGrid from '../src/MainGrid'

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
      
    </Box>
  )
}



export default function Home() {

  const userDefault = 'geissoncr'

  return (
    <>
      <Cabecalho>
        <div>
          Teste LeCom
        </div>
        <input
          placeholder="pesquise um usuario"
          name="usuario"
          aria-label="Coloque uma url para usar de capa"
        />

      </Cabecalho>
      <MainGrid>
        <div className="optArea" style={{ gridArea: 'optArea' }}>
          <Box>
            <h1 className="subTitle"> Dados do Usurio</h1>
            <ProfileSideBar user={userDefault}/>

          </Box>

        </div>
        <div className="plotArea" style={{ gridArea: 'plotArea' }}>
          <Box>
            <h1 className="title"> Lista de informações do Repositorio </h1>
          </Box>
        </div>
      </MainGrid>
    </>
  )

}
