export default function MenuPage() {
  return (
    <div>
      {Array.from({ length: 100 }, (_, idx) => idx + 1).map((i) => (
        <h1 style={{ marginBottom: '10px' }}>
          Menu Page
          {i}
        </h1>
      ))}
    </div>
  );
}
