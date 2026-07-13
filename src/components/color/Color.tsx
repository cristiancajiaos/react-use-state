export default function Color({color}) {
  return (
    <section className="color p-1" style={{color: color, border: `1px solid ${color}`}}>
      Color
    </section>
  );
}