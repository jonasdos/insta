const storiesData = [
  {
    name: '9gag',
    src: 'assets/9gag.svg',
    alt: '9gag',
  },
  {
    name: 'meowed',
    src: 'assets/meowed.svg',
    alt: 'meowed',
  },
  {
    name: 'barked',
    src: 'assets/barked.svg',
    alt: 'barked',
  },
  {
    name: 'nathanwpylestrangeplanet',
    src: 'assets/nathanwpylestrangeplanet.svg',
    alt: 'nathanwpylestrangeplanet',
  },
  {
    name: 'wawawicomics',
    src: 'assets/wawawicomics.svg',
    alt: 'wawawicomics',
  },
  {
    name: 'respondeai',
    src: 'assets/respondeai.svg',
    alt: 'respondeai',
  },
  {
    name: 'filomoderna',
    src: 'assets/filomoderna.svg',
    alt: 'filomoderna',
  },
  {
    name: 'memeriagourmet',
    src: 'assets/memeriagourmet.svg',
    alt: 'memeriagourmet',
  }


]



export default function Stories() {

  return (<div className="stories">
    {storiesData.map((item, index) =>
      <Storie
        src={item.src}
        alt={item.alt}
        name={item.name}
        key={index}

      />)}
    <div className="setinha">
      <ion-icon name="chevron-forward-circle"></ion-icon>
    </div>
  </div>)

}

function Storie({ src, alt, name }) {
  return <>
    <div className="story">
      <div className="imagem">
        <img src={src} alt={alt} />
      </div>
      <div className="usuario">
        {name}
      </div>
    </div>
  </>

}