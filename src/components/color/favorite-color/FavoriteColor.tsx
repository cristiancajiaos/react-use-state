import './FavoriteColor.scss'

export default function FavoriteColor({ color }) {
  return (
    <section className="favorite-color">
      <p>My favorite color is <span style={{color: color}}>{color}</span></p>
    </section>
  );
}