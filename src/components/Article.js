export default function Article ({date, title, img, paragraph}) {
    return (
      <article>
        <h2>{date}</h2>
        <h1>{title}</h1>
        <img src={img} alt="..."></img>
        <p className="first-p">{paragraph}</p>
        <p className="continue">Continues...</p>
        <hr></hr>
      </article>
    )
}