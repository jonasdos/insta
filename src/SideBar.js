export default function SideBar() {
  return <div className="sidebar">
    <div className="usuario">
      <img src="assets/catanacomics.svg" alt="imagem de perfil" />
      <div className="texto">
        <span>
          <strong>catanacomics</strong>
          <ion-icon name="pencil"></ion-icon>
        </span>
      </div>
    </div>

    <div className="sugestoes">
      <div className="titulo">
        Sugestões para você
        <div>Ver tudo</div>
      </div>

      <div className="sugestao">
        <div className="usuario">
          <img src="assets/bad.vibes.memes.svg" alt="bad.vibes.memes.svg" />
          <div className="texto">
            <div className="nome">bad.vibes.memes</div>
            <div className="razao">Segue você</div>
          </div>
        </div>

        <div className="seguir">Seguir</div>
      </div>

      <div className="sugestao">
        <div className="usuario">
          <img src="assets/chibirdart.svg" alt="chibirdart" />
          <div className="texto">
            <div className="nome">chibirdart</div>
            <div className="razao">Segue você</div>
          </div>
        </div>

        <div className="seguir">Seguir</div>
      </div>

      <div className="sugestao">
        <div className="usuario">
          <img src="assets/razoesparaacreditar.svg" alt="razoesparaacreditar" />
          <div className="texto">
            <div className="nome">razoesparaacreditar</div>
            <div className="razao">Novo no Instagram</div>
          </div>
        </div>

        <div className="seguir">Seguir</div>
      </div>

      <div className="sugestao">
        <div className="usuario">
          <img src="assets/adorable_animals.svg" alt="adorable_animals" />
          <div className="texto">
            <div className="nome">adorable_animals</div>
            <div className="razao">Segue você</div>
          </div>
        </div>

        <div className="seguir">Seguir</div>
      </div>

      <div className="sugestao">
        <div className="usuario">
          <img src="assets/smallcutecats.svg" alt="smallcutecats" />
          <div className="texto">
            <div className="nome">smallcutecats</div>
            <div className="razao">Segue você</div>
          </div>
        </div>

        <div className="seguir">Seguir</div>
      </div>
    </div>

    <div className="links">
      Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes •
      Hashtags • Idioma
    </div>

    <div className="copyright">
      © 2021 INSTAGRAM DO FACEBOOK
    </div>
  </div>
}