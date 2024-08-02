import React, { useState } from 'react'
export default function User() {
  const [dadosDoPerfil, setDadosDoPerfil] = useState([{
    name: 'catanacomics',
    src: 'assets/catanacomics.svg',
    alt: 'imagem de perfil'
  }])

  const solicitaNewName = (newName) => {
    setDadosDoPerfil((prevState) => prevState.map((perfil) => ({
      ...perfil,
      name: newName || perfil.name
    })))

  }
  const solicitaNewFoto = (newFoto) => {
    setDadosDoPerfil((prevState) => prevState.map((perfil) => ({
      ...perfil, //copia dados do perfil para atualizar conforme as condições abaixo
      src: newFoto || perfil.src //isso é um if, caso newFoto seja válido é new foto, se não, mantém o valor atual do src
    })))

  }
  return (<>
    {dadosDoPerfil.map((e, index) =>
      <Userbio
        src={e.src}
        name={e.name}
        alt={e.alt}
        key={index}
        solicitaNewName={solicitaNewName}
        solicitaNewFoto={solicitaNewFoto}
      />)}
  </>)
}




function Userbio({ src, alt, name, solicitaNewName, solicitaNewFoto }) {

  return <>
    <div className="usuario">
      <img src={src} alt={alt} onClick={() => solicitaNewFoto(prompt('Insira uma URL valida para atualizar sua foto'))} />
      <div className="texto">
        <span>
          <strong>{name}</strong>
          <ion-icon name="pencil" onClick={() => solicitaNewName(prompt('Digite seu novo nome de usuario'))}></ion-icon>
        </span>
      </div>
    </div>
  </>
}


