export default function User() {
  const userProfile = [{
    name: 'catanacomics',
    src: 'assets/catanacomics.svg',
    alt: 'imagem de perfil'
  }]
  return <>
    {userProfile.map((e, index) =>
      <Userbio
        src={e.src}
        name={e.name}
        alt={e.alt}
        key={index}
      />)}
  </>
}




function Userbio({ src, alt, name }) {
  return <>
    <div className="usuario">
      <img src={src} alt={alt} />
      <div className="texto">
        <span>
          <strong>{name}</strong>
          <ion-icon name="pencil"></ion-icon>
        </span>
      </div>
    </div>
  </>
}