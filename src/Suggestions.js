export default function Suggestions() {

  const suggestionsData = [
    {
      name: 'smallcutecats',
      src: "assets/smallcutecats.svg",
      alt: "smallcutecats",
      razao: 'Segue você',
    },
    {
      name: 'bad.vibes.memes',
      src: "assets/bad.vibes.memes.svg",
      alt: "bad.vibes.memes.svg",
      razao: 'Segue você',
    },
    {
      name: 'chibirdart',
      src: "assets/chibirdart.svg",
      alt: "chibirdart",
      razao: 'Segue você',
    },
    {
      name: 'razoesparaacreditar',
      src: "assets/razoesparaacreditar.svg",
      alt: "razoesparaacreditar",
      razao: 'Novo no Instagram',
    },
    {
      name: 'adorable_animals',
      src: "assets/adorable_animals.svg",
      alt: "adorable_animals",
      razao: 'Segue você',
    },
  ]



  return (<>
    <div className="sugestoes">
      <div className="titulo">
        Sugestões para você
        <div>Ver tudo</div>
      </div>
      {
        suggestionsData.map((item, index) => <Suggestion
          name={item.name}
          src={item.src}
          alt={item.alt}
          razao={item.razao}
          key={index}
        />)
      }



    </div>
  </>)
}

function Suggestion({ src, alt, name, razao }) {
  return <><div className="sugestao">
    <div className="usuario">
      <img src={src} alt={alt} />
      <div className="texto">
        <div className="nome">{name}</div>
        <div className="razao">{razao}</div>
      </div>
    </div>

    <div className="seguir">Seguir</div>
  </div>
  </>
}


