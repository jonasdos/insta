export default function Posts() {
  const postagens = [{
    perfilImgSrc: 'assets/meowed.svg',
    name: 'meowed',
    alt: 'meowed',
    conteudo: 'assets/gato-telefone.svg',
    altft: 'gato-telefone',
    likeSrc: 'assets/respondeai.svg',
    likeName: 'respondeai',

  },
  {
    perfilImgSrc: 'assets/barked.svg',
    name: 'barked',
    alt: 'barked',
    conteudo: "assets/dog.svg",
    altft: "dog",
    likeSrc: "assets/adorable_animals.svg",
    likeName: "adorable_animals",

  }]
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
          key={index}
        />
      ))}
    </div>
  )
}


function Post({ perfilImgSrc, name, alt, conteudo, altft, likeSrc, likeName }) {
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
            Curtido por <strong>{likeName}</strong> e <strong>outras 101.523 pessoas</strong>
          </div>
        </div>
      </div>
    </div>


  </>

}





