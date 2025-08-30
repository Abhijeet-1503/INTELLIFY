import Level1Proctoring from "@/components/Level1Proctoring";
import Header from "@/components/Header";

const Level1 = () => {
  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Header />
      <main className="pt-20">
        <Level1Proctoring />
      </main>
    </div>
  );
};

export default Level1;