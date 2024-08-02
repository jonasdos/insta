import React, { useState } from "react"

export default function Posts() {
  const [postagens, setPostagens] = useState([{
    perfilImgSrc: 'assets/meowed.svg',
    name: 'meowed',
    alt: 'meowed',
    conteudo: 'assets/gato-telefone.svg',
    altft: 'gato-telefone',
    likeSrc: 'assets/respondeai.svg',
    likeName: 'respondeai',
    likes: 105548,
    bookmark: "bookmark-outline",
    like: 'heart-outline',
    mylike: 0
  },
  {
    perfilImgSrc: 'assets/barked.svg',
    name: 'barked',
    alt: 'barked',
    conteudo: "assets/dog.svg",
    altft: "dog",
    likeSrc: "assets/adorable_animals.svg",
    likeName: "adorable_animals",
    likes: 88208,
    bookmark: "bookmark-outline",
    like: "heart-outline",
    mylike: 0
  },
  {
    perfilImgSrc: 'assets/respondeai.svg',
    name: 'responeai',
    alt: 'responeai',
    conteudo: 'assets/respondeai.svg',
    altft: 'respondeai',
    likeSrc: 'assets/meowed.svg',
    likeName: 'meowed',
    likes: 10505,
    bookmark: "bookmark-outline",
    like: 'heart-outline',
    mylike: 0
  },])

  const salvaPost = (index) => {

    setPostagens((prevState) => prevState.map((postagem, i) => {
      if (i === index) {
        return {
          ...postagem,
          bookmark: postagem.bookmark === 'bookmark-outline' ? 'bookmark' : 'bookmark-outline'
        }
      }
      return postagem
    }))
  }
  const onLike = (index) => {
    setPostagens((prevState) => prevState.map((postagem, i) => {
      if (i === index) {
        return {
          ...postagem,
          like: postagem.like === 'heart-outline' ? 'heart' : 'heart-outline',
          mylike: postagem.like === 'heart-outline' ? 1 : 0
        }
      }
      return postagem
    }))
  }
  const addLike = (index) => {
    setPostagens((prevState) => prevState.map((postagem, i) => {
      if (i === index) {

        return {
          ...postagem,
          like: 'heart',
          mylike: 1
        }
      }
      return postagem
    }))
  }

  return (
    <div className="posts">
      {postagens.map((e, index) => (
        <Post
          perfilImgSrc={e.perfilImgSrc}
          name={e.name}
          alt={e.alt}
          conteudo={e.conteudo}
          altft={e.altft}
          likeSrc={e.likeSrc}
          likeName={e.likeName}
          likes={e.likes}
          key={index}
          bookmark={e.bookmark}
          like={e.like}
          mylike={e.mylike}
          salvaPost={() => salvaPost(index)}
          onLike={() => onLike(index)}
          index={index}
          addLike={() => addLike(index)}

        />
      ))}
    </div>
  )
}


function Post({ perfilImgSrc, name, alt, conteudo, altft, likeSrc, likeName, likes, bookmark, salvaPost, index, like, onLike, addLike, mylike }) {
  const verificaLike = () => {
    return { color: like === 'heart' ? 'red' : 'black' }
  }




  return <>
    <div className="post">
      <div className="topo">
        <div className="usuario">
          <img src={perfilImgSrc} alt={alt} />
          {name}
        </div>
        <div className="acoes">
          <ion-icon name="ellipsis-horizontal"></ion-icon>
        </div>
      </div>

      <div className="conteudo" >
        <img src={conteudo} alt={altft} onClick={() => addLike(index)} />
      </div>

      <div className="fundo">
        <div className="acoes">
          <div>
            <ion-icon name={like} style={verificaLike()} onClick={() => onLike(index)} ></ion-icon>
            <ion-icon name="chatbubble-outline"></ion-icon>
            <ion-icon name="paper-plane-outline"></ion-icon>
          </div>
          <div>
            <ion-icon name={bookmark} onClick={() => salvaPost(index)}></ion-icon>
          </div>
        </div>

        <div className="curtidas">
          <img src={likeSrc} alt={likeName} />
          <div className="texto">
            Curtido por <strong>{likeName}</strong> e <strong>outras {(likes + mylike).toLocaleString('pt-BR')} pessoas</strong>
          </div>
        </div>
      </div>
    </div >


  </>

}





