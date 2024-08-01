export default function Posts() {
  const postagens = [{
    perfilImgSrc: 'assets/meowed.svg',
    name: 'meowed',
    alt: 'meowed',
    conteudo: 'assets/gato-telefone.svg',
    altft: 'gato-telefone',
    likeSrc: 'assets/respondeai.svg',
    likeName: 'respondeai',
    likes: '105.548'

  },
  {
    perfilImgSrc: 'assets/barked.svg',
    name: 'barked',
    alt: 'barked',
    conteudo: "assets/dog.svg",
    altft: "dog",
    likeSrc: "assets/adorable_animals.svg",
    likeName: "adorable_animals",
    likes: '88.208'
  },
  {
    perfilImgSrc: 'assets/respondeai.svg',
    name: 'responeai',
    alt: 'responeai',
    conteudo: 'assets/respondeai.svg',
    altft: 'respondeai',
    likeSrc: 'assets/meowed.svg',
    likeName: 'meowed',
    likes: '10.505'
  },]
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
        />
      ))}
    </div>
  )
}


function Post({ perfilImgSrc, name, alt, conteudo, altft, likeSrc, likeName, likes }) {
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

      <div className="conteudo">
        <img src={conteudo} alt={altft} />
      </div>

      <div className="fundo">
        <div className="acoes">
          <div>
            <ion-icon name="heart-outline"></ion-icon>
            <ion-icon name="chatbubble-outline"></ion-icon>
            <ion-icon name="paper-plane-outline"></ion-icon>
          </div>
          <div>
            <ion-icon name="bookmark-outline"></ion-icon>
          </div>
        </div>

        <div className="curtidas">
          <img src={likeSrc} alt={likeName} />
          <div className="texto">
            Curtido por <strong>{likeName}</strong> e <strong>outras {likes} pessoas</strong>
          </div>
        </div>
      </div>
    </div>


  </>

}





